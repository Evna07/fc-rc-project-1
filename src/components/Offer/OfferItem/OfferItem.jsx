import styles from "./OfferItem.module.scss";
import { nanoid } from "nanoid";

const OfferItem = ({ item }) => {
  return (
    <li key={nanoid()}>
      <div className={styles.offerItem}>
        {item.isNew && <div className={styles.newItemTag}></div>}
        <h2 className={styles.itemTitle}>{item.name}</h2>
        {item.isNew && <p>(nowość)</p>}
      </div>
    </li>
  );
};

export default OfferItem;
