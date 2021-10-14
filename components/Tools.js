import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Tools = () => {
  return (
    <>
    <div className={styles.container}>
    <div style={{marginTop:'15vh'}}>{/*spacing */}</div>
    <div className={styles.subtitle}>
        {' '}
        <i class="bi bi-lightning-fill" style={{color:'yellow'}}></i><span className={styles.altcol}> &nbsp;Tech</span> I'm familiar with or have worked with in the past
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.griditem}>
          <div className={styles.images}>
            <Image src="/html.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>HTML5. CSS. Javascript</div>
          <p className={styles.subdescription}>Fundamental Web Development</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/react.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>ReactJS</div>
          <p className={styles.subdescription}>Frontend Web Development</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/figma.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>Figma | Adobe Illustrator</div>
          <p className={styles.subdescription}>UI Design and Mockups</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/git.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>Git/Github</div>
          <p className={styles.subdescription}>Version control and Collaboration</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/node.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>NodeJS.MongoDB.Express</div>
          <p className={styles.subdescription}>Backend Web Development</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/graphql.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>GraphQL and REST</div>
          <p className={styles.subdescription}>Backend</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/firebase.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>Firebase</div>
          <p className={styles.subdescription}>Authentication and Backend</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/c++.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>C++ | C | Java</div>
          <p className={styles.subdescription}>Uni Coursework</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/nextjs.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>NextJS | Gatsby</div>
          <p className={styles.subdescription}>Framework</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/python.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>Python Development</div>
          <p className={styles.subdescription}>Backend ,API ,Bots</p>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.images}>
          <Image src="/solidity.png" width={50} height={50} layout="intrinsic"></Image>
          </div>
          <div className={styles.description}>
          <div>Solidity | TruffleJS | Ganche</div>
          <p className={styles.subdescription}>Blockchain Development</p>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Tools
