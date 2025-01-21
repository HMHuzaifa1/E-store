// // import React from 'react'
// // import Row from 'react-bootstrap/Row';
// // import Container from 'react-bootstrap/Container';
// // import Item from '../Page2.1Component/Item2'

// // function Page2() {
// //   return (
// //     <div>

// // <Container className='mt-2 '>
// //       <Row className=''>
// //       <Item imgUrl='https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D' title='Smart Watch' cprice='35,000' price='32,000'/>
// //       {/* <Item imgUrl='https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D' title='Model Watch' cprice='35,000' price='32,000'/>
// //       <Item imgUrl='https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D' title='Brand Watch' cprice='35,000' price='32,000'/>
// //       <Item imgUrl='https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D' title='Claim Watch' cprice='35,000' price='32,000'/> */}
// //       </Row>
// //       </Container>     

// //     </div>
// //   )
// // }

// // export default Page2





// import React, { useState, useRef } from "react";
// import "./ImageMagnifier.css";

// const ImageMagnifier = ({ magnifierSize = 150, zoomScale = 2 }) => {
//   const [magnifierStyle, setMagnifierStyle] = useState({});
//   const imageRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = imageRef.current.getBoundingClientRect();
//     const x = e.pageX - left;
//     const y = e.pageY - top;

//     if (x > 0 && y > 0 && x < width && y < height) {
//       setMagnifierStyle({
//         display: "block",
//         left: `${x - magnifierSize / 2}px`,
//         top: `${y - magnifierSize / 2}px`,
//         backgroundPosition: `-${x * zoomScale - magnifierSize / 2}px -${y * zoomScale - magnifierSize / 2}px`,
//       });
//     } else {
//       setMagnifierStyle({ display: "none" });
//     }
//   };

//   return (
//     <div
//       className="magnifier-container"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setMagnifierStyle({ display: "none" })}
//     >
//       <img
//         ref={imageRef}
//         src="https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85"
//         alt="Magnifiable"
//         className="magnifier-image"
//       />
//       <div
//         className="magnifier-glass"
//         style={{
//           ...magnifierStyle,
//           width: magnifierSize,
//           height: magnifierSize,
//           backgroundImage: `url(https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85)`,
//           backgroundSize: `${imageRef.current ? imageRef.current.width * zoomScale : 0}px ${
//             imageRef.current ? imageRef.current.height * zoomScale : 0
//           }px`,
//         }}
//       ></div>
//     </div>
//   );
// };

// export default ImageMagnifier;




import React, { useState } from "react";
import "./ImageCounter.css";
import Header from "../Components/Header";

const ImageCounter = () => {
  const images = [
    "https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85",
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
    "https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85",
    "https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
<div>

  <Header />

<h1 className="text-white text-center text-5xl font-serif bg-blue-950 p-4 mb-5 mt-5">Your item</h1>


    <div className="image-counter">



      <div className="main-image">


        <img src={currentImage} alt="Selected" />
      </div>
      <div className="thumbnail-container">



        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentImage === image ? "active" : ""}`}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageCounter;