import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ToolsMobile = () => {
  return (
   <>
   <div style={{marginLeft:'5vw',marginRight:'5vw'}}>
    <div style={{marginTop:'15vh'}}>{/*spacing */}</div>
    <div className={styles.subtitlemobile}>
        {' '}
       <FlashOnIcon style={{color:'yellow'}}/><span className={styles.altcol}> &nbsp;Tech</span> I'm familiar with or have worked with in the past
      </div>
      
        <div style={{display:'flex',flexDirection:'row',textAlign:'center'}}>
          <div >
            <Image src="/html.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          
        
          <div >
          <Image src="/react.png" width={75} height={75}  alt=".." layout="intrinsic"></Image>
          </div>
          
       
        
          <div >
          <Image src="/figma.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
         
        
          <div >
          <Image src="/git.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          
         
        
          <div >
          <Image src="/node.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          </div>
          <div style={{display:'flex',flexDirection:'row',textAlign:'center'}}>
          
          
        
          <div >
          <Image src="/firebase.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          
        
          <div >
          <Image src="/c++.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          
          
        

         
          <div >
          <Image src="/nextjs.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          
        
        
          <div >
          <Image src="/python.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          <div >
          <Image src="/solidity.png" width={75} height={75} alt=".." layout="intrinsic"></Image>
          </div>
          </div>
          
        
          
         
      
    </div>
   </>
  )
}

export default ToolsMobile
