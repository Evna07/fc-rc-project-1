import { nanoid } from "nanoid";
import styles from "./Aboutus.module.scss";
import { persons } from "../../data/personOptions";

const Aboutus = () => {
  return (
    <section className={styles.aboutUsContainer} id="aboutUs">
      <h1>Nasi specjaliści</h1>
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
    </section>
  );
};

export default Aboutus;
