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
       
        <span style={{fontStyle:'italic',fontWeight:100}}>Software Developer</span> interested in the domains of &nbsp;
       
        
         <span className={styles.altcol}  style={{fontWeight:800}}>
         <Typewriter
            words={['Web Dev', 'Blockchain', 'FinTech', 'Microservices','DevOps','Business']}
            loop={6}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={80}
            delaySpeed={1000}
            
           />
         </span>
        
        
      
      </div>
     
      <div className={styles.text}> &#128640;&nbsp;I like the<span className={styles.altcol} style={{fontWeight:800}}> web</span> and code at times.</div>
      <div className={styles.text}> &#127891;&nbsp;Currently a <span style={{fontStyle:'italic',fontWeight:100}} className={styles.altcol}>CompSci</span> undergrad at <span style={{fontStyle:'italic',fontWeight:800}} className={styles.altcol}> BMSIT</span>.</div>
      </div>
      <div style={{display:'flex',alignItems:'center',textAlign:'center',marginLeft:'10vw',marginTop:'5vh'}}>
      {/* <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" layout="intrinsic" ></Image> */}
      <Image src="/astro.png" width="300" height={300} alt=".." layout="intrinsic"></Image>
       </div>
       
       </div>
    </>
  )
}

export default Hero
