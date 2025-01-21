// import React from 'react'
// import { Link } from 'react-router-dom'

// function Register() {
//   return (

//  <div className='flex justify-center m-28'>

//         <div className='border-grey-100 h-4/5 w-2/6 bg-dark rounded-2xl'>
//             <h1 className='text-white bold-xl text-center text-4xl mt-2 font-serif'>Register</h1>
            
//             <div className="flex flex-col items-center">
//   <div className="w-5/6">
//     <label className="text-white my-2 block">First Name</label>
//     <input
//       className="rounded border-none w-full h-8 bg-slate-600 px-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//       placeholder="First Name"
//       type="text"
//     />
//   </div>
// </div>

// <div className="flex flex-col items-center">
//   <div className="w-5/6">
//     <label className="text-white my-2 block">Last Name</label>
//     <input
//       className="rounded border-none w-full h-8 bg-slate-600 px-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//       placeholder="Last Name"
//       type="text"
//     />
//   </div>
// </div>

// <div className="flex flex-col items-center">
//   <div className="w-5/6">
//     <label className="text-white my-2 block">E-mail</label>
//     <input
//       className="rounded border-none w-full h-8 bg-slate-600 px-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//       placeholder="E-mail"
//       type="email"
//     />
//   </div>
// </div>
            
// <div className="flex flex-col items-center">
//   <div className="w-5/6">
//     <label className="text-white my-2 block">Password</label>
//     <input
//       className="rounded border-none w-full h-8 bg-slate-600 px-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//       placeholder="Password"
//       type="password"
//     />
//   </div>
// </div>
//             <div className='flex justify-center'>
//             <button className='mt-3 bg-indigo-900 text-white bold w-5/6 h-8 rounded focus:outline-none'>Sign up</button>
//             </div>
// <div className='flex justify-center p-4 text-white'>
//             <h1>I have already an account? </h1>
//             <Link to="/Login"> 
//             <button className='text-blue-400 hover:underline'>Log in</button>
//             </Link>
//             </div>

// </div>

//     </div> 
 
       
//       );
//     };
    
    


// export default Register




import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex justify-center mt-6 md:mt-10 lg:mt-10">

      <div className="border-gray-100 shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/3 bg-gray-800 rounded-2xl p-6">
        <h1 className="text-white font-bold text-3xl sm:text-4xl text-center mt-4 font-serif">Register</h1>

        <form className="mt-6">
          {/* First Name */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-full sm:w-5/6">
              <label className="text-white my-2 block">First Name</label>
              <input
                className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="First Name"
                type="text"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-5/6">
              <label className="text-white my-2 block">Last Name</label>
              <input
                className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-5/6">
              <label className="text-white my-2 block">E-mail</label>
              <input
                className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="E-mail"
                type="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-5/6">
              <label className="text-white my-2 block">Password</label>
              <input
                className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Password"
                type="password"
              />
            </div>
          </div>

          {/* Sign up button */}
          <div className="flex justify-center mt-4">
            <button className="bg-indigo-900 text-white font-semibold w-full sm:w-5/6 h-10 rounded focus:outline-none">
              Sign up
            </button>
          </div>
        </form>

        {/* Login link */}
        <div className="flex justify-center px-4 text-white mt-4">
          <h1>I have already an account?</h1>
          <Link to="/Login">
            <button className="text-blue-400 hover:underline ml-2">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
