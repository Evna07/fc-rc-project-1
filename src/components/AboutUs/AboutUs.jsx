import styles from "./AboutUs.module.scss";
import clsx from "clsx";
import Person from "./Person/Person";
import { persons } from "data/personOptions";
import { nanoid } from "nanoid";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsContainer} id="aboutUs">
      <div className={clsx("container", styles.aboutUsWrapper)}>
        <h1 className={styles.aboutUsTitle}>Nasi specjaliści</h1>
        <ul className={styles.aboutUsList}>
          {persons.map((person) => (
            <Person key={nanoid()} person={person} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
