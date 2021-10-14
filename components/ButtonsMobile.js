import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const ButtonsMobile = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.buttonsmobile}>
      <button className={styles.buttonStylemobile}>
      <Link href="https://github.com/siddharthvaddem" >
        <a className={styles.buttonStyle} style={{verticalAlign:'middle',textAlign:'center',margin:'auto'}} target="_blank"> <GitHubIcon  className={styles.altcol}/> </a>
      </Link>
      
       </button>
      <button className={styles.buttonStylemobile}>
      <Link href="https://www.linkedin.com/in/siddharthvaddem/">
      <a className={styles.buttonStyle}  style={{verticalAlign:'middle',textAlign:'center',margin:'auto'}} target="_blank"> <LinkedInIcon className={styles.altcol}/>
      </a></Link>
      
      </button>
      <button className={styles.buttonStylemobile}>
      <Link href="mailto:siddharthvaddem5@gmail.com">
      <a className={styles.buttonStyle} style={{verticalAlign:'middle',textAlign:'center',margin:'auto'}} target="_blank"><EmailIcon className={styles.altcol}/></a></Link> </button>
    </div>
    </div>
    </>
  )
}

export default ButtonsMobile
