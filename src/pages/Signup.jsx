import signupImg from "../assets/Images/signup.webp";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free."
      description1="Build skills for today, tommorow and beyond."
      description2="Education to future-proof your carreer."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
