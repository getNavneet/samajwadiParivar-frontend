import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import store from './components/Store.js';
import { Route ,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Latest from './components/latest/Latest.jsx';
import ContactSection from './components/contact/Contact.jsx'
const router=createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='latest' element={<Latest/>}/>
  <Route path='contact' element={<ContactSection/>}/>
</Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
         <RouterProvider router={router}>
       <ScrollToTop/>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
