import { nanoid } from "nanoid";
import styles from "./Offer.module.scss";
import { offerItems } from "data/offerOptions";

const Offer = () => {
  return (
    <section className={styles.offerContainer} id="offer">
      <h1>Czym zajmuje się nasza firma?</h1>
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
    </section>
  );
};

export default Offer;
