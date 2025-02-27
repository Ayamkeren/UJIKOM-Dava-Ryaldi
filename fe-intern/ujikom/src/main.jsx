import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
// import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
import Card from './pages/Card.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import Login from './pages/Login.jsx'
import Toys from './admin/Toys.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/toys",
    element: <Card/>,
  },
  {
    path: "/admin",
    element: <Dashboard/>,
  },
  {
    path: "/admin2",
    element: <Toys/>,
  },
  {
    path: "/admin3",
    element: <Dashboard/>,
  },
  {
    path: "/admin4",
    element: <Dashboard/>,
  },
  // {
  //   path: "/toys",
  //   element: <Toys/>
  // },
  // {
  //   path: "/home",
  //   element: <Help/>
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
