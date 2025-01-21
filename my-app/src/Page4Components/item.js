import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Col
      md="3"
      lg="3"
      xl="3"
      className="App grid-row-6 sm:grid-row-4 border-1 border-dark rounded-2xl mt-5 bg-slate-900 py-10 opecity-85 hover:pt-2  hover:scale-110 ease-in duration-300 hover:opacity-100"
    >
      <Link to={props.link}>
        <img src={props.imgUrl} alt="img" className="rounded-2xl" />
        <h1 className="text-white text-xl mt-3">{props.title}</h1>
        <div className='App flex space-x-4 text-center'>
        {/* Real value but prohibitive */}
      <h1 className='text-red-700 my-1 text-xl line-through font-serif'>{props.cprice}</h1>
      {/* current price */}
      <h1 className='text-white my-1 text-xl text-center font-serif'>{props.price}</h1>
      </div>
        <button className="mt-2 text-dark border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600">
          Shop Now
        </button>
      </Link>
    </Col>
  );
}

export default Item;