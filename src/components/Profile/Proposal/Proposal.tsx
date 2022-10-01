import { Button } from "ui";
import styles from "./Proposal.module.scss";
import { Proposals } from "constants/Proposals";

const Proposal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Proposals</div>
      {Proposals.map((data: any, i: number) => {
        return (
          <div className={styles.proposal}>
            <div className={styles.infos}>
              <div className={styles.proposalImage}>
                <img src={data.proposalLogo}></img>
              </div>
              <div className={styles.texts}>
                <div className={styles.title}>{data.proposalTitle}</div>
                <div className={styles.members}>
                  <div className={styles.logos}>
                    {data.contributors.map((data: any, i: number) => {
                      return <img src={data.profilePhoto}></img>;
                    })}
                  </div>
                  <div className={styles.names}>
                    {data.contributors.map((data: any, i: number) => {
                      return <div>{data.name}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Button
              fontSize="fs18"
              fontWeight="fw600"
              color="red"
              width="153px"
              height="42px"
            >
              Vote
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export { Proposal };
