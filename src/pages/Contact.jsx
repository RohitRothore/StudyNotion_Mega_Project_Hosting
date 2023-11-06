import React from "react";
import ContactDetails from "../components/ContactPage/ContactDetails";
import ContactForm from "../components/ContactPage/ContactForm";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="lg:w-[35%] lg:mt-12">
          <ContactDetails />
        </div>

        <div className="lg:w-[45%]  lg:mr-8 lg:-mt-6">
          <ContactForm />
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col  justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
       <div>
       <h1 className="text-center text-4xl font-semibold hidden md:block mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider/>
       </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
