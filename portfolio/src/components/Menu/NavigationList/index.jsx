import React from 'react';
import { elements } from '../../../constants/navigation-elements.jsx';
import styles from './styles.module.css';
import { Link, useLocation } from "react-router-dom";

export const NavigationList = () => {

  let location = useLocation();

  const elems = elements.map((el, idx) => {
    const Icon = el.icon;

    const mouseEnterHandler = (event) => {
      event.currentTarget.setAttribute('mouseover', '1');
    }
  
    const mouseLeaveHandler = (event) => {
      event.currentTarget.setAttribute('mouseover', '0');
    }

    if(el.path === location.pathname) {
      return (
        <Link className={styles.link} to={el.path} key={idx}>
          <li mouseover="0" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={styles.navigation__navigationListItem} type={el.type}>
            <Icon className={styles[`blueIcon${idx}`]}/>
            <p>{el.type}</p>
          </li>
        </Link>
      )
    } else {
      return (
        <Link className={styles.link} to={el.path} key={idx}>
          <li mouseover="0" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={styles.navigation__navigationListItem} type={el.type}>
            <Icon />
            <p>{el.type}</p>
          </li>
        </Link>
      )
    }
  })

  return (
    <ul className={styles.navigation__list}>
      {elems}
    </ul>
  );
};