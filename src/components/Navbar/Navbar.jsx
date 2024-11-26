import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <button 
                    className={styles.menuBtn} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <img 
                        src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                        alt="menu-button"
                    />
                </button>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li>
                        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
