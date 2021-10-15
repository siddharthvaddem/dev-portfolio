import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Typewriter } from 'react-simple-typewriter'
import { useEffect,useState } from 'react';

const HeroMobile = () => {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column'}}>
      <div className={styles.containermovingmobile}>
      <h1 className={styles.titlemobile}>
        {' '}
        <span className={styles.altcol}>s</span>vaddem<span className={styles.altcol}>.</span>
      </h1>
      
        <div className={styles.subtitlemobile} >
        {' '}
       
        Full Stack Developer who likes to build stuff with &nbsp;
       
        
         <span className={styles.altcol}>
         <Typewriter
            words={['React', 'NodeJS', 'NextJS', 'Javascript']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={80}
            delaySpeed={1000}
            
           />
         </span>
        
        
      
      </div>
     
      <div className={styles.textmobile}>&#128640;&nbsp;Exploring new opportunities </div>
      <div className={styles.textmobile}>&#127891;&nbsp;Currently a CSE Student at BMSIT</div>
      </div>
      <div style={{display:'flex',alignItems:'center',textAlign:'center',margin:'auto',marginTop:'2vh'}}>
      <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" ></Image>
       </div>
       
       </div>
    </>
  )
}

export default HeroMobile
