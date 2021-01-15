import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {

  return (
    <div className={styles.home}>
      <Greeting />
      <div className={styles.home__animation}>
        <Animation />
      </div>
    </div>
  );
};

const Greeting = () => {

  const windowWidth = window.innerWidth;

  const firstText = `Hi,`;
  const secondText = `I'm Yauheni,`;
  const thirdText = 'web developer.';

  let history = useHistory();

  const clickHandler = () => {
    history.push("/contact");
  }

  const style = () => {
    return windowWidth > 0 ? 'animate__animated' : 'noAnimate';
  }

  return (
    <div className={styles.home__text}>
      <div className={`${styles.home__text_html_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`<html>`}</div>
      <div className={`${styles.home__text_body_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`<body>`}</div>
      <div className={`${styles.home__text_h1_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`<h1>`}</div>
      <h1 className={styles.home__text_animated}>
        <div className={`${style()} animate__backInDown`}>
          {firstText.split('').map((el, idx) => {
            return el === ' ' ? <span key={idx} className={styles.space}></span> : <span className={styles.letter} key={idx}>{el}</span>
          })}
        </div>
        <div className={`${style()} animate__backInLeft`}>
          {secondText.split('').map((el, idx) => {
            return el === ' ' ? <span key={idx} className={styles.space}></span> : <span className={`${styles.blueColor} ${styles.letter}`} key={idx}>{el}</span>
          })}
        </div>
        <div className={`${style()} animate__backInUp`}>
          {thirdText.split('').map((el, idx) => {
            return el === ' ' ? <span key={idx} className={styles.space}></span> : <span className={styles.letter} key={idx}>{el}</span>
          })}
        </div>
      </h1>
      <div className={`${styles.home__text_h1_close_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`</h1>`}</div>
      <div className={`${styles.home__text_about} ${style()} animate__lightSpeedInRight`}>Front End Developer</div>
      <button onClick={clickHandler} className={`${styles.home__text_button} ${style()} animate__lightSpeedInLeft`}>Contact me!</button>
      <div className={`${styles.home__text_body_close_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`</body>`}</div>
      <div className={`${styles.home__text_html_close_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`</html>`}</div>
    </div>
  )
}

const Animation = () => {

  return (
    <div className={`${styles.animationBlock} animate__animated animate__rotateInDownLeft`}>
      <div>
        <div className={styles.loaderContainer}>
          <div className={styles.loader1}></div>
        </div>
        <div className={styles.loaderContainer}>
          <div className={styles.loader2}></div>
        </div>
      </div>
      <div>
      <div className={styles.loaderContainer}>
        <div className={styles.loader3}>
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
          <div className={styles.item4}></div>
          <div className={styles.item5}></div>
        </div>
        </div>
        <div className={styles.loaderContainer}>
          <div className={styles.loader4}></div>
        </div>
      </div>
    </div>
  )
}

