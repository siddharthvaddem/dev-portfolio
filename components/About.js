import React from 'react'
import useWindowDimensions from './useWindowDimensions'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { useState,useEffect } from 'react';

const About = () => {
  const { width } = useWindowDimensions();

 var mobile;
 if(width<= 430)
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
        Hey! <span className={styles.altcol}>Siddharth Vaddem </span>is a University Student, a Software Developer, and a technical-minded Entrepreneur currently based in <span style={{fontStyle:'italic',fontWeight:100}}> Bangalore</span>.
        <br/><br/>As a <span className={styles.altcol}>Student</span>  he is currently pursuing a <span style={{fontStyle:'italic',fontWeight:100}}>Bachelor of Engineering </span> in Computer Science. Previously, he held a position as an <span style={{fontStyle:'italic',fontWeight:100}}>SDE Intern </span>at <a href="https://mystry.io/" target="_blank" rel="noreferrer" className={styles.altcol}>Mystry Inc</a> where he worked with cool people trying to disrupt the sneaker-tech market.<br/><br/>  As a<span className={styles.altcol}> Developer </span> he has developed a passion for building <span style={{fontStyle:'italic',fontWeight:100}}>Innovative Web Applications</span>. His domains of interest are Software Development, Microservices, DevOps, Blockchain, FinTech and Business.
        <br /><br />
        Feel free to reach  out to him <span > <Link href="mailto:siddharthvaddem5@gmail.com"><a target="_blank" className={styles.altcol}> here</a></Link></span>.
      </div>
      {!mobile ?<div style={{width:'30%',marginLeft:'5vw',marginTop:'-5vh'}}>
      {/* <img style={{height:'30vh',width:'30vw'}} src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt="" /> */}
      {/* <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" layout="intrinsic" ></Image> */}
      <Image src="/astro.png" width="300" height={300} alt=".." layout="intrinsic"></Image>
      </div>:
      <div style={{width:'100%',textAlign:'center'}}>
      {/* <Image src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt=".." height="300" width="250" layout="intrinsic" ></Image>
       */}
       <Image src="/astro.png" width="300" height={300} alt=".." layout="intrinsic"></Image>
      </div>
      }
      </div>
      
    </div>
   </>
  )
}

export default About
