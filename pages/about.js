import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { useState,useEffect } from 'react';
import useWindowDimensions from '../components/useWindowDimensions.ts';
import About from '../components/About';
const about = () => {
  
  
 
 //console.log(mobile)
  return (
   <>
   <About/>
   </>
  );
};


export default about;
