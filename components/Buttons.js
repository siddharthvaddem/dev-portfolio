import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Icon from '@mui/material/Icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Buttons = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={styles.buttonStyle}>
      <Link href="https://github.com/siddharthvaddem" >
        <a  style={{verticalAlign:'middle'}} target="_blank">Github <GitHubIcon style={{verticalAlign:'middle'}} className={styles.altcol}/></a>
      </Link>
      
       </button>
      <button className={styles.buttonStyle}>
      <Link href="https://www.linkedin.com/in/siddharthvaddem/">
      <a  style={{verticalAlign:'middle'}} target="_blank">LinkedIn <LinkedInIcon style={{verticalAlign:'middle'}} className={styles.altcol}/>
      </a></Link>
      
      </button>
      <button className={styles.buttonStyle}>
      <Link href="mailto:siddharthvaddem5@gmail.com">
      <a  style={{verticalAlign:'middle'}} target="_blank">Email <EmailIcon style={{verticalAlign:'middle'}} className={styles.altcol}/></a></Link> </button>
    </div>
    </div>
    </>
  )
}

export default Buttons
