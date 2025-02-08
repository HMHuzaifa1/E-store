// import React from 'react'
// import Cards from '../Components/Cards';
// // import Carosols from './Carosols';
// import Header from '../Components/Header';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Item from '../Components/Item'
// import Slection from '../Components/Slection'
// import Form  from '../Components/Form';
// import Video from '../Components/Video';
// import Footer from '../Components/Footer';
// // import { Link } from 'react-router-dom';
// import ResponsiveImageSlider from "./ResponsiveImageSlider";

// function Page1() {
//   const products = [
//     {
//       imgUrl: "https://example.com/image1.jpg",
//       title: "Product 1",
//       cprice: "$100",
//       price: "$80",
//       link: "/product/1",
//     },
//     {
//       imgUrl: "https://example.com/image2.jpg",
//       title: "Product 2",
//       cprice: "$200",
//       price: "$150",
//       link: "/product/2",
//     },
//   ];

//   return (
//     <div className="App">

//       <Header />
//       <br />
//       <br />
//       <br />

//       <Slection />
//       <h1 className="text-center text-xl mb-4">Featured Products</h1>
//       <ResponsiveImageSlider items={products} />

//       {/* <Container className="mt-2">
//         <Row className="justify-end item-no">

//           <Slection imgUrl="https://mistore.pk/cdn/shop/files/Redmi_A3_B_300x.jpg?v=1729511609" title="Mobiles" link="/Mobile"/>

//           <Slection imgUrl="https://naviforcewatches.co/wp-content/uploads/2024/10/IMG_7215-1-1024x1024.jpg" title="Watchs" link='/Watch'/>

//           <Slection imgUrl="https://lapntabmart.pk/wp-content/uploads/2024/07/LENOVO-M10-Plus-2nd-GEN.webp" title="Tablets" link='/Tablet'/>

//           <Slection imgUrl="https://airpods.pk/wp-content/uploads/2023/05/m20-tws-wireless-bluetooth-earbuds-pakistan-1024x1024.webp" title="Airpods" link='/Airpods'/>

//           <Slection imgUrl="https://www.czone.com.pk/Images/Thumbnails/copy-copy-copy-copy-58-czone.com.pk-1540-14926-010823103313-1540-17376-221124103029.jpg" title="Laptops" link='/Laptops'/>

//           <Slection imgUrl="https://m.media-amazon.com/images/I/712Kctyb0pL._AC_UY218_.jpg" title="Accessories" link='Accessories'/>

//         </Row>
//       </Container> */}

//       <hr />

//       <Container className='mt-2 '>
// <Row className='justify-content-md-center grid-row-4 justify-around item-no'>
//       <Cards imgUrl='https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85' title='Fold Smart Phone' link='/Mobile'/>
//       <Cards imgUrl='https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85' title='Smart Phone' link='/Mobile'/>
//       <Cards imgUrl='https://i02.appmifile.com/30_operatorx_operatorx_opx/24/06/2024/965dad479bbe458c5119d225cea6ba5e.png?thumb=1&w=220&f=webp&q=85' title='Camera Phone' link='/Mobile'/>
//       <Cards imgUrl='https://i02.appmifile.com/855_operatorx_operatorx_opx/11/01/2024/4fad3c8039e37a4fa97f8be0462e88e5.png?thumb=1&w=220&f=webp&q=85' title='Galaxy Phone' link='/Mobile'/>
//       </Row>
//       </Container>

//       <Container className='mt-2 '>
//       <Row className='justify-content-md-center item-no'>
//       <Item imgUrl='https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Nitro_Cam002V1.webp?v=1717227422' title='Smart Watch' link='/Watch'/>
//       <Item imgUrl='https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-6329_Cam002_F5.png?v=1730727294' title='Model Watch' link='/Watch'/>
//       <Item imgUrl='https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-11268_Cam002_M19.png?v=1724239366' title='Brand Watch' link='/Watch'/>
//       <Item imgUrl='https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-BULLSTON-8.0-Cam002_M12.webp?v=1725869689' title='Claim Watch' link='/Watch'/>
//       </Row>
//       </Container>

// <br />
// <br />
// <br />
// <br />

// <h1 className='text-2xl text-white underline decoration-solid font-serif'>LOG IN</h1>

// <Form />

// <br />
// <br />

// <Video />

// <br />
// <br />
// <br />

// <Footer />

// <h1 className='text-white bg-dark'>@2024 CEO of Next All rights reserved</h1>

//     </div>
//   )
// }

// export default Page1

import React from "react";
import Cards from "../Components/Cards";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Components/Item";
import Slection from "../Components/Slection";
import Form from "../Components/Form";
import Video from "../Components/Video";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
// import ResponsiveImageSlider from "../Components/Slection";

function Page1() {
  // const items = [
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
  //     title: "Item 1",
  //     description: "This is the description for Item 1.",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     imgUrl:
  //       "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
  //     title: "Item 2",
  //     description: "This is the description for Item 2.",
  //     price: 200,
  //   },
  //   {
  //     id: 3,
  //     imgUrl:
  //       "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
  //     title: "Item 3",
  //     description: "This is the description for Item 3 .",
  //     price: 300,
  //   },
  //   {
  //     id: 4,
  //     imgUrl:
  //       "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
  //     title: "Item 1",
  //     description: "This is the description for Item 4.",
  //     price: 400,
  //   },
  // ];

  const watchItems = [
    {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Nitro_Cam002V1.webp?v=1717227422",
      title: "Smart Watch",
      link: "/Watch",
    },
    {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-6329_Cam002_F5.png?v=1730727294",
      title: "Model Watch",
      link: "/Watch",
    },
    {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-11268_Cam002_M19.png?v=1724239366",
      title: "Brand Watch",
      link: "/Watch",
    },
    {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-BULLSTON-8.0-Cam002_M12.webp?v=1725869689",
      title: "Claim Watch",
      link: "/Watch",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="flex justify-center items-center mt-20">
        {/* <img className="w-5/6  rounded-xl" src="https://img.lazcdn.com/us/domino/1787bd76-4ee5-4c17-ba38-56b64ee7bc61_PK-1976-688.jpg_2200x2200q80.jpg" /> */}
        <img
          className="w-5/6  rounded-xl"
          src="https://img.lazcdn.com/us/lazgcp/32943f54-a57d-427b-954f-94ee9f3d3adf_PK-1188-400.png_1200x1200q80.png_.webp"
        />
      </div>

      <div className="">
        <Slection />
      </div>


      <Container className="mt-2 ">
        <Row className="justify-content-md-center item-no">
          <Cards
            imgUrl="https://i02.appmifile.com/580_operatorx_operatorx_opx/05/06/2024/b6ab95ebbd9fb402b423ba9963522a80.png?thumb=1&w=220&f=webp&q=85"
            title="Smart Watch"
            cprice="35,000"
            price="32,000"
            link="/Mobile"
          />
          <Cards
            imgUrl="https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85"
            title="Model Watch"
            cprice="35,000"
            price="32,000"
            link="/Mobile"
          />
          <Cards
            imgUrl="https://i02.appmifile.com/30_operatorx_operatorx_opx/24/06/2024/965dad479bbe458c5119d225cea6ba5e.png?thumb=1&w=220&f=webp&q=85"
            title="Brand Watch"
            cprice="35,000"
            price="32,000"
            link="/Mobile"
          />
          <Cards
            imgUrl="https://i02.appmifile.com/855_operatorx_operatorx_opx/11/01/2024/4fad3c8039e37a4fa97f8be0462e88e5.png?thumb=1&w=220&f=webp&q=85"
            title="Claim Watch"
            cprice="35,000"
            price="32,000"
            link="/Mobile"
          />

          {/* {items.map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              <Cards item={item} />
            </Link>
          ))} */}
        </Row>
      </Container>

      <Container className="mt-2">
        <Row className="justify-content-md-center item-no">
          {watchItems.map((item, index) => (
            <Item
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              link={item.link}
            />
          ))}
        </Row>
      </Container>

      {/* <br /> */}
      {/* <h1 className="text-2xl text-white mt-12 underline decoration-solid font-serif">
        LOG IN
      </h1> */}
      <Form />

      <br />
      <Video />

      <br />
      <Footer />

      <h1 className="text-white bg-dark">
        @2024 CEO of Next All rights reserved
      </h1>
    </div>
  );
}

export default Page1;
