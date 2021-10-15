import React from 'react'
import useWindowDimensions from './useWindowDimensions'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { useState,useEffect } from 'react';

const About = () => {
  const { width } = useWindowDimensions();

 var mobile;
 if(width<= 420)
 mobile=true;
 else mobile=false;
  return (
   <>
    <div className={styles.container}>
      <h1 className={mobile?styles.titlemobile:styles.title}>
        {' '}
        about me<span className={styles.altcol}>.</span>
      </h1>
      <div style={{display:'flex',flexDirection:!mobile?'row':'column'}}>
      <div className={!mobile?styles.abouttext:styles.abouttextmobile} style={{marginBottom:'2vh',width:mobile?'100%':'70%'}}>
        {' '}
        Hey! I’m <span className={styles.altcol}>Siddharth Vaddem</span>. I’m a CSE undergrad currently studying at BMSIT, Bangalore. 
        I'm a creative Full Stack Developer and tech enthusiast. Previously, I've held a Part-time position as a Software Developer Engineer at Mystry.<br/><br/>  I'm <span className={styles.altcol}> passionate </span> about bringing 
        ideas into reality. I like building projects that make a difference. I also like building dumb-stupid projects that make no difference.
        <br /><br />
        Outside of coding, I enjoy playing badminton, binging on movies/TV series and gaming.
        Feel free to reach  out to me <span > <Link href="mailto:siddharthvaddem5@gmail.com"><a target="_blank" className={styles.altcol}> here</a></Link></span>.
      </div>
      {!mobile ?<div style={{width:'30%',marginLeft:'5vw',marginTop:'-5vh'}}>
      {/* <img style={{height:'30vh',width:'30vw'}} src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt="" /> */}
      <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" layout="intrinsic" ></Image>
      </div>:
      <div style={{width:'100%',textAlign:'center'}}>
      <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" layout="intrinsic" ></Image>
      
      </div>
      }
      </div>
      
    </div>
   </>
  )
}

export default About
