import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Tools from '../components/Tools'
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm.js';



export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>
        {' '}
        <span className={styles.altcol}>s</span>vaddem<span className={styles.altcol}>.</span>
      </h1>
      <div className={styles.subtitle}>
        {' '}
        Full Stack Developer who likes to build stuff with <span className={styles.altcol}>React</span>
      </div>
      <div className={styles.text}> &#128640; &nbsp;Exploring opportunities , side projects and new tech</div>
      <div className={styles.text}> &#127891; &nbsp; Currently a CSE Student at BMSIT</div>
    </div>
    <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={styles.buttonStyle}>Github <i class="bi bi-github" ></i> </button>
      <button className={styles.buttonStyle}>LinkedIn <i class="bi bi-linkedin"></i></button>
      <button className={styles.buttonStyle}>Email <i class="bi bi-envelope-fill"></i></button>
    </div>
    </div>
    <div className={styles.container}>
    <div className={styles.linktext}>  Find my resume <span className={styles.altcol}>here.</span></div>
    <div className={styles.linktext}>  More about me <span className={styles.altcol}>here.</span></div>
    </div>
    <Tools/>
    <Projects/>
    <ContactForm/>
    </>
  );
}
