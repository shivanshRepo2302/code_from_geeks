import {NavLink} from 'react-router-dom';
import Logo from '../assets/IMG-20250906-WA0004.jpg';
import styles from '../assets/UI/Home.module.css';

import React from 'react';

const Header = (props) => { 
    return (
        <React.Fragment>
        <header className={styles.Header}>
     
        <NavLink to="/" ><img src={Logo} alt="Logo" className={styles.logo} /></NavLink>
     
        <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." className={styles.inputBar} />
        </div>
        <div className={styles.navLinks}>
            <NavLink to="/" className={styles.navLink}>Home</NavLink>
            <NavLink to="/Login-Page" className={styles.navLink}>{props.isLoggedIn==true ? "Login":"Profile"}</NavLink>
            <NavLink to="/Sell" className={styles.navLink}>Sell  </NavLink>
            <NavLink to="/Checkout" className={styles.navLink} style={{ float: 'right' }}>
                 Cart
            </NavLink>
       </div>
       </header>
        </React.Fragment>
    );
}

export default Header;