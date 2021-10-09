import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <nav style={{marginTop:'20vh'}}>
      <div className={styles.containerwhite}>
        <div>
          <h4 style={{marginLeft:'5vw'}}>&copy; &nbsp;Siddharth Vaddem 2021</h4>
        </div>
        <div className={styles.navitems}>
          <div>
         Useful Links
          </div>
          
          <div>
          <Link href="/terms">
            <a className={styles.linkText}>
            Terms
            </a>
          </Link>
           
          </div>
          <div className={styles.slash}>/</div>
          <div>
          <Link href="/license">
            <a className={styles.linkText}>
            License
            </a>
          </Link>
           
          </div>
          <div className={styles.slash}>/</div>
          <div>
          <Link href="https://github.com/siddharthvaddem/dev-portfolio">
            <a className={styles.linkText} >
            Source
            </a>
          </Link>
           
          </div>
          <div className={styles.slash}>/</div>
          <div>
          <Link href="/blog">
            <a className={styles.linkText}>
            Blog
            </a>
          </Link>
           
          </div>
        </div>
      </div>
    </nav>
    </>
  )
};

export default Footer;
