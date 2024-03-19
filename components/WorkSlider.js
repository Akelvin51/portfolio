import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          url: "https://github.com/Akelvin51/ConcertApp.git", 
          description: "My concert App: c# .net maui ",
      
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "https://www.linkedin.com/notifications/?filter=all",
          description: "Project Description 1", // Add description here
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "https://github.com/Akelvin51",
          description: "Project Description 1", // Add description here
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "https://github.com/Akelvin51",
          description: "Project Description 1", // Add description here
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          url: "https://github.com/Akelvin51",
          description: "Project Description 1", // Add description here
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "https://github.com/Akelvin51",
          description: "Project Description 1", // Add description here
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "https://github.com/Akelvin51",
          description: "Project Description 1", // Add description here
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "https://github.com/Akelvin51",
          description: "Project Description 1"
        },
      ],
    },
  ],
};
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <Image src={image.path} width={500} height={300} alt={image.title}/>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                {/* Overlay content */}
                <div className="absolute bottom-0 p-4 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 text-white">
                  <p className="mb-2">{image.description}</p>
              
                  <Link href={image.url}>
                    <p className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <span>VIEW</span>
                      <BsArrowRight className="text-xl" />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
