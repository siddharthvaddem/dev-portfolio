import React from 'react'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState,useEffect } from "react";
import Buttons from './Buttons';
import ButtonsMobile from './ButtonsMobile';
import useWindowDimensions from './useWindowDimensions.ts';
const ContactForm = () => {

//   const [mailerState, setMailerState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   function handleStateChange(e) {
//     setMailerState((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }
//   const submitEmail = async (e) => {
//     e.preventDefault();
//     console.log({ mailerState });
//    //alert("Message sent")
//     const response=await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({mailerState})
//     })  .then((res) => res.json())
//     .then(async (res) => {
//       const resData = await res;
//       console.log(resData);
//       if (resData.status === "success") {
//         alert("Message Sent");
//       } else if (resData.status === "fail") {
//         alert("Message failed to send");
//       }
//     })
//     .then(() => {
//       setMailerState({
//         email: "",
//         name: "",
//         message: "",
//       });
//     });
// };
      
   
  
  const { width} = useWindowDimensions();
  
  

 var mobile;
 if(width<=430)
 mobile=true;
 else mobile=false;
 //console.log(mobile)

  return (

    <>
     <div className={styles.container}>
      <h1 className={mobile?styles.titlemobile:styles.title}>
        {' '}
        let's talk<span className={styles.altcol}>.</span>
      </h1>
      <div className={mobile?styles.subtitlemobile:styles.subtitle} style={{marginBottom:'2vh'}}>
        {' '}
        Have a <span className={styles.altcol}>question</span>? Just want to say Hi? Reach out!
      </div>
      
      
    </div>
    <div className={styles.container}>
    {!mobile ?<Buttons/>:<ButtonsMobile/>}
    {/* <div className={styles.description} style={{marginBottom:'2vh',textAlign:mobile&&'center'}}>
        {' '}
       Or you can do <span className={styles.altcol}>this</span> 
      </div>
    </div>
    
    <form
       onSubmit={submitEmail}
     >
       <div className={styles.container} style={{display:'flex',flexDirection:'row'}}>
      <div style={{width:'100%'}} >
      <h4>Name</h4>
         <input
           placeholder="Thomas Shelby"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
           className={styles.input}
         />
         <h4>Email</h4>
         <input
           placeholder="peakyblinders@gmail.com"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
           className={styles.input}
         />
         <h4>Message</h4>
        
        <textarea
          style={{ minHeight: "100px" }}
          placeholder="Message"
          onChange={handleStateChange}
          name="message"
          value={mailerState.message}
          className={styles.inputMessage}
        />
         </div>
        
         </div>
         <div className={styles.container}>
    <button className={styles.buttonStyle} >Submit</button>
    </div>
     </form> */}
     </div>
    </>
  )
}

export default ContactForm

