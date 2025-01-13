import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Play, Info } from "lucide-react";

// import image1 from "../../assets/card1.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images
  const slides = [
    {
      url: "https://images4.alphacoders.com/119/1198452.jpg",
      title: "Black Panther",
      description:
        "Black Panther is a groundbreaking Marvel film that follows T'Challa, the newly crowned king of Wakanda, as he faces challenges from foes and wrestles with his responsibilities to protect his nation and its mystical technology.",
    },
    {
      url: "https://rare-gallery.com/mocahbig/391592-kate-2021-netflix-movie-netflix-movie-2021-poster.jpg",
      title: "Birds of Prey",
      description:
        "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn) follows Harley Quinn as she teams up with a group of female vigilantes to take down a ruthless crime lord in Gotham City.",
    },
    {
      url: "https://redcapes.it/wp-content/uploads/2018/07/stranger-1.jpg",
      title: "Stranger Things",
      description:
        "Stranger Things is a nostalgic sci-fi thriller set in the 1980s, revolving around a group of kids in the small town of Hawkins who encounter mysterious government experiments and supernatural forces while searching for their missing friend. The series brilliantly blends suspense, horror, and heartwarming moments.",
    },
    {
      url: "https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg",
      title: "Money Heist",
      description:
        "Money Heist (La Casa de Papel) is a thrilling Spanish TV show that follows a group of criminals, led by The Professor, as they execute heists on the Royal Mint of Spain and the Bank of Spain. Their meticulously planned crimes unfold amid intense drama and high-stakes tension.",
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
                <h3 className="mb-2 text-2xl font-bold text-white md:text-5xl">
                  {slide.title}
                </h3>
                <p className="max-w-2xl text-base text-white/90 md:text-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                    <Play size={20} />
                    Play Now
                  </button>
                  <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white transition-colors rounded-md bg-gray-700/50 hover:bg-gray-700">
                    <Info size={20} />
                    More Info
                  </button>
                </div>
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
