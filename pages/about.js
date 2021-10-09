import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
const about = () => {
  return (
   <>
   <div className={styles.container}>
      <h1 className={styles.title}>
        {' '}
        about me<span className={styles.altcol}>.</span>
      </h1>
      <div style={{display:'flex',flexDirection:'row'}}>
      <div className={styles.abouttext} style={{marginBottom:'2vh',width:'70%'}}>
        {' '}
        Hey! I’m <span className={styles.altcol}>Siddharth Vaddem</span> . I’m a CSE undergrad currently studying at BMSIT, B’lore. 
        I'm a creative Full Stack Developer and tech enthusiast. Previously, I've held a Part-time position as a Software Developer Engineer at Mystry.<br/><br/>  I'm <span className={styles.altcol}> passionate </span> about bringing 
        ideas into reality. I like building projects that make a difference . I also like building dumb-stupid projects that make no difference.
        <br /><br />
        Outside of coding, I enjoy playing badminton ,binging on movies/TV series and gaming .
        Feel free to reach me out <span className={styles.altcol}> here</span>.
      </div>
      <div style={{width:'30%'}}>
      <img style={{height:'30vh',width:'30vw'}} src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt="" />
      </div>
      </div>
      
    </div>
   </>
  );
};

export default about;
