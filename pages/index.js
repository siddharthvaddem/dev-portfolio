import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Tools from '../components/Tools'
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm.js';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'




export default function Home() {
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
     
      <div className={styles.text}> &#128640; &nbsp;Exploring opportunities , side projects and new tech</div>
      <div className={styles.text}> &#127891; &nbsp; Currently a CSE Student at BMSIT</div>
    </div>
    <div style={{display:'flex',alignItems:'center',textAlign:'center'}}>
    <img style={{height:'30vh',width:'30vw',marginLeft:'5vw',marginTop:'10vh'}} src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad" alt="" />
       </div></div>
    
    <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={styles.buttonStyle}>
      <Link href="https://github.com/siddharthvaddem" >
        <a className={styles.buttonStyle} target="_blank">Github <i class="bi bi-github"></i></a>
      </Link>
      
       </button>
      <button className={styles.buttonStyle}>
      <Link href="https://www.linkedin.com/in/siddharthvaddem/">
      <a className={styles.buttonStyle} target="_blank">LinkedIn <i class="bi bi-linkedin"></i>
      </a></Link>
      
      </button>
      <button className={styles.buttonStyle}>
      <Link href="mailto:siddharthvaddem5@gmail.com">
      <a className={styles.buttonStyle} target="_blank">Email <i class="bi bi-envelope-fill"></i></a></Link> </button>
    </div>
    </div>
    <div className={styles.container}>
    <div className={styles.linktext}>  Find my resume <span className={styles.altcol}>here.</span></div>
    <div className={styles.linktext}>  More about me <span >
    <Link href="/about">
      <a className={styles.altcol}> here.</a>
    </Link>
   
    </span></div>
    </div>
    <Tools/>
    <div style={{marginTop:'15vh'}}></div>

    <div className={styles.container}>
      <h1 className={styles.title}>
        {' '}
        projects<span className={styles.altcol}>.</span>
      </h1>
      <div className={styles.subtitle} style={{marginBottom:'2vh'}}>
        {' '}
        Here's some of my projects that I have worked on.
      </div>
      <div className={styles.description} >
      <Link href="/projects"><a className={styles.altcol}> Explore more<i class="bi bi-arrow-right"></i></a></Link>
      
        </div>
        </div>
        
    <Projects/>
    <div style={{marginTop:'10vh'}}></div>

    
    <ContactForm/>
    </>
  );
}
