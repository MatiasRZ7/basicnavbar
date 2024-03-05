import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home1 } from './pages/Home1.jsx';
import { About } from './pages/About.jsx';
import { Blog } from './pages/Blog.jsx';
import { Services } from './pages/Services.jsx';
import { Signup } from './pages/Signup.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: "",
    element: <Home1 />
  },
  {
    path: "about",
    element: <About />
  },
{
    path: "blog",
    element: <Blog />
},
{
    path: "services",
    element: <Services />
},
{
    path: "signup",
    element: <Signup />
}
],
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
