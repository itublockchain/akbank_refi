import styles from "./Sponsorship.module.scss";
import { NFT } from "components/Profile/Sponsorship/NFT/NFT";
import { Sponsorships } from "constants/Sponsorships";
import { NFTs } from "constants/NFTs";

const Sponsorship = () => {
  return (
    <div className={styles.wrapper}>
      {Sponsorships.map((data: any, i: number) => {
        return (
          <NFT
            key={i}
            NFTImage={data.image}
            title={data.title}
            price={data.price}
          />
        );
      })}
    </div>
  );
};

export { Sponsorship };
