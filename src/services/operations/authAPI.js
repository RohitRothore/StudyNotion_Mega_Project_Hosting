import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { endpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slices/profileSlice";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

// send otp....................

export function sendotp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP sent successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("🚀 ~ return ~ error:", error)
      toast.error(error.response.data.message || 'Something went wrong');
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId)

  };
}


//Login..........................

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));
      
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;

      dispatch(setUser({ ...response.data.user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId)

  };
}


/// GetPasswordToken..........................

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });

      console.log("RESET PASSWORD TOKEN RESPONSE......", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN ERROR", error);
      toast.error("FAILED TO SEND EMAIL FOR RESETTING PASSWORD");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId)

  };
}

//// Reset paasword..............................

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });

      console.log("RESET PASSWORD RESPONSE.....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password has been reset successfully");
      navigate("/login")
    } catch (error) {
      console.log("ERROR IN RESETTING PASSWORD", error);
      toast.error("Unable to reset password");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId)


  };
}

/// Signup.................................

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong');
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId)

  };
}

/// Logout................................

export function logout(navigate) {
    return (dispatch) =>{
        dispatch(setToken(null))
        dispatch(setUser(null))
        // dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }
}


