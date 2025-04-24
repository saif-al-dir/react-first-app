// import Container from "../Container/Container";
import React from "react";
import styles from './NavBar.module.scss';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <li>
                <span className={`${styles.icon} fa fa-tasks`} />
            </li>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorite">Favorite</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;