import React, { useRef } from "react";
import styles from "./styles.module.css";

export const Contact = () => {

  return (
    <div className={styles.home}>
        <Greeting />
      <div className={styles.home__animation}>
        <Map />
      </div>
    </div>
  );
};

const Greeting = () => {

  const windowWidth = window.innerWidth;

  const secondText = `Contact me`;

  const style = () => {
    return windowWidth > 670 ? 'animate__animated' : 'noAnimate';
  }

  return (
    <div className={styles.home__text}>
      <div className={`${styles.home__text_html_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`<html>`}</div>
      <div className={`${styles.home__text_body_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`<body>`}</div>
      <div className={`${styles.home__text_h1_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`<h1>`}</div>
      <h1 className={styles.home__text_animated}>
        <div className={`${style()} animate__backInLeft`}>
          {secondText.split('').map((el, idx) => {
            return el === ' ' ? <span key={idx} className={styles.space}></span> : <span className={`${styles.blueColor} ${styles.letter}`} key={idx}>{el}</span>
          })}
        </div>
      </h1>
      <div className={`${styles.home__text_h1_close_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`</h1>`}</div>
      <p className={`${styles.info} ${style()} animate__bounceIn`}>I am interested in freelance opportunities – especially ambitious or large projects. I'm also looking for a job. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
      <Form />
      <div className={`${styles.home__text_body_close_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`</body>`}</div>
      <div className={`${styles.home__text_html_close_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`</html>`}</div>
    </div>
  )
}

const Form = () => {

  const windowWidth = window.innerWidth;

  const style = () => {
    return windowWidth > 670 ? 'animate__animated' : 'noAnimate';
  }

  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);
  const form = useRef(null);

  const formHandler = () => {
    if(name.current.value.length < 1) {
      name.current.classList.add(styles.invalidInput);
    } else if(email.current.value.length < 1) {
      email.current.classList.add(styles.invalidInput);
    } else {
      form.current.submit();
    }
  } 

  const changeHandler = (event) => {
    event.target.classList.remove(styles.invalidInput);
  }

  return (
    <div className={styles.form}>
      <form ref={form} action="send.php" method="POST" id="contact" className={styles.contactForm}>
        <div className={`${styles.firstLine} ${styles.line}`}>
          <input name='name' ref={name} onChange={changeHandler} placeholder='Name' className={`${styles.input} ${styles.input_name} ${style()} animate__backInLeft`} type="text"/>
          <input name='email' ref={email} onChange={changeHandler} placeholder='E-mail' className={`${styles.input} ${styles.input_email} ${style()} animate__backInRight`} type="email"/>
        </div>
        <div className={`${styles.secondLine} ${styles.line}`}>
          <input ref={subject} onChange={changeHandler} placeholder='Subject' className={`${styles.input} ${styles.input_subject} ${style()} animate__backInDown`} type="text"/>
        </div>
        <div className={`${styles.thirdLine} ${styles.line}`}>
          <textarea ref={message} onChange={changeHandler} placeholder='Message' className={`${styles.input} ${styles.input_message} ${style()} animate__backInUp`} type="text"/>
        </div>
        <button type="button" onClick={formHandler} className={`${styles.formButton} ${style()} animate__jello`}>Send</button>
      </form>
    </div>
  )
}

const Map = () => {

  return (
    <div>
      <iframe src="https://snazzymaps.com/embed/284170" width="100%" style={{border: 'none', height: 'calc(100vh - 4px)'}} title="map"></iframe>
    </div>
  )
}

