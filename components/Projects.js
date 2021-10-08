import React from 'react'
import styles from '../styles/Home.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
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
      <Link href="/projects"><a style={{color:'#11f9cf'}}> Explore more<i class="bi bi-arrow-right"></i></a></Link>
      
        </div>
      
    </div>
    </>
  )
}

export default Projects
