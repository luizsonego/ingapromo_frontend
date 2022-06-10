import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";

const Images = [
  {
    src: "/assets/cupons/banner/banner1.png",
    title: "Cupom compramais15. R$15 reais de desconto",
    description: "15 Reais de deconto",
    link: "",
  },
  {
    src: "/assets/cupons/banner/banner3.jpg",
    title: "Cupom para tudo o que precisar",
    description: "Cupom para tudo o que precisar",
    link: "",
  },
  {
    src: "/assets/cupons/banner/banner4.jpg",
    title: "Cupom 10 de desconto. BBB10",
    description: "Cupom 10 de desconto. BBB10",
    link: "",
  },
  {
    src: "/assets/cupons/banner/banner5.png",
    title: "Cupom de ate 70% de desconto",
    description: "Cupom de ate 70% de desconto",
    link: "",
  },
];

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={37}
      totalSlides={Images.length}
    >
      <Slider className="rounded-xl">
        {Images.map((image, index) => (
          <Slide index={index} key={index}>
            <img
              className="rounded-xl w-full"
              src={image.src}
              alt={image.title}
              title={image.title}
            />
          </Slide>
        ))}
      </Slider>
      {Images.length > 1 && (
        <div className="absolute bottom-8 right-8 md:bottom-5 md:right-5 flex">
          <ButtonBack>
            <a
              href
              className="h-6 w-6 flex items-center justify-center rounded-md bg-white"
            >
              <svg
                className="h-3 text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                ></path>
              </svg>
            </a>
          </ButtonBack>
          <ButtonNext>
            <a
              href="#"
              className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400"
            >
              <svg
                className="h-3 text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                ></path>
              </svg>
            </a>
          </ButtonNext>
        </div>
      )}
    </CarouselProvider>
  );
};

export default Carousel;
