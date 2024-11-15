import React from 'react';
import CustomLink from './CustomLink';

export const Hero = () => {
  return (
    <section className="mt-10 w-full h-[70vh] relative">
      <div
        className='bg-[url("/images/pexels-pixabay-276528.jpg")] w-full h-full bg-no-repeat bg-center bg-cover'
      >
        <div className="w-full h-full flex justify-center items-center relative z-10">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-6xl">
              Elegant Canadian Designs
            </h1>
            <p className="text-white text-lg md:text-xl mt-5">
              Explore our exquisite collection of Canadian furniture, crafted with elegance and sophistication.
            </p>
            <div className="flex justify-center mt-10">
              <CustomLink link={"#"} linktext={"Explore More"} />
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-orange-900 bg-opacity-20 z-0 top-0"></div>
      </div>
    </section>
  );
};
