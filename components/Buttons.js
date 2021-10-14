import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Buttons = () => {
  return (
    <>
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
    </>
  )
}

export default Buttons
