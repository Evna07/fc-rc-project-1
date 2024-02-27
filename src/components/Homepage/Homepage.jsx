import Button from "./Button/Button";
import styles from "./Homepage.module.scss";
import clsx from "clsx";

const Homepage = () => {
  return (
    <section className={clsx(".container", styles.homeContainer)}>
      <div className={styles.backgroundContainer}>
        <div className={styles.homeIntro}>
          <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
          <p>Nie wierz nam na słowo - sprawdź</p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
