import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
// import React from "react";
const Detail = () => {
  const items = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
      title: "Mobile",
      description: "Welcome to the Betting Site Development repository. This project aims to create a cutting-edge online betting platform that operates seamlessly across multiple blockchains piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      cprice: 500,
      price: 500,
      link: "/Mobile",
    },
    {
      id: 2,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 2",
      description: "This is the description for Item 2.",
      price: 200,
      link: "/Mobile",
    },
    {
      id: 3,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 3",
      description: "This is the description for Item 3.",
      price: 300,
      link: "/Mobile",
    },
    {
      id: 4,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 1",
      description: "This is the description for Item 4.",
      price: 400,
      link: "/Mobile",
    },
    {
      id: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
      title: "Mobile",
      description: "Welcome to the Betting Site Development repository. This project aims to create a cutting-edge online betting platform that operates seamlessly across multiple blockchains piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      cprice: 500,
      price: 500,
      link: "/Mobile",
    },
    {
      id: 6,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 2",
      description: "This is the description for Item 2.",
      price: 200,
      link: "/Mobile",
    },
    {
      id: 7,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 3",
      description: "This is the description for Item 3.",
      price: 300,
      link: "/Mobile",
    },
    {
      id: 8,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 1",
      description: "This is the description for Item 4.",
      price: 400,
      link: "/Mobile",
    },
    {
      id: 9,
      imgUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
      title: "Mobile",
      description: "Welcome to the Betting Site Development repository. This project aims to create a cutting-edge online betting platform that operates seamlessly across multiple blockchains piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      cprice: 500,
      price: 500,
      link: "/Mobile",
    },
    {
      id: 10,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 2",
      description: "This is the description for Item 2.",
      price: 200,
      link: "/Mobile",
    },
    {
      id: 11  ,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 1",
      description: "This is the description for Item 4.",
      price: 400,
      link: "/Mobile",
    },
    {
      id: 12,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 3",
      description: "This is the description for Item 3.",
      price: 300,
      link: "/Mobile",
    },
    {
      id: 13,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 1",
      description: "This is the description for Item 4.",
      price: 400,
      link: "/Mobile",
    },
    {
      id: 14,
      imgUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
      title: "Mobile",
      description: "Welcome to the Betting Site Development repository. This project aims to create a cutting-edge online betting platform that operates seamlessly across multiple blockchains piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      cprice: 500,
      price: 500,
      link: "/Mobile",
    },
    {
      id: 15,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 2",
      description: "This is the description for Item 2.",
      price: 200,
      link: "/Mobile",
    },
    {
      id: 16,
      imgUrl:
        "https://i02.appmifile.com/795_operatorx_operatorx_opx/03/06/2024/9922b194b401c253b72b91ad36b0ec31.png?thumb=1&w=220&f=webp&q=85",
      title: "Item 3",
      description: "This is the description for Item 3.",
      price: 300,
      link: "/Mobile",
    },
  
  ];
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }


  return (

    <div>

<Header />


    <Container className="flex mt-24 mb-16 rounded-3xl h-min">
<Row>

<div className="flex bg-orange-500 mb-6 p-8 text-center">
      {/* <p className="text-white flex font-serif">
        <strong className="text-xl">Price :</strong> ${item.price}
      </p> */}
      <h1 className="text-red-700 text-3xl line-through ">Price: ${item.cprice}</h1>
      <h1 className="text-white m-4  text-5xl">Price: ${item.price}</h1>
      </div>


<Col className="flex @apply items-center justify-center bg-slate-900 rounded-2xl border" lg={6} sm={12}>
      <img className="rounded-2xl h-5/6 hover:scale-110 ease-in duration-700" src={item.imgUrl} alt={item.title} />


      </Col>

<Col className="flex border rounded-2xl bg-slate-900 hover:scale-96 ease-in duration-700" lg={6} xl={6} sm={12}>
  <div className="text-white text-3xl bg-orange-500 px-2  @apply rounded-bl-2xl text-center pt-2 mt-4 font-serif">
      <h1>{item.title}</h1>
      </div>
      <div className="flex mt-10 h-4/6">
      <p className="text-white p-2">{item.description}</p>

      </div>




    </Col>
    
    </Row>
    </Container>

    





    <Footer />



    </div>
  );
};

export default Detail;
