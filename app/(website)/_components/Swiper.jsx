"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomLink from "./CustomLink";

export default () => {
  return (
    <Swiper
      className="w-100 h-[90vh]"
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={0}
      modules={[Navigation, Pagination, Autoplay]} // Use imported modules here
      navigation // Enables navigation
      pagination={{ clickable: true }} // Enables pagination
    >
      <SwiperSlide className='bg-[url("/images/pexels-pixabay-276528.jpg")] w-full h-full bg-no-repeat bg-center bg-cover'>
      <div className="w-full h-full flex justify-center items-center relative z-10">
  <div>
    <h1 className="text-white text-6xl text-center">
      Elegant Canadian Designs
    </h1>
    <p className="text-white text-xl mt-5">
      Explore our exquisite collection of Canadian furniture, crafted
      with elegance and sophistication.
    </p>
    <div className="flex justify-center mt-10 items-center">
      <CustomLink link={"#"} linktext={"Explore More"} />
    </div>
  </div>
</div>
<div className="w-full h-full absolute bg-orange-900 bg-opacity-20 z-0 top-0"></div>
   </SwiperSlide>
      <SwiperSlide className='bg-[url("/images/brown-furniture-ideas-fb.jpg")] w-full h-full bg-no-repeat bg-center bg-cover'>
      <div className="w-full h-full relative flex justify-center items-center">
  <div className="z-10">
    <h1 className="text-white text-6xl text-center">
      Elegant Canadian Designs
    </h1>
    <p className="text-white text-xl mt-5">
      Explore our exquisite collection of Canadian furniture, crafted
      with elegance and sophistication.
    </p>
    <div className="flex justify-center mt-10 items-center">
      <CustomLink link={"#"} linktext={"Explore More"} />
    </div>
  </div>
  <div className="w-full h-full absolute bg-orange-900 bg-opacity-40 z-0 top-0"></div>
</div>

      </SwiperSlide>
      <SwiperSlide className='bg-[url("/images/Classic-interior-moodboard-melodia-living-room.webp")] w-full h-full bg-no-repeat bg-center bg-cover'>
      <div className="w-full h-full relative flex justify-center items-center">
  <div className="z-10">
    <h1 className="text-white text-6xl text-center">
      Elegant Canadian Designs
    </h1>
    <p className="text-white text-xl mt-5">
      Explore our exquisite collection of Canadian furniture, crafted
      with elegance and sophistication.
    </p>
    <div className="flex justify-center mt-10 items-center">
      <CustomLink link={"#"} linktext={"Explore More"} />
    </div>
  </div>
  <div className="w-full h-full absolute bg-gray-900 bg-opacity-50 z-0 top-0"></div>
</div>

      </SwiperSlide>
    </Swiper>
  );
};
