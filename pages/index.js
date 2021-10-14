import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Tools from '../components/Tools'
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm.js';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'
import { useEffect,useState } from 'react';
import Hero from '../components/Hero.js';
import HeroMobile from '../components/HeroMobile.js';
import Buttons from '../components/Buttons.js';
import ButtonsMobile from '../components/ButtonsMobile.js';
import ProjectsMobile from '../components/ProjectsMobile.js';
import useWindowDimensions from '../components/useWindowDimensions.ts';




export default function Home() {

    
    const { width } = useWindowDimensions();
  
    
   var mobile;
   if(width<=420)
   mobile=true;
   else mobile=false;
   //console.log(mobile)
  return (
    <>
    {/* <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
    
    { !mobile ?<Hero/>:<HeroMobile/>}
    {!mobile? <Buttons/>:<ButtonsMobile/>}
    <div className={styles.container}>
    <div className={styles.linktext} style={{textAlign:mobile&&'center'}}>  Find my resume <span className={styles.altcol}>here.</span></div>
    <div className={styles.linktext} style={{textAlign:mobile&&'center'}}>  More about me <span >
    <Link href="/about">
      <a className={styles.altcol}> here.</a>
    </Link>
   
    </span></div>
    </div>
    {/* <Tools/> */}
    <div style={{marginTop:mobile?'10vh':'15vh'}}></div>

    <div className={styles.container}>
      <h1 className={mobile?styles.titlemobile:styles.title}>
        {' '}
        projects<span className={styles.altcol}>.</span>
      </h1>
      <div className={mobile?styles.subtitlemobile:styles.subtitle} style={{marginBottom:'2vh'}}>
        {' '}
        Here's some of my projects that I have worked on.
      </div>
      <div className={styles.description} style={{textAlign:mobile&&'center'}} >
      <Link href="/projects"><a className={styles.altcol} > Explore more<i className="bi bi-arrow-right"></i></a></Link>
      
        </div>
        </div>
        {!mobile?<Projects/>:<ProjectsMobile/>}
    
    <div style={{marginTop:'10vh'}}></div>

    <ContactForm/>
    
    </>
  );
}
