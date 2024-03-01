import styles from "./Offer.module.scss";
import clsx from "clsx";
import OfferItem from "./OfferItem/OfferItem";
import { nanoid } from "nanoid";
import { offerItems } from "data/offerOptions";

const Offer = () => {
  return (
    <section id="offer" className={styles.offerContainer}>
      <div className={clsx("container", styles.offerWrapper)}>
        <h1 className={styles.offerTitle}>Czym zajmuje się nasza firma?</h1>
        <ul className={styles.offerList}>
          {offerItems.map((item) => (
            <OfferItem key={nanoid()} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
