import React, { useState } from "react";
import { elements } from "../../../constants/contact-elements";
import styles from "./styles.module.css";

export const ContactList = () => {

  return (
    <ul className={styles.navigation__contactList}>
      {elements.map((el, idx) => {
        return (
          <ContactElement img={el.icon} link={el.link} key={idx}/>
        )
      })}
    </ul>
  );
};

const ContactElement = (props) => {
  const [element, setElement] = useState(<a href={props.link} target="_blank" rel="noreferrer">{props.img}</a>);

  const changeColor = () => {
    setElement(<a className={styles.navigation__contactList_blue} href={props.link} target="_blank" rel="noreferrer">{props.img}</a>);
  }

  const backColor = () => {
    setElement(<a href={props.link} target="_blank" rel="noreferrer">{props.img}</a>);
  }

  return (
    <li onMouseEnter={changeColor} onMouseLeave={backColor}>
      {element}
    </li>
  )
}