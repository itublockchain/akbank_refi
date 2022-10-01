import styles from "./Profile.module.scss";
import HEADER from "assets/header.png";
import LOGO from "assets/ITUBCLogo.jpeg";
import CALENDER from "assets/calender.png";
import { Button } from "ui";
import { Members } from "constants/Members";
import { Proposal } from "components/Profile/Proposal/Proposal";
import { Needs } from "components/Profile/Needs/Needs";
import { Bazaar } from "components/Profile/Bazaar/Bazaar";
import { Sponsorship } from "components/Profile/Sponsorship/Sponsorship";
import { useState } from "react";
import { Proposals } from "constants/Proposals";

enum WhichPage {
  "PROJECTS",
  "PROPOSALS",
  "BAZAAR",
  "SPONSORSHIP",
}

const Profile = () => {
  const [whichPage, setWhichPage] = useState<WhichPage>(WhichPage.PROPOSALS);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={HEADER}></img>
      </div>
      <div className={styles.profilePhoto}>
        <img src={LOGO}></img>
      </div>

      <div className={styles.communityInfos}>
        <div className={styles.members}>
          <div className={styles.communityName}>ITU Blockchain</div>
          <div className={styles.memberCount}>2000+ member</div>

          <div className={styles.member}>
            {Members.map((data: any, i: number) => {
              return (
                <Member
                  logo={data.profilePhoto}
                  name={data.name}
                  role={data.role}
                />
              );
            })}
          </div>
          <Button width="93px" height="31px" color="member">
            See All
          </Button>

          <div className={styles.calender}>
            <img src={CALENDER}></img>
          </div>
        </div>

        <div className={styles.proposals}>
          <div className={styles.whichPage}>
            <div
              onClick={() => setWhichPage(WhichPage.PROPOSALS)}
              className={
                whichPage === WhichPage.PROPOSALS
                  ? styles.pageButton
                  : styles.notPageButton
              }
            >
              Proposals
            </div>
            <div
              onClick={() => setWhichPage(WhichPage.PROJECTS)}
              className={
                whichPage === WhichPage.PROJECTS
                  ? styles.pageButton
                  : styles.notPageButton
              }
            >
              Projects
            </div>
            <div
              onClick={() => setWhichPage(WhichPage.BAZAAR)}
              className={
                whichPage === WhichPage.BAZAAR
                  ? styles.pageButton
                  : styles.notPageButton
              }
            >
              Bazaar
            </div>
            <div
              onClick={() => setWhichPage(WhichPage.SPONSORSHIP)}
              className={
                whichPage === WhichPage.SPONSORSHIP
                  ? styles.pageButton
                  : styles.notPageButton
              }
            >
              Sponsorship
            </div>
          </div>
          <div className={styles.brief}>
            The first university #blockchain society in Turkey! Subscribe our
            weekly blockchain mail newsletter 📨 @GenesisBchain and JOIN US to
            #buidl
          </div>
          <div className={styles.boxs}>
            {WhichPage.PROPOSALS === whichPage ? (
              <Proposal />
            ) : WhichPage.PROJECTS === whichPage ? (
              <Needs />
            ) : WhichPage.BAZAAR === whichPage ? (
              <Bazaar />
            ) : (
              <Sponsorship />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MemberInterface {
  logo: any;
  name: string;
  role: string;
}
const Member = ({ logo, name, role }: MemberInterface) => {
  return (
    <div className={styles.memberWrapper}>
      <div className={styles.photo}>
        <img src={logo}></img>
      </div>
      <div className={styles.infos}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
};

export { Profile };
