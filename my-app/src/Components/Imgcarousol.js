import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Carosols() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men-1.jpg"
            alt=""
          />

          <Carousel.Caption>
            <div className="hidden md:block"> 
            <button className="border border-dark bg-dark w-25 h-11 hover:bg-transparent ">
              Shop
            </button>
            <p className="text-xl text-slate-950 hidden md:block">One that you like</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men-1.jpg"
            alt=""
          />
          <Carousel.Caption>
          <div className="hidden md:block"> 
            <button className="border border-dark bg-dark w-25 h-11 hover:bg-transparent ">
              Shop
            </button>
            <p className="text-xl text-slate-950 hidden md:block">One that you like</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men-1.jpg"
            alt=""
          />

          <Carousel.Caption>
          <div className="hidden md:block"> 
            <button className="border border-dark bg-dark w-25 h-11 hover:bg-transparent ">
              Shop
            </button>
            <p className="text-xl text-slate-950 hidden md:block">One that you like</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    <h1 className="text-3xl text-light">Items</h1>


    </div>
  );
}

export default Carosols;