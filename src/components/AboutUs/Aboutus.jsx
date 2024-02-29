import styles from "./AboutUs.module.scss";
import clsx from "clsx";
import Person from "./Person/Person";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsContainer} id="aboutUs">
      <div className={clsx("container", styles.aboutUsWrapper)}>
        <h1 className={styles.aboutUsTitle}>Nasi specjaliści</h1>
        <ul className={styles.aboutUsList}>
          <Person />
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
