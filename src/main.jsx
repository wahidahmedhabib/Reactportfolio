import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut.jsx';
import HeroSec from './component/HeroSec/HeroSec.jsx';
import About from './component/Page2/About.jsx';
import Home from './component/Home.jsx';
import Contact from './component/contact/Contact.jsx';
import Projects from './component/Projects/Projects.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut />}>
     
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<HeroSec />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />

    </Route>
  )
)



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayOut />,
//     children: {
//       path: '',
//       element: <HeroSec />
//     }
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>,
)
