import { nanoid } from "nanoid";
import styles from "./Aboutus.module.scss";

const Aboutus = ({ persons }) => {
  return (
    <section className={styles.aboutUsContainer}>
      <h1>Nasi specjaliści</h1>
      <ul className={styles.aboutUsList}>
        {persons.map((person) => (
          <li key={nanoid()}>
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
