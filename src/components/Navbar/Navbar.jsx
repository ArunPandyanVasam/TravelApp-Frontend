import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SoloTravel</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/navigation">Navigation</Link></li>
        <li><Link to="/planner">Planner</Link></li>
        <li><Link to="/safety">Safety</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
