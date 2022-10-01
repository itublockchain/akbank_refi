import styles from "./Bazaar.module.scss";
import { NFT } from "./NFT/NFT";

const Bazaar = () => {
  return (
    <div className={styles.wrapper}>
      <NFT />
    </div>
  );
};

export { Bazaar };
