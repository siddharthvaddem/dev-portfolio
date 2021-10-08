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
      <div className={styles.abouttext} style={{marginBottom:'2vh',width:'70%'}}>
        {' '}
        Hey! I’m <span className={styles.altcol}>Siddharth Vaddem</span> . I’m a CSE undergrad currently studying at BMSIT, B’lore. 
        I'm a creative Full Stack Developer and tech enthusiast. I'm <span className={styles.altcol}> passionate </span> about bringing 
        ideas into reality. I like building projects that make a difference . I also like building dumb-stupid projects that make no difference.
        <br /><br />
        Outside of coding, I enjoy playing badminton ,binging on movies/TV series and gaming( fyi I’m a <span className={styles.altcol}> noob</span>). 
        Feel free to reach me out <span className={styles.altcol}> here</span>.
      </div>
    
      
    </div>
   </>
  );
};

export default about;
