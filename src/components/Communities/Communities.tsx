import styles from "./Communities.module.scss";
import ITUBC from "assets/ITUBCLogo.jpeg";
import AVAX from "assets/avalanche.png";
import AVAXBAR from "assets/avalancheBarcelona.png";

const Communities = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.community}>
        <img src={ITUBC}></img>
        <div className={styles.title}>ITU Blockchain</div>
        <div className={styles.proposalCount}>47 Proposal</div>
        <div className={styles.token}> 159 ADA</div>

        <div className={styles.cv}>
          <img src={AVAXBAR}></img>
          <img src={ITUBC}></img>
        </div>
      </div>
      <div className={styles.community}>
        <img src={AVAX}></img>
        <div className={styles.title}>Avalanche Hub</div>
        <div className={styles.proposalCount}>3 Proposal</div>
        <div className={styles.token}> 11 ADAVAX</div>
      </div>
    </div>
  );
};

export { Communities };
