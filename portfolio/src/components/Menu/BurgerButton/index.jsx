import React, { useRef } from "react";
import styles from "./styles.module.css";

export const BuregerButton = () => {

  const burgerButton = useRef();

  window.addEventListener('hashchange', () => {
    if(burgerButton.current !== undefined && window.innerWidth < 530) {
      burgerButton.current.click();
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })

  const clickHandler = (event) => {
    event.currentTarget.classList.toggle(styles.navigation__burgerButton_active);
    event.currentTarget.parentNode.childNodes[1].classList.toggle(styles.navigation__navigationList_active);
  } 
  
  return (
   <button ref={burgerButton} onClick={clickHandler} className={styles.navigation__burgerButton}>
     <span></span>
   </button>
  );
};