import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const logoStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    margin: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={logoStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Baat Chat</span>
      </Link>
    </nav>
  );
};

export default Navigation;
