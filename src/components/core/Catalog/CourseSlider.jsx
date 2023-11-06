import React from 'react'
import {Swiper, SwiperSlide,}  from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import Course_Card from './Course_Card'


const CourseSlider = ({Courses}) => {
  return (
    <>
    {
        Courses?.length ? (
            <Swiper
            slidesPerView={2} 
            loop={true}
            spaceBetween={80}
            pagination={true}
            modules={[Autoplay, FreeMode, Pagination, Navigation ]}
            className='mySwiper mt-5 max-h-[40rem]'
            autoplay={{
                delay: 1000,
                disableOnInteraction:false,
            }}
            navigation={true}
            breakpoints={{
                1024: {slidesPerView:2}
            }}
            >
            {
                Courses?.map((course, index) => (
                    <SwiperSlide key={index} >
                        <Course_Card course={course} Height={"h-[350px]"}/>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        ) : (<p className="text-xl text-richblack-5">No Course Found</p>)
    }
    </>
  )
}

export default CourseSlider