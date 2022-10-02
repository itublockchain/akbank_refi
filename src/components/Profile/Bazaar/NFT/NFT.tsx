import styles from "./NFT.module.scss";
import AVAXBARCELONA from "assets/avalancheBarcelona.png";
import { Button } from "ui";

interface NFTInterface {
  NFTImage: any;
  title: string;
  price: number;
}

const NFT = ({ NFTImage, title, price }: NFTInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={AVAXBARCELONA}></img>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price.toString()} ADA</div>
      {/* <div className={styles.description}>Avalanche - Barcelona</div> */}
      <div className={styles.buttons}>
        <Button height="40px" width="180px" color="red">
          {" "}
          Köfteyi Al
        </Button>
      </div>
    </div>
  );
};

export { NFT };
