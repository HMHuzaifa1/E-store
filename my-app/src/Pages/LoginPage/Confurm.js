// import React from 'react'
// import { Link } from 'react-router-dom'

// function Confurm() {
//   return (
// <div className='flex justify-center m-28'>

// <div className='border-grey-100 h-4/5 w-2/6 bg-dark rounded-2xl'>
//     <h1 className='text-white bold-xl text-center text-4xl mt-4 font-serif'>Confirm Password</h1>
    
//     <div className="flex flex-col items-center">
// <div className="w-5/6">
// <label className="text-white my-2 block">New Password</label>
// <input
// className="rounded border-none w-full h-8 bg-slate-600 px-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
// placeholder="New Password"
// type="password"
// />
// </div>
// </div>

// <div className="flex flex-col items-center">
// <div className="w-5/6">
// <label className="text-white my-2 block">Confirm Password</label>
// <input
// className="rounded border-none w-full h-8 bg-slate-600 px-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
// placeholder="Confirm Password"
// type="password"
// />
// </div>
// </div>


//     <div className='flex justify-center'>
//     <button className='mt-3 bg-indigo-900 text-white bold w-5/6 h-8 rounded focus:outline-none'>Save</button>
//     </div>
// <div className='flex justify-center p-4 text-white'>
//     <h1>I have already an account? </h1> 
//     <Link to="/Login">
//       <button className='text-blue-400 hover:underline' Link='/Signup'>Log in</button>
//       </Link>
//     </div>

// </div>

// </div>
//   )
// }

// export default Confurm



import React from 'react';
import { Link } from 'react-router-dom';

function Confirm() {
  return (
    <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
      <div className="border-gray-100 shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/3 bg-gray-800 rounded-2xl p-6">
        <h1 className="text-white font-bold text-3xl sm:text-4xl text-center mt-4 font-serif">Confirm Password</h1>

        <form className="mt-6">
          {/* New Password */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-full sm:w-5/6">
              <label className="text-white my-2 block">New Password</label>
              <input
                className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="New Password"
                type="password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-full sm:w-5/6">
              <label className="text-white my-2 block">Confirm Password</label>
              <input
                className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-indigo-900 text-white font-semibold w-full sm:w-5/6 h-10 rounded focus:outline-none">
              Save
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="flex justify-center px-4 pt-4 text-white mt-4">
          <h1>I have already an account?</h1>
          <Link to="/Login">
            <button className="text-blue-400 hover:underline ml-2">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
