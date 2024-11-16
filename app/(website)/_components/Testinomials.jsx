"use client"

import { Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { SliderCom } from './SliderCom';

export default () => {
    const [spread, setspread] = useState(false)

    const sliderInfo = [
        {
            description: "I was blown away by the quality of the furniture I purchased! The pieces are not only stylish but also incredibly comfortable. The delivery was prompt, and everything arrived in perfect condition. Highly recommend!",
            more: "first",
            image: "/images/c9f20b95983f488c3f80c74157ba2229.jpg",
            designation: "— Samantha T.",
        },
        {
            description:'From browsing the website to the final delivery, everything was seamless. The customer service team was incredibly helpful in choosing the perfect set for my living room. I will definitely be coming back for future purchases!',
            more: 'second',
            image: '/img/testi-1.webp',
            designation: '— John D'
        },
        {
            description:'I was looking for furniture that would fit perfectly with my modern apartment. This store has the best selection, and I found just what I needed! The quality is top-notch, and it looks amazing in my space.',
            more: 'third',
            image: '/img/testi-2.webp',
            designation: '— Emily R.'
        }
    ]

    return (
        <div className="slider">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[0].image} description={sliderInfo[0].description} designation={sliderInfo[0].designation} more={sliderInfo[0].more}/>
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[1].image} description={sliderInfo[1].description} designation={sliderInfo[1].designation} more={sliderInfo[1].more}/>
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[2].image} description={sliderInfo[2].description} designation={sliderInfo[2].designation} more={sliderInfo[2].more}/>
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[0].image} description={sliderInfo[0].description} designation={sliderInfo[0].designation} more={sliderInfo[0].more}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
