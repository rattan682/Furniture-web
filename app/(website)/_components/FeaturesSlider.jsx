"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import Link from "next/link";

const FeaturesSlider = () => {
  // Define static data
  const [data] = useState([
    {
      id: "1",
      title: "Unique Designs Available",
      description: "Discover exclusive furniture pieces with intricate designs and superior craftsmanship for your space.",
      image: "/images/cache-Italian-Style-Mumbai-luxury-Villa-Bedroom-Furniture-Set.jpg", // Replace with the correct image path
    },
    {
      id: "2",
      title: "Customizable Options Available",
      description: "Personalize your furniture with a range of customization options to suit your style and needs.",
      image: "/images/cache-Italian-Style-Mumbai-luxury-Villa-Bedroom-Furniture-Set.jpg", // Replace with the correct image path
    },
    {
      id: "3",
      title: "Exceptional Customer Service",
      description: "Expert Craftsmanship Guaranteed",
      image: "/images/cache-Italian-Style-Mumbai-luxury-Villa-Bedroom-Furniture-Set.jpg", // Replace with the correct image path
    },
    {
      id: "4",
      title: "Sustainable and Eco-Friendly Materials",
      description: "Our furniture is crafted using sustainable materials, ensuring you make an environmentally conscious choice while enhancing your home's beauty.",
      image: "/images/cache-Italian-Style-Mumbai-luxury-Villa-Bedroom-Furniture-Set.jpg", // Replace with the correct image path
    },
  ]);

  return (
    <div className="space-y-3 p-4 min-h-[500px] flex justify-center items-center mt-[100px]  bg-gray-300 xl:p-0">
      <div className="flex flex-col justify-center items-center slider">
        <h1 className="text-center text-5xl py-20 font-bold">why choose us?</h1>
        <div className="w-[500px] max-w-[100%] md:w-[800px] pb-[100px] lg:w-[1270px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ dynamicBullets: true }}
            slidesPerView={1}
            spaceBetween={"150px"}
            loop={true}
            className=""
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: "150px",
              },
              768: {
                slidesPerView: 2,
                spaceBetween: "50px",
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: "100px",
              },
            }}
          >
            {data.map((service, i) => (
              <SwiperSlide className="h-[400px]   " key={i}>
                <div className="flex justify-center w-full h-full">
                  <div className="mt-5 ">
                    <div className="flex items-center justify-center ">
                      <Image
                        className="object-cover w-full h-[250px] rounded-xl "
                        width={200}
                        height={200}
                        alt={service.title}
                        src={service.image}
                      />
                    </div>
                    <div className="flex justify-center text-center">
                      <div className="flex flex-col items-center">
                        <h1 className="text-xl mt-5 font-bold line-clamp-1">
                          {service.title}
                        </h1>
                        <p className="w-[80%] text-md mt-5 line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlider;
