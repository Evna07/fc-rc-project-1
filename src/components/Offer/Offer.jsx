import { nanoid } from "nanoid";
import styles from "./Offer.module.scss";
import { offerItems } from "data/offerOptions";
import clsx from "clsx";

const Offer = () => {
  return (
    <section id="offer" className={styles.offerContainer}>
      <div className={clsx("container", styles.offerWrapper)}>
        <h1 className={styles.offerTitle}>Czym zajmuje się nasza firma?</h1>
        <ul className={styles.offerList}>
          {offerItems.map((item) => (
            <li key={nanoid()}>
              <div className={styles.offerItem}>
                {item.isNew && <div className={styles.newItemTag}></div>}
                <h2 className={styles.itemTitle}>{item.name}</h2>
                {item.isNew && <p>(nowość)</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
