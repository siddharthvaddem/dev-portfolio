import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const ButtonsMobile = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.buttonsmobile}>
      <button className={styles.buttonStylemobile}>
      <Link href="https://github.com/siddharthvaddem" >
        <a className={styles.buttonStyle} target="_blank"> <i className="bi bi-github"></i></a>
      </Link>
      
       </button>
      <button className={styles.buttonStylemobile}>
      <Link href="https://www.linkedin.com/in/siddharthvaddem/">
      <a className={styles.buttonStyle} target="_blank"> <i className="bi bi-linkedin"></i>
      </a></Link>
      
      </button>
      <button className={styles.buttonStylemobile}>
      <Link href="mailto:siddharthvaddem5@gmail.com">
      <a className={styles.buttonStyle} target="_blank"><i className="bi bi-envelope-fill"></i></a></Link> </button>
    </div>
    </div>
    </>
  )
}

export default ButtonsMobile
