import React from "react";
import InstructorImage from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button"
import { BsFillArrowRightSquareFill } from "react-icons/bs";


const InstructorSection = () => {
  return (
    <div className=" mt-16">
      <div className="flex lg:flex-row flex-col gap-20 items-center ">
        <div className="w-[50%] shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <img
            src={InstructorImage}
            alt="instructorImage"
            className="shadow-white shadow-[-20px_-20px_0_0]  "
          />
        </div>

        <div className="w-[50%] flex flex-col items-start gap-10">
            <div className=" text-4xl font-semibold">
                Become an <br/>
                <HighlightText text={"Instructor"} />

            </div>

            <p className=" font-medium text-[16px] w-[80%] text-richblack-300">Instructors from arround the world teach millions of students on StudyNotion. We porvide the tools and skills to teach what you love.</p>

            <CTAButton active={true} linkto={"/signup"} >
                <div className="flex flex-row items-center gap-2">
                Start Teaching Today
                  <BsFillArrowRightSquareFill/>
                </div>
            </CTAButton>

        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
