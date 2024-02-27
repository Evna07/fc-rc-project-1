import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer} id="disabled">
      <div className={clsx("container", styles.footerWrapper)}>
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>

        <div className={styles.footerIcons}>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
