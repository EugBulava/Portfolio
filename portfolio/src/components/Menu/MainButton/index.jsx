import React from "react";
import styles from "./styles.module.css";
import logo from "../../../images/logo.png";
import { useHistory } from "react-router-dom";

export const MainButton = () => {

  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  }

  return (
    <button onClick={clickHandler} className={styles.navigation__mainButton}>
      <img src={logo} alt="logo"/>
      <span>Yauheni Bulava</span>
    </button>
  )
}