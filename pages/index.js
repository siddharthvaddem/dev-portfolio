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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ToolsMobile from '../components/ToolsMobile.js';




export default function Home() {

    
    const { width } = useWindowDimensions();
  
    
   var mobile;
   if(width<=430)
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
    <div className={styles.linktext} style={{textAlign:mobile&&'center'}}>  Find my resume 
      <a href='https://drive.google.com/file/d/18TCHFsujomItn89eXFgfLGc8sIX3lGYJ/view?usp=sharing' target="_blank" rel="noreferrer" className={styles.altcol}>
     
       
      &nbsp;here.
  
  
      </a>
      </div>
    <div className={styles.linktext} style={{textAlign:mobile&&'center'}}>  More about me <span >
    <Link href="/about">
      <a className={styles.altcol}> here.</a>
    </Link>
   
    </span></div>
    </div>
    
    {width>700 ? <Tools/>:<ToolsMobile/>} {/*for some reason doesnt work on mobile width */}
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
      <Link href="/projects"><a className={styles.altcol} > Explore more <ArrowRightAltIcon style={{verticalAlign:'middle'}}/> </a></Link>
      
        </div>
        </div>
        {!mobile?<Projects/>:<ProjectsMobile/>}
    
    <div style={{marginTop:'10vh'}}></div>

    <ContactForm/>
    
    </>
  );
}
