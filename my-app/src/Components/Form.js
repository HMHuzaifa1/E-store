// import React from 'react'

// function Form() {
//   return (
//     <div>
        
// {/* <br /> */}
//         <input type='text' placeholder='Enter Email' className='border-1 border-slate-600 px-20 py-2 bg-slate-700 text-white '/>

//         <button className='border-1 border-orange-600 py-2 px-20 bg-orange-400 text-black hover:bg-orange-600 hover:border-orange-500'>Log in </button>

//         <br />
//         <br />
//         <br />

//     </div>
//   )
// }

// export default Form



import React from 'react';

function Form() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 p-10">
      {/* <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg"> */}
        <h2 className="text-2xl font-bold text-center underline underline-offset-8 text-white mb-6">Log In</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Email"
            className="flex-1 border border-slate-600 px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {/* Button */}
          <button className="md:w-auto w-full py-2 px-4 bg-orange-400 text-black font-semibold rounded-md hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
            Log in
          </button>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Form;
