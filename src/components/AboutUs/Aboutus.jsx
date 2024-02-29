import { nanoid } from "nanoid";
import styles from "./AboutUs.module.scss";
import { persons } from "../../data/personOptions";
import clsx from "clsx";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsContainer} id="aboutUs">
      <div className={clsx("container", styles.aboutUsWrapper)}>
        <h1 className={styles.aboutUsTitle}>Nasi specjaliści</h1>
        <ul className={styles.aboutUsList}>
          {persons.map((person) => (
            <li key={nanoid()} className={styles.listItem}>
              <div className={styles.person}>
                <img
                  className={styles.personImg}
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <div className={styles.personDetail}>
                <p className={styles.personName}>{person.name}</p>
                <p className={styles.personDescription}>{person.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
