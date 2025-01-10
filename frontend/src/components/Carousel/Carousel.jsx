import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import image1 from "../../assets/card1.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images
  const slides = [
    {
      url: "https://dnm.nflximg.net/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABShbW-dwcF0WdzxNH6Wrw42S0VoyMM8gvcOoQ4PhLLD2F-NMiotNJBl5sQGjhKeSh0FuMFj8CFaFkL955pBwjNPpwL4qhGHc5wOcTrhQUnzOcB162aWglEX60Dlbm-VJo0YwIw.jpg",
      title: "Kungfu Panda Mountain Lake",
      description: "Serene mountain lake surrounded by pine forests",
    },
    {
      url: "https://www.heavenofhorror.com/wp-content/uploads/2023/11/locked-in-2023-netflix-review.jpg",
      title: "Coastal Sunset",
      description: "Stunning sunset view over the ocean",
    },
    {
      url: "https://i0.wp.com/theilluminerdi.com/wp-content/uploads/2021/01/outside-the-wire-wide.jpg?w=1280&ssl=1",
      title: "Urban Architecture",
      description: "Modern city skyline at twilight",
    },
    {
      url: "https://greenwavegazette.org/wp-content/uploads/2019/01/Bird-Box-poster-horizontal.jpg",
      title: "Desert Landscape",
      description: "Vast desert dunes under clear blue skies",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* Main image container */}
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-8 bg-gradient-to-t from-black/70 to-transparent">
              <div className="mx-auto max-w-7xl">
                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  {slide.title}
                </h3>
                <p className="max-w-2xl text-base text-white/90 md:text-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={previousSlide}
          className="absolute p-2 transition-all duration-200 -translate-y-1/2 rounded-full left-4 md:left-8 top-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute p-2 transition-all duration-200 -translate-y-1/2 rounded-full right-4 md:right-8 top-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute flex space-x-2 -translate-x-1/2 bottom-20 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
