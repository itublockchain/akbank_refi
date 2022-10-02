import { Button } from "ui";
import styles from "./Proposal.module.scss";
import { Proposals } from "constants/Proposals";

interface ProposalInterface {
  openProposal: () => void;
  openVote: () => void;
  setWhichProposal: any;
}

const Proposal = ({
  openProposal,
  openVote,
  setWhichProposal,
}: ProposalInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.name}>Proposals</div>
        <Button
          fontSize="fs18"
          fontWeight="fw600"
          color="member"
          width="160px"
          height="42px"
          onClick={() => openProposal()}
        >
          Add Proposal
        </Button>
      </div>
      {Proposals.map((data: any, i: number) => {
        return (
          <div className={styles.proposal} key={i}>
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
              onClick={() => {
                openVote();
                setWhichProposal(i);
              }}
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
