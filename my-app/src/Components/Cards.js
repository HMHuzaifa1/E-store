import React from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Cards(props) {
  return (


      <Col md lg xl="3" className='flex justify-center border-1 border-dark sm:grid-row-4 rounded-2xl mt-5 bg-slate-900 py-10 opacity-85 hover:py-2  hover:scale-110 ease-in duration-300 hover:opacity-100'>
      <Link to={props.link}>
      <img src={props.imgUrl} alt='' className='rounded-2xl'/>
      <h1 className='text-white text-xl mt-3'>{props.title}</h1>
      <button className='mt-2 text-dark border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600'>Shop Now</button>
      </Link>
      </Col>

  )
}

// const Cards = ({ item }) => {
//   return (
//     <div className='flex justify-center border-1 border-dark sm:grid-row-4 rounded-2xl mt-5 bg-slate-900 py-10 opacity-85 hover:py-2  hover:scale-110 ease-in duration-300 hover:opacity-100'>
//       <img src={item.imgUrl} alt={item.title} />
//       <h3 className='text-white'>{item.title}</h3>
//       {/* <p>{item.description}</p> */}
//       <p className='text-white'><strong>Price:</strong> ${item.price}</p>
//       <button className='mt-2 text-dark border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600'>Shop Now</button>
//     </div>
//   );
// };

export default Cards