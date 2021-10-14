import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';


const FooterMobile = () => {
  return (
    <>
    <nav style={{marginTop:'5vh'}}>
    
      <div className={styles.containerAlt} style={{display:'flex',flexDirection:'column'}}>
      <div style={{marginBottom:'-2vh'}}>
          <h4 style={{textAlign:'center'}}>&copy; &nbsp;Siddharth Vaddem 2021</h4>
        </div>
        
        <div className={styles.navitemsmobile}>
          
          
          <div>
          <Link href="/terms">
            <a className={styles.linkTextmobile}>
            Terms
            </a>
          </Link>
           
          </div>
          <div className={styles.slash}>/</div>
          <div>
          <Link href="/license">
            <a className={styles.linkTextmobile}>
            License
            </a>
          </Link>
           
          </div>
          <div className={styles.slash}>/</div>
          <div>
          <Link href="https://github.com/siddharthvaddem/dev-portfolio">
            <a className={styles.linkTextmobile} >
            Source
            </a>
          </Link>
           
          </div>
          <div className={styles.slash}>/</div>
          <div>
          <Link href="/blog">
            <a className={styles.linkTextmobile}>
            Blog
            </a>
          </Link>
           
          </div>
        </div>
        
      </div>
      
    </nav>
    </>
  )
}

export default FooterMobile
