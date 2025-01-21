import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
//     <div className='flex justify-center m-28'>
//                 <div className='border-gray-500 shadow-current h-4/5 w-2/6 bg-dark rounded-2xl'>

//                 <h1 className='text-white bold-xl text-center text-4xl mt-4 font-serif'>Login</h1>



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
//     <label className="text-white mb-2 block">Password</label>
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
// <div className='flex justify-center px-4 pt-4 text-white'>
//             <h1>Register a new account ?</h1> 
//             <Link to='/Register'>
//             <button className='text-blue-400 hover:underline'>Register</button>
//             </Link>
//             </div>
// <div className='flex justify-center pb-4 text-white'>
//             <h1>I forgot my password</h1> 
//             <Link to='/Forget'>
//             <button className='text-blue-400 hover:underline'>Forget password</button>
//             </Link>
//             </div>
// </div>
// </div>


<div className="flex justify-center m-8 md:m-16">
  <div className="border-gray-500 shadow-lg h-auto w-full sm:w-3/4 md:w-2/6 lg:w-1/4 bg-dark rounded-2xl p-6">

    <h1 className="text-white font-bold text-3xl md:text-4xl text-center mt-4 font-serif">Login</h1>

    <div className="flex flex-col items-center mt-6">
      <div className="w-full sm:w-5/6">
        <label className="text-white my-2 block">E-mail</label>
        <input
          className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="E-mail"
          type="email"
        />
      </div>
    </div>

    <div className="flex flex-col items-center mt-2">
      <div className="w-full sm:w-5/6">
        <label className="text-white mb-2 block">Password</label>
        <input
          className="rounded border-none w-full h-10 bg-slate-600 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Password"
          type="password"
        />
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <button className="bg-indigo-900 text-white font-semibold w-full sm:w-5/6 h-10 rounded focus:outline-none">
        Sign up
      </button>
    </div>

    <div className="flex justify-center px-4 pt-4 text-white mt-4">
      <h1>Register a new account?</h1>
      <Link to="/Register">
        <button className="text-blue-400 hover:underline ml-2">Register</button>
      </Link>
    </div>

    <div className="flex justify-center pb-4 text-white mt-2">
      <h1>I forgot my password</h1>
      <Link to="/Forget">
        <button className="text-blue-400 hover:underline ml-2">Forget password</button>
      </Link>
    </div>

  </div>
</div>



  )
}

export default Login