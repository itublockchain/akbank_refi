import { Button } from "ui";
import styles from "./Needs.module.scss";

interface NeedsDetails {
  needsImage: any;
  title: string;
  description: string;
}

const Needs = ({ needsImage, title, description }: NeedsDetails) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.proposalImage}>
        <img src={needsImage}></img>
      </div>
      <div className={styles.infos}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <Button color="member" width="153px" height="51px">
        Vote
      </Button>
    </div>
  );
};

export { Needs };
