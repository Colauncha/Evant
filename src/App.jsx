import "./index.css";
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Investors from './pages/Investors'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

import Notfound from './components/Notfound'
import Contact from "./pages/Contact";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />


          <Route path='contact' element={<Contact />} />


          <Route path='about' element={<About />} />
          <Route path='investors' element={<Investors />} />
          <Route path='service' element={<Service />} />
          <Route path='*' element={<Notfound />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='reset-password' element={<ResetPassword />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
