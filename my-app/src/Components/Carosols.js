import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  const slides = [
    {
      type: "image",
      src: "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men-1.jpg",
      alt: "First slide",
      caption: "One that you like",
    },
    {
      type: "video",
      src: "https://youtu.be/DFkQNeIUwYU?si=2iproneikXyqoXzU&t=21", // Replace with your video URL
      alt: "Second slide video",
      caption: "Explore our latest video",
    },
    {
      type: "image",
      src: "https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men-1.jpg",
      alt: "Third slide",
      caption: "Discover your style",
    },
  ];

  return (
    <div>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {slide.type === "image" ? (
              <img src={slide.src} alt={slide.alt} />
            ) : (
              <video
                controls
                autoPlay
                // muted
                loop
                className="w-full"
              >
                <source src={slide.src} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
              </video>
              
              
            ) }
            <Carousel.Caption>
              <div className="hidden md:block">
                <button className="border border-dark bg-dark w-25 h-11 hover:bg-transparent">
                  Shop
                </button>
                <p className="text-xl text-slate-950">{slide.caption}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h1 className="text-3xl text-light mt-4">Items</h1>
    </div>
  );
}

export default Carousels;