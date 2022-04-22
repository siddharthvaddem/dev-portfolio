import React from 'react'
import styles from '../styles/Home.module.css'
//import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
const ProjectsMobile = () => {
  return (
    <>
    
    <div className={styles.projectgridcontainermobile}>
    <div className={styles.projectgriditemmobile} style={{display:'flex',flexDirection:'column'}}>
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


    <div className={styles.projectgriditemmobile} style={{display:'flex',flexDirection:'column'}}>
    <div className={styles.description}>Huddl</div>
     <p className={styles.subdescription}>A real-time collab tool where peers can brainstorm/collab via a text-editor</p>
      <div className={styles.altcol} style={{marginTop:'1vh'}}>
      React | NodeJS | FastAPI | Deta
      </div>
      <div className={styles.marginLinksingle} >
      <div >
      <Link href="https://github.com/siddharthvaddem/huddl"><a target="_blank" > Github</a></Link></div>
      {/* <div><Link href="https://echoes-log.netlify.app/"><a target="_blank"> Live Demo</a></Link></div> */}
      </div>
    </div>
  
  
    </div>
 

    
    
    
  

</>
  )
}

export default ProjectsMobile
