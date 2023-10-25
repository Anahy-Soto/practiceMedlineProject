import React from 'react';
import styles from '../Sidebar.module.css';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <i className="bx bx-menu menu-icon"></i>  
                <span className={styles.logoName}>Medline</span>
            </div>
            <div className={styles.sidebarContent}>
                <ul className={styles.lists}>
                    <li className={styles.list}>
                        <a href="/index.html" className={styles.navLink}>
                            <i className="bx bx-home-alt icon"></i> 
                            <span className={styles.link}>Dashboard</span>
                        </a>
                    </li>
                    <li className={styles.list}>
                        <a href="/Archives.html" className={styles.navLink}>
                            <i className="bx bx-box icon"></i>  
                            <span className={styles.link}>Archives</span>
                        </a>
                    </li>
                    // ... [other similar items]
                </ul>
                <div className={styles.bottomContent}>
                    <li className={styles.list}>
                        <a href="#" className={`${styles.navLink} ${styles.settings}`}>
                            <i className="bx bx-cog icon"></i>  
                            <span className={styles.link}>Settings</span>
                        </a>
                    </li>
                    <li className={styles.list}>
                        <a href="#" className={`${styles.navLink} ${styles.logout}`}>
                            <i className="bx bx-log-out icon"></i>  
                            <span className={styles.link}>Logout</span>
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;