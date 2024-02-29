import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer} id="disabled">
      <div className={clsx("container", styles.footerWrapper)}>
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>

        <div className={styles.footerIcons}>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
