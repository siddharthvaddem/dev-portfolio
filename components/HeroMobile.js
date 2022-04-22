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
       
        <span style={{fontStyle:'italic',fontWeight:100}}>Software Developer</span> interested in the domains of &nbsp;
       
        
         <span className={styles.altcol} style={{fontWeight:800}}>
         <Typewriter
            words={['Web Dev', 'Blockchain', 'FinTech', 'Microservices','DevOps','Business']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={80}
            delaySpeed={1000}
            
           />
         </span>
        
        
      
      </div>
      <div style={{textAlign:'center'}}>
     
      <div className={styles.textmobile}>&#128640;&nbsp;I like the <span className={styles.altcol} style={{fontWeight:800}}>web</span> and code at times. </div>
      <div className={styles.textmobile}>&#127891;&nbsp;<span style={{fontStyle:'italic',fontWeight:100}} className={styles.altcol}>CompSci</span> undergrad at <span style={{fontStyle:'italic',fontWeight:800}} className={styles.altcol}> BMSIT</span>.</div>
      </div>
      </div>
      <div style={{display:'flex',alignItems:'center',textAlign:'center',margin:'auto',marginTop:'2vh'}}>
      {/* <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" ></Image> */}
      <Image src="/astro.png" width="200" height="200" alt=".." layout="intrinsic"></Image>
       </div>
       
       </div>
    </>
  )
}

export default HeroMobile
