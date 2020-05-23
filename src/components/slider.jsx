import React from "react";
import Swapper from "swiper";

const Slider = () => {
  const swiper = new Swapper(".swiper-container", {
    pagination: {
      dynamicBullets: true,
      el: ".swiper-pagination",
    },
  });
  return (
    <div className="relative before" style={{ height: "90vh" }}>
      <div className="swiper-slide col-span-1 md:px-20 slider-1 h-full text-center">
        <div className="flex items-center justify-center flex-col h-full max-w-3xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold text-white">Bussiness Innovation & Re-Engineering Company</h1>

          <button className="btn px-6 py-3 bg-primary-100 rounded text-white font-bold my-6">
            Get started <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="swiper-slide col-span-1 md:px-20 slider-1 h-full text-center">
        <div className="flex items-center justify-center flex-col h-full max-w-3xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold text-white">Bussiness Innovation & Re-Engineering Company</h1>

          <button className="btn px-6 py-3 bg-primary-100 rounded text-white font-bold my-6">
            Contact us <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
