import {NavLink} from 'react-router-dom';
import search from '../assets/search.gif';
import styles from '../assets/UI/Home.module.css';
import logo from '../assets/logo.PNG';
import React from 'react';

const Header = (props) => { 
    return (
        <React.Fragment>
        <header className={styles.Header}>
        <div>
            <NavLink to="/"><img src={logo} alt="Logo" className={styles.logo} /></NavLink>
        </div>
        <div className={styles.searchBar}>
            <img src={search}  className={styles.searchIcon} />
            <input type="text" placeholder="Search..." className={styles.inputBar} />
        </div>
        <div className={styles.navLinks}>
            <NavLink to="/" className={styles.navLink}>Home</NavLink>
            <div className={styles.Catagories}>Set Country <button className={styles.Button}>↓</button> </div>
            <NavLink to="/contact" className={styles.navLink}>Contact Us </NavLink>
       </div>
       </header>
        </React.Fragment>
    );
}

export default Header;