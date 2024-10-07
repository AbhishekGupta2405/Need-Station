import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className={`bg-dark text-white py-3 ${styles.footer}`}>
        <div className={`container text-center`}>
          {/* Social Icons */}
          <ul className={styles.socialIcons}>
            <li>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" aria-label="XTwitter">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <SiInstagram />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <FiYoutube />
              </a>
            </li>
          </ul>

          {/* Navigation Links */}
          <ul className={styles.menu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <p>© 2024 Needstation - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
