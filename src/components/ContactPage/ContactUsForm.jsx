import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import { contactusEndpoint } from "../../services/api";
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data", data);
    try {
      setLoading(true);
      const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
      // const response = { status: "Ok" };
      console.log("Loggin Response:", response);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-5 mt-20"
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          
            <label
              htmlFor="firstname"
              className="-mb-1 text-[0.875rem]  text-richblack-5"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter Your First Name"
              {...register("firstname", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[8px] text-richblack-5"
            />
            {errors.firstname && <span className="-mt-1 text-[12px] text-yellow-100">Please Enter Your First Name</span>}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label
              htmlFor="lastname"
              className="-mb-1 text-[0.875rem]  text-richblack-5"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Your Last Name"
              {...register("lastname", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[8px] text-richblack-5"
            />
            {errors.lastname && <span className="-mt-1 text-[12px] text-yellow-100">Please Enter Your Last Name</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="-mb-1 text-[0.875rem]  text-richblack-5"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email "
            {...register("email", { required: true })}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[8px] text-richblack-5"
          />
          {errors.email && <span className="-mt-1 text-[12px] text-yellow-100">Please Enter Your Email Address</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phonenumber"
            className="-mb-1 text-[0.875rem] text-richblack-5"
          >
            Phone Number
          </label>

          <div className="flex flex-row gap-5">
            <div>
              <select
                name="dropdown"
                id="dropdown"
                {...register("countrycode", { required: true })}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[80px] rounded-[0.5rem] bg-richblack-800 p-[10px] text-richblack-5"
              >
                {CountryCode.map((element, index) => {
                  return (
                    <option key={index} value={element.code}>
                      {element.code}- {element.country}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex w-[calc(100%-80px)] flex-col gap-2">
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter Your Phone Number"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please Enter Your Phone Number",
                  },
                  maxLength: { value: 10, message: "Invalid Phone Number" },
                  minLength: { value: 8, message: "Invalid Phone Number" },
                })}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[8px] text-richblack-5"
              />
            </div>
          </div>
          {errors.phoneNo && <span className="-mt-1 text-[12px] text-yellow-100">{errors.phoneNo.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="-mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="3"
            placeholder="Enter Your Message Here"
            {...register("message", { required: true })}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[8px] text-richblack-5"
          />
          {errors.message && <span className="-mt-1 text-[12px] text-yellow-100">Please Enter Your Message</span>}
        </div>

        <button
        disabled={loading}
          type="submit"
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
        >
          Send Message
        </button>
      
    </form>
  );
};

export default ContactUsForm;
