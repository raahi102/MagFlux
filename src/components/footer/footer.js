import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaYoutube,
} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>MagFlux</div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink to="/programs" activeClassName={styles.activeLink}>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="#">Study Material</NavLink>
          </li>
          <li>
            <NavLink to="#">Our Approach</NavLink>
          </li> */}
          <li>
            <NavLink to="/aboutus" activeClassName={styles.activeLink}>
              About Us
            </NavLink>
          </li>
          {/* <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdsJrkiMDVruxwNQKGUJ8bTWCUvc_fH-A1B-7rw-RObsmvw5w/viewform"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank">
              Teach with us
            </a>
          </li> */}
        </ul>
      </div>
      <div className={styles.license}>
        <IconContext.Provider
          value={{
            style: { height: '12px' },
          }}>
          <FaRegCopyright />
        </IconContext.Provider>
        <span> {new Date().getFullYear()} MagFlux Electric Solutions, All rights reserved</span>
      </div>
      <div className={styles.social}>
        <ul>
          <li>
            <Link to="#">
              <IconContext.Provider
                value={{
                  style: { height: '30px', width: '34px', cursor: 'pointer' },
                }}>
                <FaYoutube />
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="#">
              <IconContext.Provider
                value={{
                  style: { height: '30px', width: '34px', cursor: 'pointer' },
                }}>
                <FaLinkedinIn />
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="#">
              <IconContext.Provider
                value={{
                  style: { height: '30px', width: '34px', cursor: 'pointer' },
                }}>
                <FaFacebookF />
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="#">
              <IconContext.Provider
                value={{
                  style: { height: '30px', width: '34px', cursor: 'pointer' },
                }}>
                <FaInstagram />
              </IconContext.Provider>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
