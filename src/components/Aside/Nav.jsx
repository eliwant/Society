import React from "react";
import style from "./css/Nav.module.css";
import NavigationLinks from "./NavigationLinks";

const Nav = () => {
  return (
    <nav class={style.nav}>
        <NavigationLinks link = "/profile" linkText = "Profile"/>
        <NavigationLinks link = "/messages" linkText = "Dialogs"/>
        <NavigationLinks link = "/news" linkText = "News"/>
        <NavigationLinks link = "/music" linkText = "Music"/>
        <NavigationLinks link = "/settings" linkText = "Settings"/>
    </nav>
  );
};

export default Nav;
