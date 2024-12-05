import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';
function Layout(){
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  );
}


export default Layout;
