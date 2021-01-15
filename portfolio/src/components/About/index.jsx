import React from "react";
import styles from "./styles.module.css";
import timeLineImg from "../../images/timeline.png";
import { useHistory } from "react-router-dom";

export const About = () => {

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

  const firstText = `About me`;

  const style = () => {
    return windowWidth > 670 ? 'animate__animated' : 'noAnimate';
  }

  return (
    <div className={styles.home__text}>
      <div className={`${styles.home__text_html_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`<html>`}</div>
      <div className={`${styles.home__text_body_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`<body>`}</div>
      <div className={`${styles.home__text_h1_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`<h1>`}</div>
      <h1 className={styles.home__text_animated}>
        <div className={`${style()} animate__backInDown`}>
          {firstText.split('').map((el, idx) => {
            return el === ' ' ? <span key={idx} className={styles.space}></span> : <span className={`${styles.letter} ${styles.blueColor}`} key={idx}>{el}</span>
          })}
        </div>
      </h1>
      <div className={`${styles.home__text_h1_close_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`</h1>`}</div>
      <PersonalInfo animation={style}/>
      <div className={`${styles.home__text_body_close_tag} ${styles.tag} ${style()} animate__lightSpeedInRight`}>{`</body>`}</div>
      <div className={`${styles.home__text_html_close_tag} ${styles.tag} ${style()} animate__lightSpeedInLeft`}>{`</html>`}</div>
    </div>
  )
}

const PersonalInfo = (props) => {
  return (
    <div>
      <div className={`${styles.personal} ${props.animation()} animate__lightSpeedInRight`}>
        <p className={styles.personal__text}>I'm sociable, like to work in a team, self-motivated, hardworking.</p>
        <p className={styles.personal__text}>I’m easily trained.</p>
        <p className={styles.personal__text}>Now I want to spend all my time and use my strengths for development of my professional skills. 
        I have some experience in commercial development and I am ready to work and study a lot.</p>
      </div>
      <div className={`${styles.timeLine} ${props.animation()} animate__lightSpeedInLeft`}>
        <span className={styles.timeLine__text}>TIMELINE</span>
        <div className={styles.timeLine__description}>
          <div className={styles.timeLine__description_first}>
            <span>Studied at Belarussian State University. Faculty of Mechanics and Mathematics (Science-Design Activity)</span>
          </div>
          <div className={styles.timeLine__description_second}>
            <span>Studied in magistracy</span>
          </div>
          <div className={styles.timeLine__description_third}>
            <span>The Rolling Scopes School. RS 2020 Q1 (JavaScript) - <a rel="noreferrer" target="_blank" href="https://app.rs.school/certificate/5l1xw17i">Certificate</a></span>
          </div>
          <div className={styles.timeLine__description_fourth}>
            <span>Freelance</span>
          </div>
        </div>
        <img src={timeLineImg} alt="Time Line"/>
      </div>
    </div>
  )
}

const Animation = () => {

  let history = useHistory();

  const clickHandler = () => {
    history.push("/skills");
  }

  return (
    <div className={`${styles.loadingWindow}`} onClick={clickHandler}>
      <div className={`${styles.car} animate__animated animate__zoomInLeft`}>
          <div className={styles.strike}></div>
          <div className={`${styles.strike} ${styles.strike2}`}></div>
          <div className={`${styles.strike} ${styles.strike3}`}></div>
          <div className={`${styles.strike} ${styles.strike4}`}></div>
          <div className={`${styles.strike} ${styles.strike5}`}></div>
          <div className={`${styles.carDetail} ${styles.spoiler}`}></div>
          <div className={`${styles.carDetail} ${styles.back}`}></div>
          <div className={`${styles.carDetail} ${styles.center}`}></div>
          <div className={`${styles.carDetail} ${styles.center1}`}></div>
          <div className={`${styles.carDetail} ${styles.front}`}></div>
          <div className={`${styles.carDetail} ${styles.wheel}`}></div>
          <div className={`${styles.carDetail} ${styles.wheel} ${styles.wheel2}`}></div>
      </div>

      <div className={styles.text}>
          <span>To Skills</span>
      </div>
    </div>
  )
}