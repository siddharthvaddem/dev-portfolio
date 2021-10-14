import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import FooterMobile from './FooterMobile';
import useWindowDimensions from './useWindowDimensions.ts';
const Layout = ({ children }) => {
  const { width } = useWindowDimensions();
  var mobile;
  if (width <= 420) mobile = true;
  else mobile = false;
  //console.log(mobile);
  return (
    <div className="content">
      <Navbar />

      {children}
      {!mobile ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default Layout;
