import styles from "./Vote.module.scss";
import { Button, Modal } from "ui";
import { ModalController } from "hooks/useModal";
import { Proposals } from "constants/Proposals";
import { useTypedSelector } from "store";
import { useContract, useProvider } from "ethylene/hooks";
import { ADDRESSES } from "constants/Address";
import { votingAbi } from "constants/abi/votingAbi";
import { useState } from "react";
const Vote = ({ modal, index }: { modal: ModalController; index: number }) => {
  const currentVote = useTypedSelector((state) => state.proposals.currentVote);
  const { provider } = useProvider();
  const [selectedVote, setSelectedVote] = useState(0);

  const votingContract = useContract({
    address: ADDRESSES.VOTING,
    abi: votingAbi,
    provider: provider,
  });

  const voteFn = async (vote: number) => {
    if (currentVote == null) return;
    setSelectedVote(vote);
    await votingContract?.methods.useVote.executeAndWait(currentVote.id, vote,{gasLimit: 300000});
  };

  const isLoading = votingContract?.methods.useVote.isLoading;

  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.infosOfProposal}>
        <div className={styles.proposalImage}>
          <img src={Proposals[index].proposalLogo}></img>
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>{Proposals[index].proposalTitle}</div>
          <div className={styles.members}>
            <div className={styles.logos}>
              {Proposals[index].contributors.map((data: any, i: number) => {
                return <img src={data.profilePhoto}></img>;
              })}
            </div>
            <div className={styles.names}>
              {Proposals[index].contributors.map((data: any, i: number) => {
                return <div>{data.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.votes}>
        <Button
          disabled={isLoading}
          onClick={async () => await voteFn(1)}
          loading={isLoading && selectedVote === 1}
          className={styles.vote}
        >
          3 ADA
        </Button>
        <Button
          disabled={isLoading}
          onClick={async () => await voteFn(2)}
          loading={isLoading && selectedVote === 2}
          className={styles.vote}
        >
          {" "}
          5 ADA
        </Button>
        <Button
          disabled={isLoading}
          onClick={async () => await voteFn(3)}
          loading={isLoading && selectedVote === 3}
          className={styles.vote}
        >
          7 ADA
        </Button>
        <Button
          disabled={isLoading}
          onClick={async () => await voteFn(0)}
          loading={isLoading && selectedVote === 0}
          className={styles.vote}
        >
          {" "}
          Reject
        </Button>
      </div>
    </Modal>
  );
};

export { Vote };
