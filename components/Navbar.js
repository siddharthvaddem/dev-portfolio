import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div>
          <h1 className={styles.logo}>
            <Link href="/">
              <a>
                {' '}
                s<span className={styles.altcol}>/</span>v
              </a>
            </Link>
          </h1>
        </div>
        <div className={styles.navitems}>
          <div>
            <i style={{ fontSize: '24px' }} class="bi bi-brightness-high-fill  " />
          </div>
          <div style={{ marginLeft: '5vw' }} /> {/*spacing */}
          {/* <div>
            <i style={{ fontSize: '24px' }} class="bi bi-list" />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
