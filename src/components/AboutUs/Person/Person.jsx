import { persons } from "data/personOptions";
import { nanoid } from "nanoid";
import styles from "./Person.module.scss";

const Person = () => {
  return (
    <>
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
      ;
    </>
  );
};

export default Person;
