import React from 'react'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from "react";

const ContactForm = () => {

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <>
     <div className={styles.container}>
      <h1 className={styles.title}>
        {' '}
        let's talk<span className={styles.altcol}>.</span>
      </h1>
      <div className={styles.subtitle} style={{marginBottom:'2vh'}}>
        {' '}
        Have a <span className={styles.altcol}>question</span> ? Just want to say Hi? Reach out!.
      </div>
      
      
    </div>
    <div className={styles.container}>
    <div className={styles.buttons}>
      <button className={styles.buttonStyle}>
      <Link href="https://github.com/siddharthvaddem">
        <a className={styles.buttonStyle} target="_blank">Github <i class="bi bi-github"></i></a>
      </Link>
      
       </button>
      <button className={styles.buttonStyle}>
      <Link href="https://www.linkedin.com/in/siddharthvaddem/">
      <a className={styles.buttonStyle} target="_blank">LinkedIn <i class="bi bi-linkedin"></i>
      </a></Link>
      
      </button>
      <button className={styles.buttonStyle}>
      <Link href="mailto:siddharthvaddem5@gmail.com">
      <a className={styles.buttonStyle} target="_blank">Email <i class="bi bi-envelope-fill"></i></a></Link> </button>
    </div>
    <div className={styles.description} style={{marginBottom:'2vh'}}>
        {' '}
       Or you can do <span className={styles.altcol}>this</span> 
      </div>
    </div>
    
    <form
       onSubmit={submitEmail}
     >
       <div className={styles.container} style={{display:'flex',flexDirection:'row'}}>
      <div >
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
         </div>
         <div style={{marginLeft:'5vw'}}>
      <h4>Message</h4>
        
         <textarea
           style={{ minHeight: "200px" }}
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
           className={styles.inputMessage}
         />
         
         </div>
         </div>
         <div className={styles.container}>
    <button className={styles.buttonStyle} style={{color:'#11f9cf'}}>Submit</button>
    </div>
     </form>
    </>
  )
}

export default ContactForm

