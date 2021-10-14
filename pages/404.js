import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '5vw' }}>
      <div style={{ textAlign: 'center', width: '50%' }}>
        <h1>Ooops...</h1>
        <h2>That page cannot be found &#129396; </h2>

        <Link href="/">
          <a className={styles.altcol} style={{ fontWeight: '700' }}>
            Homepage
          </a>
        </Link>
      </div>
      <div style={{ textAlign: 'center', width: '50%' }}>
        <Image
          src="https://avatars.dicebear.com/api/male/siddharthvaddem.svg?mood[]=happy&mood[]=sad"
          height="300"
          width="250"
          alt=".."
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default NotFound;
