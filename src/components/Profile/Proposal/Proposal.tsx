import { Button } from "ui";
import styles from "./Proposal.module.scss";
import { Proposals } from "constants/Proposals";
import {
  useAuth,
  useConnection,
  useContract,
  useProvider,
} from "ethylene/hooks";
import { ADDRESSES } from "constants/Address";
import { votingAbi } from "constants/abi/votingAbi";
import { useEffect } from "react";
import { useAddress } from "ethylene/hooks/useAddress";

interface ProposalInterface {
  openProposal: () => void;
  openVote: () => void;
  setWhichProposal: any;
}

const Proposal = ({ openProposal, openVote }: ProposalInterface) => {
  const { provider } = useProvider();
  const address = useAddress();
  const auth = useAuth();
  const { connect } = useConnection();
  const votingContract = useContract({
    address: ADDRESSES.VOTING,
    abi: votingAbi,
    provider: provider,
  });

  useEffect(() => {
    if (votingContract == null || auth == null || address == null) {
      return;
    }
    const fetch = async () => {};
    fetch();
  }, [auth, address]);

  useEffect(() => {
    if (votingContract == null) {
      return;
    }
    console.log(votingContract.ethersContract.filters.ProposalCreated());
  }, [votingContract]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.name}>Proposals</div>
        <Button
          style={{ whiteSpace: "nowrap" }}
          fontSize="fs18"
          fontWeight="fw600"
          color="member"
          width="160px"
          height="42px"
          onClick={() => {
            if (!auth) {
              connect();
            } else {
              openProposal();
            }
          }}
        >
          {!auth ? "Connect wallet" : "Add proposal"}
        </Button>
      </div>
      {Proposals.map((data: any, i: number) => {
        return (
          <div key={i} className={styles.proposal}>
            <div className={styles.infos}>
              <div className={styles.proposalImage}>
                <img src={data.proposalLogo} alt="logo"></img>
              </div>
              <div className={styles.texts}>
                <div className={styles.title}>{data.proposalTitle}</div>
                <div className={styles.members}>
                  <div className={styles.logos}>
                    {data.contributors.map((data: any, i: number) => {
                      return <img src={data.profilePhoto} alt="profile"></img>;
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
            {auth && (
              <Button
                fontSize="fs18"
                fontWeight="fw600"
                color="red"
                width="153px"
                height="42px"
                onClick={() => openVote()}
              >
                Vote
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { Proposal };
