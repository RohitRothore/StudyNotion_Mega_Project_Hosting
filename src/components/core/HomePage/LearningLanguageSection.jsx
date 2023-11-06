import React from 'react'
import HighlightText from "./HighlightText"
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"


const LearningLanguageSection = () => {
  return (
    <div className=' mt-36 mb-24'>
        <div className='flex flex-col gap-4 items-center'>
          <div className=' text-4xl font-semibold text-center '>
            Your Swiss Knife for 
            <HighlightText text={"learning my language"}/>
          </div>

          <div className=' text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Using spin making learning multiple language easy, with 20+ language realistic voice-cover, progress tracking, custom schedule and more.
          </div>

          <div className='flex flex-row flex-wrap items-center justify-center lg:-mt-10'>
            <img src={know_your_progress} alt='"knorYourProgess' className=' object-contain lg:-mr-32'/>
            <img src={compare_with_others} alt='"compare_with_others' className=' object-contain mt-10'/>
            <img src={plan_your_lesson} alt='"plan_your_lesson' className=' object-contain lg:-ml-36'/>
          </div>

          <div className=' w-fit '>
            <CTAButton active={true} linkto={"/signup"} >
              <div>
                Learn More
              </div>
            </CTAButton>
          </div>

        </div>
    </div>
  )
}

export default LearningLanguageSection