import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Typewriter } from 'react-simple-typewriter'
import { useEffect,useState } from 'react';
const Hero = () => {
  return (
    <>
    <div style={{display:'flex',flexDirection:'row'}}>
      <div className={styles.containermoving}>
      <h1 className={styles.title}>
        {' '}
        <span className={styles.altcol}>s</span>vaddem<span className={styles.altcol}>.</span>
      </h1>
      
        <div className={styles.subtitle} >
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
     
      <div className={styles.text}> &#128640;&nbsp;Exploring opportunities, side projects and new tech</div>
      <div className={styles.text}> &#127891;&nbsp;Currently a CSE Student at BMSIT</div>
      </div>
      <div style={{display:'flex',alignItems:'center',textAlign:'center',marginLeft:'10vw',marginTop:'5vh'}}>
      <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" layout="intrinsic" ></Image>
       </div>
       
       </div>
    </>
  )
}

export default Hero
