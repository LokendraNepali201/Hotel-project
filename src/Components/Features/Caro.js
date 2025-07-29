import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";

const Caro = () => {
  return (
    <div className="relative">
      <Carousel
        autoplay={true}
        loop={true}
        transition={{ type: "tween", duration: 1 }}
        className="rounded-xl h-[700px]"
      >
        <img
          src="http://www.millenniumparkpanchgani.com/mobile/images/folder/slider-4.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://cdn.smartslider3.com/wp-content/uploads/slider/cache/ef451b69c78f3d31fece7ce910fe3a05/slide1.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://www.chaletsuisse-aruba.com/wp-content/uploads/2018/07/home-page-slider4.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      {/* Overlay text on top of the carousel */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
        <h1 className="text-4xl md:text-6xl mb-3 font-dancing">
          Royal Hotel Limited
        </h1>
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
          ))}
        </div>
        <p className="text-xl md:text-2xl italic">
          Legacy of Luxury & Comfort
        </p>
      </div>
    </div>
  );
};

export default Caro;
