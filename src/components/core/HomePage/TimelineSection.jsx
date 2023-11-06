import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    logo: Logo1,
    heading: "Leadership",
    Description: "Fully commited to the success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to solution",
  },
];
const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-15 items-center gap-y-16">
        <div className="flex flex-col w-[45%] gap-5">
          {timeline.map((element, index) => {
            return (
              <div>
                {/* <div className=" border border-dashed border-richblack-400 h-10 w-[2px] ml-[10px]"></div> */}
                <div className="flex flex-row gap-6" key={index}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={element.logo} />
                  </div>
                  <div>
                    <h2 className=" font-semibold text-[18px] ">
                      {element.heading}
                    </h2>
                    <p className="text-base">{element.Description}</p>
                  </div>
                </div>

                <div
                  className={`hidden ${
                    timeline.length - 1 === index ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <img
            src={timelineImage}
            alt="timelineImage"
            className=" shadow-white object-cover h-fit"
          />

          <div className=" absolute bg-caribbeangreen-700  flex flex-col lg:flex-row text-white uppercase py-8 left-[50%] translate-x-[-50%] gap-5 translate-y-[-50%] ">
            <div className=" flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-10">
              <p className=" text-3xl font-bold">10</p>
              <p className=" text-caribbeangreen-300 text-sm">
                Years Experience
              </p>
            </div>

            <div className=" flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-10">
              <p className=" text-3xl font-bold">250</p>
              <p className=" text-caribbeangreen-300 text-sm">
                Type of Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
