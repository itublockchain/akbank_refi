import styles from "./Profile.module.scss";
import HEADER from "assets/header.png";
import LOGO from "assets/ITUBCLogo.jpeg";
import ALIM from "assets/alim.png";
import ULAS from "assets/ulas.png";
import TAHIR from "assets/tahos81.png";
import HATUN from "assets/hatun.png";
import CALENDER from "assets/calender.png";
import { Button } from "ui";

const Members = [
  {
    profilePhoto: ALIM,
    name: "Alim Şahin",
    role: "ITU Blockchain Board Member",
  },
  {
    profilePhoto: HATUN,
    name: "Hatun Özcan",
    role: "ITU Blockchain Board Member",
  },
  {
    profilePhoto: ULAS,
    name: "Ulaş Erdoğan",
    role: "ITU Blockchain Board Member",
  },
  {
    profilePhoto: TAHIR,
    name: "Tahir Özpala",
    role: "ITU Blockchain Board Member",
  },
];

const Profile = () => {
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
        <div className={styles.box1}></div>
        <div className={styles.box2}></div>
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
