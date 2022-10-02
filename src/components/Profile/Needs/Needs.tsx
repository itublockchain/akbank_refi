import { Button } from "ui";
import styles from "./Needs.module.scss";
import { Projects } from "constants/Projects";

interface NeedsInterface {
  openProject: () => void;
}
const Needs = ({ openProject }: NeedsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.name}>Projects</div>
        <Button
          fontSize="fs18"
          fontWeight="fw600"
          color="member"
          width="160px"
          height="42px"
          onClick={() => openProject()}
        >
          Add Project
        </Button>
      </div>
      {Projects.map((data: any, i: number) => {
        return (
          <div className={styles.proposal}>
            <div className={styles.infos}>
              <div className={styles.proposalImage}>
                <img src={data.image} alt="proposal"></img>
              </div>
              <div className={styles.texts}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.members}>
                  {data.description.substring(0, 70) + "..."}
                </div>
              </div>
            </div>
            <div className={styles.ticket}>#{data.ticket}</div>
          </div>
        );
      })}
    </div>
  );
};

export { Needs };
