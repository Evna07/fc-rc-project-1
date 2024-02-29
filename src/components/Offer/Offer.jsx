import styles from "./Offer.module.scss";
import clsx from "clsx";
import OfferItem from "./OfferItem/OfferItem";

const Offer = () => {
  return (
    <section id="offer" className={styles.offerContainer}>
      <div className={clsx("container", styles.offerWrapper)}>
        <h1 className={styles.offerTitle}>Czym zajmuje się nasza firma?</h1>
        <ul className={styles.offerList}>
          <OfferItem />
        </ul>
      </div>
    </section>
  );
};

export default Offer;
