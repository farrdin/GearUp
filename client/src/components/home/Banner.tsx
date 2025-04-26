import { useState } from "react";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      imgSrc:
        "https://i.ibb.co/zH4WKd6x/daman-singh-1-Rh-Ec-Ngr-YEI-unsplash.jpg",
      alt: "Special Offer 1",
      text: "Up to 30% off on selected bicycles!",
    },
    {
      imgSrc:
        "https://i.ibb.co/prhLW5Xr/patrick-hendry-OZh-OBP-fao-unsplash.jpg",
      alt: "Special Offer 2",
      text: "Free shipping on all orders this week!",
    },
    {
      imgSrc:
        "https://i.ibb.co/DDgsT2Ds/didier-weemaels-4yfdgmbg-BWU-unsplash.jpg",
      alt: "Special Offer 3",
      text: "New arrivals are here!",
    },
  ];

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={slides[activeSlide].imgSrc}
          alt={slides[activeSlide].alt}
          className="w-full h-full object-cover"
        />
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <p className="text-white text-3xl md:text-4xl font-bold text-center">
            {slides[activeSlide].text}
          </p>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-3"
      >
        &#60;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-3"
      >
        &#62;
      </button>
    </div>
  );
};

export default Banner;
