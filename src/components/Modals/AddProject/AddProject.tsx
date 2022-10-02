import styles from "./AddProject.module.scss";
import { Modal, Button } from "ui";
import { ModalController } from "hooks/useModal";
import ULAS from "assets/ulas.png";
import { useState } from "react";
import {
  MdDesignServices,
  MdEventAvailable,
  MdVideoCameraFront,
  MdArticle,
} from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";

enum SUBJECT {
  "Write Article",
  "Video Content",
  "Prepare an Event",
  "Design",
  "Social Media",
}

const AddProject = ({ modal }: { modal: ModalController }) => {
  const [subject, setSubject] = useState<SUBJECT>(SUBJECT.Design);
  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div className={styles.title}>Create Project</div>
      <div className={styles.greeting}>
        Hey <img src={ULAS}></img>
        Ulas! What's up? What's you been up to?
      </div>
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
        <input placeholder="Give a name to your project" />
        <input placeholder="Description" />
        <input placeholder="Links" />
      </div>

      <div className={styles.buttons}>
        <Button
          height="40px"
          // onClick={connect}
          color={"member"}
          className={styles.addButton}
        >
          Add Project
        </Button>
      </div>
    </Modal>
  );
};

export { AddProject };
