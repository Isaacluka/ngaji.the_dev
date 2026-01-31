import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Slides } from '../constants';
import Portfolio1 from '../assets/Portfolio1.png';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

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
  });

  return (
    <div className="my-6 relative w-full max-w-xl mx-auto">
      <div ref={sliderRef} className="keen-slider overflow-hidden h-full rounded-xl items-center justify-content-center">
        {Slides.map((slide) => (
          <div
            key={slide.id}
            className={"keen-slider__slide flex flex-col text-white text-2xl bg-contain bg-no-repeat md:object-[50%_30%]" }
          >
            <p className='justify-left py-6 font-bold'>{slide.header}</p> 
            <img src={slide.image} alt="" srcset=""  className=""/> 
            <p className="justify-left text-sm py-6">{slide.text}</p>

            

          </div>
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
