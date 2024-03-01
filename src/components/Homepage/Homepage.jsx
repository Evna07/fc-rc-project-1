import Button from "./Button/Button";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.backgroundContainer}>
        <div className="container">
          <div className={styles.homeIntro}>
            <h1 className={styles.homepageTitle}>
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p>Nie wierz nam na słowo - sprawdź</p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
