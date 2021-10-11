import React from 'react'
import styles from '../styles/Home.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
    
        <div className={styles.projectgridcontainer}>
        <div className={styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
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


        <div className={styles.projectgriditem} style={{display:'flex',flexDirection:'column'}}>
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
      
      
        </div>
     

        
        
        
      
    
    </>
  )
}

export default Projects

