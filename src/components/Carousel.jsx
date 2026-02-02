import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Slides } from '../constants';
import Portfolio1 from '../assets/Portfolio1.png';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);



  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 }, // 👈 ALWAYS one slide
    drag: isMobile,         // 👈 swipe only on mobile

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="my-6 relative w-full max-w-xl mx-auto">
      <div ref={sliderRef} className="keen-slider overflow-hidden h-full rounded-xl items-center justify-content-center">
        {Slides.map((slide) => (
          <div
            key={slide.id}
            className={"keen-slider__slide flex flex-col text-white text-2xl bg-contain bg-no-repeat md:object-[50%_30%]" }
            onClick={() => window.open(`${slide.link}`, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <p className='justify-left py-6 font-bold'>{slide.header}</p> 
            <img src={slide.image} alt="" srcset=""  className=""/> 
            <p className="justify-left text-sm py-6">{slide.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Slides.map((_, index) => (
          <button
            key={index}
            onClick={() => slider.current?.moveToIdx(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


      {/* desktop navigation */}
      {!isMobile && (
        <>
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
          >
            ‹
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
