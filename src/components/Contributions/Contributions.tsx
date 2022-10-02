import styles from "./Contributions.module.scss";
import ITUBC from "assets/ITUBCLogo.jpeg";
import AVAX from "assets/avalanche.png";
import AVAXBAR from "assets/avalancheBarcelona.png";

const Contributions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.community}>
        <img src={AVAXBAR}></img>
        <div className={styles.title}>Avalanche - Barcelona</div>
        <div className={styles.title2}>ITU Blockchain</div>
        <div className={styles.proposalCount}>3 AVAX</div>
      </div>
    </div>
  );
};

export { Contributions };
