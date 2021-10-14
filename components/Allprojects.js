import React from 'react'
import styles from '../styles/Home.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import useWindowDimensions from './useWindowDimensions.ts';
const Allprojects = () => {
  
  const { width } = useWindowDimensions();
 
    

   var mobile;
   if(width<=420)
   mobile=true;
   else mobile=false;
   //console.log(mobile)
  return (
    <>
     <div className={mobile?styles.projectgridcontainermobile:styles.projectgridcontainer}>


     <div className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
          <div className={styles.description}>Echoes Log</div>
          <p className={styles.subdescription}> Echoes is a experiences/memory log full stack web application built using the MERN stack</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            MongoDB | Express | React | NodeJS
          </div>
          <div className={styles.marginLink} >
          <div>
          <Link href="https://github.com/siddharthvaddem/echo-mern"><a target="_blank" > Github</a></Link></div>
          <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div>
          </div>
        </div>


        <div  className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>Zune Music</div>
         <p className={styles.subdescription}>CLI based music player for playlist CRUD operations and personal music player</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            C++ | MCI API
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href="https://github.com/siddharthvaddem/MusicPlayer-PBL"><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>


      
        <div  className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>AlgoHub</div>
         <p className={styles.subdescription}>Mobile App for visualising Pathfinding and Sorting Algorithms, Algorithm notes and resources</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            Kotlin | SQLite
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href="https://github.com/trsohankumar/AlgorithmVisualizer"><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>

      
        <div className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>PWA</div>
         <p className={styles.subdescription}>A basic weather app built to understand how serviceworkers work and how to make a PWA</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            React
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href="https://github.com/siddharthvaddem/intro-to-pwa"><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>



        <div  className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>Shared Wallet Smart Contract</div>
         <p className={styles.subdescription}>A simple shared wallet for allowance and transactions</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            Solidity
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href="https://github.com/siddharthvaddem/shared-wallet-allowance-smartContract"><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>


        <div  className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>Ttile</div>
         <p className={styles.subdescription}>Description</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            Tools | Tools
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href=""><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>
        
      
        <div  className={mobile?styles.projectgriditemmobile:styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>Ttile</div>
         <p className={styles.subdescription}>Description</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            Tools | Tools
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href=""><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>



        <div className={styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.description}>Ttile</div>
         <p className={styles.subdescription}>Description</p>
          <div className={styles.altcol} style={{marginTop:'1vh'}}>
            Tools | Tools
          </div>
          <div className={styles.marginLinksingle} >
          <div >
          <Link href=""><a target="_blank" > Github</a></Link></div>
          {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
          </div>
        </div>
      
        </div>
     
    </>
  )
}

export default Allprojects
