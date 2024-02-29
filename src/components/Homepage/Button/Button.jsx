import styles from "./Button.module.scss";
import { navOptions } from "data/navOptions";

const Button = () => {
  //ma przenosic do sekcji oferta
  const offerOption = navOptions.find((option) => option.name === "Oferta");

  if (!offerOption) {
    console.error("no option was found");
    return null;
  }

  return (
    <a href={offerOption.path} className={styles.actionButton}>
      <p>Oferta</p>
    </a>
  );
};

export default Button;
