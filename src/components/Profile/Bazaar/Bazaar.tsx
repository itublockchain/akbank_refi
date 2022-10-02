import styles from "./Bazaar.module.scss";
import { NFT } from "./NFT/NFT";
import { NFTs } from "constants/NFTs";

const Bazaar = () => {
  return (
    <div className={styles.wrapper}>
      {NFTs.map((data: any, i: number) => {
        return (
          <NFT NFTImage={data.NFTImage} title={data.title} price={data.price} />
        );
      })}
    </div>
  );
};

export { Bazaar };
