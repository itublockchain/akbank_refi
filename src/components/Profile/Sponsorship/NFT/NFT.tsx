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
        <img src={NFTImage}></img>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price.toString()} AVAX</div>

      <div> 13.3 AVAX Left</div>
      {/* <div className={styles.description}>Avalanche - Barcelona</div> */}
      <div className={styles.buttons}>
        <input placeholder="0.0" />
        <Button height="40px" width="180px" color="red">
          {" "}
          Destek Ol
        </Button>
      </div>
    </div>
  );
};

export { NFT };
