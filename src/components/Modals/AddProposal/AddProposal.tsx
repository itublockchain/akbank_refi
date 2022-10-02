import styles from "./AddProposal.module.scss";
import { Modal, Button } from "ui";
import { ModalController } from "hooks/useModal";
import { useState } from "react";
import {
  MdDesignServices,
  MdEventAvailable,
  MdVideoCameraFront,
  MdArticle,
} from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { useContract, useProvider } from "ethylene/hooks";
import { ADDRESSES } from "constants/Address";
import { votingAbi } from "constants/abi/votingAbi";

enum SUBJECT {
  "Write Article",
  "Video Content",
  "Prepare an Event",
  "Design",
  "Social Media",
}

const AddProposal = ({ modal }: { modal: ModalController }) => {
  const [subject, setSubject] = useState<SUBJECT>(SUBJECT.Design);
  const { provider } = useProvider();

  const votingContract = useContract({
    address: ADDRESSES.VOTING,
    abi: votingAbi,
    provider: provider,
  });

  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Create Proposal</div>

      <div className={styles.subjects}>
        <div
          className={
            subject === SUBJECT.Design ? styles.thisSubject : styles.subject
          }
          onClick={() => setSubject(SUBJECT.Design)}
        >
          <MdDesignServices size={24} />
          Design
        </div>
        <div
          className={
            subject === SUBJECT["Prepare an Event"]
              ? styles.thisSubject
              : styles.subject
          }
          onClick={() => setSubject(SUBJECT["Prepare an Event"])}
        >
          <MdEventAvailable size={24} />
          Event
        </div>
        <div
          className={
            subject === SUBJECT["Video Content"]
              ? styles.thisSubject
              : styles.subject
          }
          onClick={() => setSubject(SUBJECT["Video Content"])}
        >
          <MdVideoCameraFront size={24} />
          Video
        </div>
        <div
          className={
            subject === SUBJECT["Write Article"]
              ? styles.thisSubject
              : styles.subject
          }
          onClick={() => setSubject(SUBJECT["Write Article"])}
        >
          <MdArticle size={24} />
          Article
        </div>
        <div
          className={
            subject === SUBJECT["Social Media"]
              ? styles.thisSubject
              : styles.subject
          }
          onClick={() => setSubject(SUBJECT["Social Media"])}
        >
          <TiSocialTwitter size={24} />
          Social Media
        </div>
      </div>
      <div className={styles.inputs}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Give a name to your project"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <input placeholder="Links" />
      </div>

      <div className={styles.buttons}>
        <Button
          loading={votingContract?.methods.startVote.isLoading}
          onClick={async () => {
            try {
              await votingContract?.methods.startVote.executeAndWait(
                content,
                name
              );
              modal.close();
            } catch {}
          }}
          disabled={name.trim() === "" || content.trim() === ""}
          height="40px"
          // onClick={connect}
          color={"member"}
          className={styles.addButton}
        >
          Add Proposal
        </Button>
      </div>
    </Modal>
  );
};

export { AddProposal };
