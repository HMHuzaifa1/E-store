import React from "react";
import Header from "../Components/Header";
import Item from "../Page2Components/Item";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../Components/Footer";
import Slection from "../Components/Slection";
import { Link } from "react-router-dom";

function Page5() {
  const items = [
    {
      id: 5.1,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 1",
      cprice: 100,
      price: 100,
    },
    {
      id: 5.2,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 2",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.3,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 3",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.4,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 4",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.5,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 5",
      cprice: 100,
      price: 100,
    },
    {
      id: 5.6,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 6",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.7,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 7",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.8,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 8",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.9,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 9",
      cprice: 100,
      price: 100,
    },
    {
      id: 5.10,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 10",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.11,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 11",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.12,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 12",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.13,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 13",
      cprice: 100,
      price: 100,
    },
    {
      id: 5.14,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 14",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.15,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 15",
      cprice: 100,
      price: 200,
    },
    {
      id: 5.16,
      imgUrl: "https://via.placeholder.com/500",
      title: "Item 16",
      cprice: 100,
      price: 200,
    },
  ];
  



  return (
    <div>
      <Header />

      <h1 className="text-center text-white mt-24 text-5xl font-serif bg-blue-950 py-10">
        Earbuds
      </h1>
{/* 
      <Container className="mt-2 ">
        <Row className="justify-content-md-center item-no"> */}
          {/* <Item
            imgUrl="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            title="Smart Watch"
            cprice="35,000"
            price="32,000"
            link="/SecondPage"
          />
          <Item
            imgUrl="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            title="Model Watch"
            cprice="35,000"
            price="32,000"
          />
          <Item
            imgUrl="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            title="Brand Watch"
            cprice="35,000"
            price="32,000"
          />
          <Item
            imgUrl="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            title="Claim Watch"
            cprice="35,000"
            price="32,000"
          /> */}
<Container className="mt-2 ">
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 item-no">
  {items.map((item) => (
    <Link key={item.id} to={`/detail/${item.id}`}>
      <Item item={item} /> {/* Correct the prop name */}
    </Link>
  ))}
</div>
</Container>


      <Slection />

      <Footer />

      <h1 className="text-white bg-dark text-center">
        @2024 CEO of Next All rights reserved
      </h1>
    </div>
  );
}

export default Page5;
