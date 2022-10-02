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
import { Vote } from "classes/Vote";
import { useDispatch } from "react-redux";
import { setCurrentVote, setProposals } from "store/slicers/proposals";
import { useTypedSelector } from "store";
import { BigNumber } from "ethers";

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
  const dispatch = useDispatch();
  const proposals = useTypedSelector((state) => state.proposals.proposals);
  const refetchKey = useTypedSelector((state) => state.proposals.refetchKey);

  useEffect(() => {
    if (!provider) return;
    const url = `https://api-testnet.snowtrace.io/api?module=logs&action=getLogs&address=${ADDRESSES.VOTING}&fromBlock=7651692&apikey=Q8GY22BMJ6H622JNVNH4N1U8RYC37X7TEF`;

    fetch(url).then((json) => {
      return json.json().then((res) => {
        if (Array.isArray(res.result)) {
          let id = 0;
          const promiseArr = res.result.map(
            async (item: any, index: number) => {
              const proposal =
                await votingContract?.methods.idToProposal.execute(index);

              if (BigNumber.from(proposal[0]).eq(BigNumber.from(0))) {
                return null;
              }
              const content = proposal[3];
              const name = proposal[4];
              const voted = await votingContract?.methods.voted.execute(
                address,
                id
              );
              const vote = new Vote(id, name, content, voted);
              id++;
              return vote;
            }
          );
          Promise.all(promiseArr).then((res) => {
            dispatch(
              setProposals(res.filter((item) => item != null).reverse())
            );
          });
        }
      });
    });
  }, [provider, refetchKey]);

  useEffect(() => {
    if (votingContract == null || address == null) {
      return;
    }
  }, [votingContract, address]);

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
      {proposals?.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          No active proposals
        </div>
      )}
      {proposals.map((data, i: number) => {
        return (
          <div key={i} className={styles.proposal}>
            <div className={styles.infos}>
              <div className={styles.proposalImage}>
                <img
                  src={Proposals[i]?.proposalLogo ?? Proposals[0].proposalLogo}
                  alt="logo"
                ></img>
              </div>
              <div className={styles.texts}>
                <div className={styles.title}>{Proposals[i].proposalTitle}</div>
                <div className={styles.members}>
                  <div className={styles.logos}>
                    {Proposals[i].contributors.map((data: any, i: number) => {
                      return <img src={data.profilePhoto} alt="profile"></img>;
                    })}
                  </div>
                  <div className={styles.names}>
                    {Proposals[i].contributors.map((data: any, i: number) => {
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
                onClick={() => {
                  openVote();
                  dispatch(setCurrentVote(data));
                }}
              >
                {data.isVoted ? "Voted" : "Vote"}
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { Proposal };
