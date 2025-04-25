// import Container from "../Container/Container";
import React from "react";
import styles from './NavBar.module.scss';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <li>
                <span className={`${styles.icon} fa fa-tasks`} />
            </li>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite"
                    >
                        Favorite
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;