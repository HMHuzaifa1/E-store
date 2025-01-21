import React from 'react'
import { Col } from 'react-bootstrap'
// import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';


// function Item(props) {
//   return (


//       <Col className='App justify-end md-lg-xl:grid-row-6 sm:grid-row-6 border-1 border-dark rounded-2xl mt-5 bg-slate-900 py-3 opacity-85 hover:py-1.5 hover:scale-110 ease-in duration-300 hover:opacity-100'>
//             <Link to={props.link}>
//       <img src={props.imgUrl} alt='' className='rounded-2xl'/>
//       <h1 className='text-white text-xl text-center mt-3'>{props.title}</h1>
//       <div className='App flex justify-center space-x-4'>
//         {/* Real value but prohibitive */}
//       <h1 className='text-red-700 my-1 text-xl line-through font-serif'>{props.cprice}</h1>
//       {/* current price */}
//       <h1 className='text-white my-1 text-xl text-center font-serif'>{props.price}</h1>
//       </div>
//       <button className='mt-2 text-dark border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600'>Shop Now</button>
//       </Link>

//       <div class="detail">

//       </div>
//       </Col>



const Item = ({ item }) => {
  return (
    <Col className="App justify-center border-1 border-dark rounded-2xl mt-5 bg-slate-900 py-3 opacity-85 hover:py-1.5 hover:scale-110 ease-in duration-300 hover:opacity-100">
      <div className='flex justify-center'>
        <img
          src={item.imgUrl}
          alt={item.title}
          className="rounded-2xl w-5/6"
        />
      </div>

      <h3 className="text-white text-xl text-center mt-3">{item.title}</h3>
      <div className='flex justify-center space-x-4'>
        <p className="text-white my-1 text-xl font-serif">${item.price}</p>
        <p className="text-red-700 my-1 text-xl text-center line-through font-serif">${item.cprice}</p>
      </div>

      <button className="mt-2 text-dark border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600">
        Shop Now
      </button>
    </Col>
  );
}

export default Item;
