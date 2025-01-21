import React from 'react'
// import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Item2(props) {
  return (


      <Col className='App justify-end md-lg-xl:grid-row-6 sm:grid-row-6 border-1 border-dark rounded-2xl mt-5 bg-slate-900 py-3 opacity-85 hover:py-1.5 hover:scale-110 ease-in duration-300 hover:opacity-100'>
      <Link to={props.link}>
      <img src={props.imgUrl} alt='' className='rounded-2xl'/>
      <h1 className='text-white text-xl text-center mt-3'>{props.title}</h1>
      <div className='App flex space-x-4 text-center'>
        {/* Real value but prohibitive */}
      <h1 className='text-red-700 my-1 text-xl line-through font-serif'>{props.cprice}</h1>
      {/* current price */}
      <h1 className='text-white my-1 text-xl text-center font-serif'>{props.price}</h1>
      </div>
      <button className='mt-2 text-dark text-center border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600'>Shop Now</button>
      </Link>

      </Col>

//       const Item2 = ({ item }) => {
//         return (
//           <Row className=' border-1 border-dark rounded-2xl mt-5 bg-slate-900 py-10 opacity-85 hover:py-2  hover:scale-110 ease-in duration-300 hover:opacity-100'>
//             <img src={item.imgUrl} alt={item.title} />
//             <h3 className='text-white'>{item.title}</h3>
//             {/* <p>{item.description}</p> */}
//             <p className='text-white'> ${item.price}</p>
//             <button className='mt-2 text-dark border-0 rounded px-7 py-1.5 bg-orange-400 hover:scale-110 ease-in duration-300 hover:bg-orange-600'>Shop Now</button>
//           </Row>

//   );
// };

// export default Item2



  );
};

export default Item2;
