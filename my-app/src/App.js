// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './Pages/Page1';
import Mobile from './Pages/Page2';
import Watch from './Pages/Page3';
import Tablet from './Pages/Page4'
import Airpods from './Pages/Page5';
import Laptops from './Pages/Page6';
import Accessories from './Pages/Page7';
import SecondPage from './Pages/Page2.1';
import Register from './Pages/LoginPage/Register';
import Login from './Pages/LoginPage/Login';
import Forget from './Pages/LoginPage/Forget';
import Confurm from './Pages/LoginPage/Confurm';
import Detail from './Components/Detail'




function App() {
  const router = createBrowserRouter([

    {
      path:"/detail/:id",
      element:<Detail/>
    },
    {
      path: "/",
      element: <Page1 />, 
    },
    {
      path: "/Mobile",
      element: <Mobile />, 
    },
    {
      path: "/Watch",
      element: <Watch />, 
    },
    {
      path: "/Tablet",
      element: <Tablet />, 
    },
    {
      path: "/Airpods",
      element: <Airpods />, 
    },
    {
      path: "/Laptops",
      element: <Laptops />, 
    },
    {
      path: "/Accessories",
      element: <Accessories />, 
    },
    {
      path: "/SecondPage",
      element: <SecondPage />, 
    },
    {
      path: "/Register",
      element: <Register />, 
    },
    {
      path: "/Login",
      element: <Login />, 
    },
    {
      path: "/Forget",
      element: <Forget />, 
    },
    {
      path: "/Confurm",
      element: <Confurm />, 
    },

  ]);

  
  return (
    <div>

      

<RouterProvider router={router} />


    </div>
  );
}

export default App;


// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Page1 from './Pages/Page1';
// import Mobile from './Pages/Page2';
// import Watch from './Pages/Page3';
// // import NotFound from './Pages/NotFound';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/", // Root path for the homepage
//       element: <Page1 />,
//     },
//     {
//       path: "/mobile", // Logical path for the Mobile page
//       element: <Mobile />,
//     },
//     {
//       path: "/watch", // Logical path for the Watch page
//       element: <Watch />,
//     },
//     // {
//     //   path: "*", // Catch-all for undefined routes (404)
//     //   element: <NotFound />,
//     // },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
