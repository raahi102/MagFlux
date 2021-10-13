import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import logo1024 from '../../assets/images/logo1024.jpeg';
import styles from './header.module.scss';

const Header = () => {
  //states
  const [isNavVisible, setNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  //effects
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  //functions
  const handleMediaQueryChange = (mediaQuery) => {
    setIsSmallScreen(!!mediaQuery.matches);
  };
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  //return jsx
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo1024} alt="MagFlux"  width="200" height="200"/>
      </Link>
      {(!isSmallScreen || isNavVisible) && (
        <nav className={styles.nav}>
          <NavLink
            onClick={() => setNavVisible(false)}
            to="/MagFlux"
            activeClassName={styles.activeLink}>
            
           < div className={styles.title}>Home</div>
          </NavLink>
          {/* <NavLink onClick={() => setNavVisible(false)} to="#">
            Study Material
          </NavLink>
          <NavLink
            onClick={() => setNavVisible(false)}
            to="/approach"
            activeClassName={styles.activeLink}>
            Our Approach
          </NavLink> */}
          <NavLink
            onClick={() => setNavVisible(false)}
            to="/aboutus"
            activeClassName={styles.activeLink}>
            
            < div className={styles.title}>About Us</div>
          </NavLink>
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdsJrkiMDVruxwNQKGUJ8bTWCUvc_fH-A1B-7rw-RObsmvw5w/viewform"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank">
            Teach with us
          </a> */}
        </nav>
      )}
      <div className={styles.decoratedBtn}>
        <div className={`${styles.dashedBorder} ${styles.pink}`}>
          <Link onClick={() => setNavVisible(false)} to="/bookdemo">
            Book For Services
          </Link>
        </div>
        <div className={`${styles.dashedBorder} ${styles.blue}`}>
          <Link onClick={() => setNavVisible(false)} to="#">
            Pay Now
          </Link>
        </div>
      </div>
      <section className={styles.burger} onClick={toggleNav}>
        {!isNavVisible && (
          <IconContext.Provider
            value={{
              style: {
                height: '40px',
                width: '60px',
                cursor: 'pointer',
                color: '#2f2c2c',
              },
            }}>
            <FaBars />
          </IconContext.Provider>
        )}
        {isNavVisible && (
          <IconContext.Provider
            value={{
              style: {
                height: '40px',
                width: '60px',
                cursor: 'pointer',
                color: '#2f2c2c',
              },
            }}>
            <FaTimes />
          </IconContext.Provider>
        )}
      </section>
    </div>
  );
};

export default Header;
