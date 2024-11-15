"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import CustomLink from "./CustomLink";

export default () => {
  return (
    <Swiper
      className="w-100 h-[70vh]"
      spaceBetween={50}
      slidesPerView={1}
      autoplay={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='bg-[url("/images/pexels-pixabay-276528.jpg")] w-full h-full bg-no-repeat bg-center bg-cover   '>
        <div className="w-full h-full flex justify-center items-center">
          <div className="">
            <h1 className="text-white text-6xl text-center ">
              Elegant Canadian Designs
            </h1>
            <p className="text-white text-xl mt-5 ">Explore our exquisite collection of Canadian furniture, crafted with elegance and sophistication.</p>
            <div className="flex justify-center mt-10 items-center"><CustomLink link={"#"} linktext={"Explore More"}/></div>
            
              </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-[url("/images/elegant-362808142-0l9lg.avif")] w-full h-full bg-no-repeat bg-center bg-cover   '>
        <div className="w-full h-full flex justify-center items-center">
          <div className="">
            <h1 className="text-white text-6xl text-center ">
              Elegant Canadian Designs
            </h1>
            <p className="text-white text-xl mt-5 ">Explore our exquisite collection of Canadian furniture, crafted with elegance and sophistication.</p>
            <div className="flex justify-center mt-10 items-center"><CustomLink link={"#"} linktext={"Explore More"}/></div>
            
              </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-[url("/images/Classic-interior-moodboard-melodia-living-room.webp")] w-full h-full bg-no-repeat bg-center bg-cover   '>
        <div className="w-full h-full flex justify-center items-center">
          <div className="">
            <h1 className="text-white text-6xl text-center ">
              Elegant Canadian Designs
            </h1>
            <p className="text-white text-xl mt-5 ">Explore our exquisite collection of Canadian furniture, crafted with elegance and sophistication.</p>
            <div className="flex justify-center mt-10 items-center"><CustomLink link={"#"} linktext={"Explore More"}/></div>
            
              </div>
        </div>
      </SwiperSlide>
    
    </Swiper>
  );
};
