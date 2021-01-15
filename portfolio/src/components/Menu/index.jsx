import React from "react";
import styles from "./styles.module.css";
import { NavigationList } from "./NavigationList";
import { ContactList } from "./ContactList";
import { BuregerButton } from "./BurgerButton";
import { MainButton } from "./MainButton";

export const Menu = () => {

  return (
    <nav className ={styles.navigation}>
      <MainButton />
      <NavigationList/>
      <ContactList />
      <BuregerButton />
    </nav>
  );
};