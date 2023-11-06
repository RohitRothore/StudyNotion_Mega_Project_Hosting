import React from 'react'
import ContactUsForm from './ContactUsForm';

const ContactForm = () => {
    return (
        <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:px-14 -mt-7  flex gap-2 flex-col">
          <h1 className="text-3xl  font-semibold text-richblack-5">
            Got a Idea? We&apos;ve got the skills. Let&apos;s team up
          </h1>
          <p className=" -mt-1">
            Tell us more about yourself and what you&apos;re got in mind.
          </p>
    
          <div className="-mt-[70px]">
            <ContactUsForm />
          </div>
        </div>
      );
}

export default ContactForm