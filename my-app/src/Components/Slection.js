// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";

// const ResponsiveImageSlider = ({ items }) => {
//   const defaultItems = [
//     {
//       imgUrl: "https://mistore.pk/cdn/shop/files/Redmi_A3_B_300x.jpg?v=1729511609",
//       title: "Mobile",
//       // cprice: "$150",
//       // price: "$120",
//       link: "/Mobile",
//     },
//     {
//       imgUrl: "https://naviforcewatches.co/wp-content/uploads/2024/10/IMG_7215-1-1024x1024.jpg",
//       title: "Watch",
//       // cprice: "$80",
//       // price: "$60",
//       link: "/Watch",
//     },
//     {
//       imgUrl: "https://lapntabmart.pk/wp-content/uploads/2024/07/LENOVO-M10-Plus-2nd-GEN.webp",
//       title: "Tablet",
//       // cprice: "$250",
//       // price: "$200",
//       link: "/tablet",
//     },
//     {
//       imgUrl: "https://airpods.pk/wp-content/uploads/2023/05/m20-tws-wireless-bluetooth-earbuds-pakistan-1024x1024.webp",
//       title: "Earbuds",
//       // cprice: "$50",
//       // price: "$40",
//       link: "/airpods",
//     },
//     {
//       imgUrl: "https://www.czone.com.pk/Images/Thumbnails/copy-copy-copy-copy-58-czone.com.pk-1540-14926-010823103313-1540-17376-221124103029.jpg",
//       title: "Laptop",
//       // cprice: "$100",
//       // price: "$80",
//       link: "/Laptops",
//     },
//     {
//       imgUrl: "https://m.media-amazon.com/images/I/712Kctyb0pL._AC_UY218_.jpg",
//       title: "Accessoriess",
//       // cprice: "$200",
//       // price: "$150",
//       link: "/Accessories",
//     },
    
//   ];

//   // Use provided items or fallback to default items
//   const itemList = items && items.length > 0 ? items : defaultItems;

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Slider {...settings}>
//         {itemList.map((item, index) => (
//           <div key={index} className="p-4">
//             <Col className="App justify-end border-1 border-dark rounded-2xl mt-5 bg-slate-900 py-3 px-5 opacity-85 hover:py-1.5 hover:scale-110 ease-in duration-300 hover:opacity-100">
//               <Link to={item.link}>
//                 <img
//                   src={item.imgUrl}
//                   alt={item.title}
//                   className="rounded-2xl object-cover"
//                 />
//                 <h1 className="text-white text-xl text-center mt-3">
//                   {item.title}
//                 </h1>
//                 <div className="flex space-x-4 text-center justify-center">
//                   <h1 className="text-red-700 my-1 text-xl line-through font-serif">
//                     {item.cprice}
//                   </h1>
//                   <h1 className="text-white my-1 text-xl text-center font-serif">
//                     {item.price}
//                   </h1>
//                 </div>
//                 <button className="hidden sm:block mt-2 text-dark text-center border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600">
//                   Shop Now
//                 </button>
//               </Link>
//             </Col>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ResponsiveImageSlider;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Slection = ({ items }) => {
  const defaultItems = [
    {
      imgUrl: "https://mistore.pk/cdn/shop/files/Redmi_A3_B_300x.jpg?v=1729511609",
      title: "Mobile",
      link: "/Mobile",
    },
    {
      imgUrl: "https://naviforcewatches.co/wp-content/uploads/2024/10/IMG_7215-1-1024x1024.jpg",
      title: "Watch",
      link: "/Watch",
    },
    {
      imgUrl: "https://lapntabmart.pk/wp-content/uploads/2024/07/LENOVO-M10-Plus-2nd-GEN.webp",
      title: "Tablet",
      link: "/Tablet",
    },
    {
      imgUrl: "https://airpods.pk/wp-content/uploads/2023/05/m20-tws-wireless-bluetooth-earbuds-pakistan-1024x1024.webp",
      title: "Earbuds",
      link: "/Airpods",
    },
    {
      imgUrl: "https://www.czone.com.pk/Images/Thumbnails/copy-copy-copy-copy-58-czone.com.pk-1540-14926-010823103313-1540-17376-221124103029.jpg",
      title: "Laptop",
      link: "/Laptops",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/712Kctyb0pL._AC_UY218_.jpg",
      title: "Accessories",
      link: "/Accessories",
    },
  ];

  const itemList = items && items.length > 0 ? items : defaultItems;

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {itemList.map((item, index) => (
          <div key={index} className="">
            <Col className="App my-4 mx-4 flex items-center justify-center border-1 border-dark rounded-2xl bg-slate-900 py-3 px-2 opacity-85 hover:py-1.5 hover:scale-110 ease-in duration-300 hover:opacity-100">
              <Link to={item.link}>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className=" rounded-2xl h-4/6 sm:rounded-full"
                />
                <h1 className="text-white text-2xl text-center mt-3">
                  {item.title}
                </h1>
                {/* <button className="hidden sm:block ml-6 mt-3 text-center border-0 rounded px-4 py-2 bg-orange-400 hover:scale-105 ease-in duration-300 hover:bg-orange-600">
                  Shop Now
                </button> */}
              </Link>
            </Col>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slection;
