import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { navOptions } from "../../data/navOptions";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

  return (
    <nav className={clsx(".container", styles.navContainer)}>
      <div className={styles.navbar}>
        <p className={styles.navname}>Nazwa Firmy</p>

        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navlinks}>
            {navOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll && (
                  <a
                    className={styles.navOption}
                    onClick={closeMenuOnMobile}
                    href={option.path}
                  >
                    {option.name}
                  </a>
                )}
                {!option.isScroll && (
                  <a
                    className={clsx(styles.navOption, styles.disabledLink)}
                    href="\"
                  >
                    {option.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navButton} onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
