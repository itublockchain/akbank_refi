import styles from "./Vote.module.scss";
import { Modal } from "ui";
import { ModalController } from "hooks/useModal";
import { Proposals } from "constants/Proposals";
const Vote = ({ modal, index }: { modal: ModalController; index: number }) => {
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
        <div className={styles.vote}> 3 ADA</div>
        <div className={styles.vote}> 5 ADA</div>
        <div className={styles.vote}> 7 ADA</div>
        <div className={styles.vote}> Reject</div>
      </div>
    </Modal>
  );
};

export { Vote };
