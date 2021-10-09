import React from 'react'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const ContactForm = () => {
  return (
    <>
     <div className={styles.container}>
      <h1 className={styles.title}>
        {' '}
        let's talk<span className={styles.altcol}>.</span>
      </h1>
      <div className={styles.subtitle} style={{marginBottom:'2vh'}}>
        {' '}
        Have a <span className={styles.altcol}>question</span> ? Just want to say Hi? Reach out!.
      </div>
      
      
    </div>
    <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={styles.buttonStyle}>
      <Link href="https://github.com/siddharthvaddem">
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
    <div className={styles.description} style={{marginBottom:'2vh'}}>
        {' '}
       Or you can do <span className={styles.altcol}>this</span> 
      </div>
    </div>
    <form >
    <div className={styles.container} style={{display:'flex',flexDirection:'row'}}>
      <div >
        <h4>Name</h4>
        <input type="text" placeholder="Thomas Shelby" className={styles.input} />
        <h4>Email</h4>
        <input type="email" placeholder="peakyblinders@gmail.com" className={styles.input}/>
        
      </div>
      <div style={{marginLeft:'5vw'}}>
      <h4>Message</h4>
      {/* <input type="text" placeholder="Your message or feedback" className={styles.inputMessage}/> */}
      <textarea name="textarea" placeholder="Your message or feedback" className={styles.inputMessage}></textarea>
      </div>
    </div>
    <div className={styles.container}>
    <button className={styles.buttonStyle} style={{color:'#11f9cf'}}>Submit</button>
    </div>
    </form>
    </>
  )
}

export default ContactForm
