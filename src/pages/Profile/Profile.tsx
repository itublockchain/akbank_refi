import { Navbar } from "components";
import styles from "./Profile.module.scss";
import HeaderImage from "assets/header.jpeg";
import HatunImage from "assets/ulas.png";
import ItuBlockChainImage from "assets/ITUBCLogo.jpeg";
import { clsnm } from "utils/clsnm";
import { useState } from "react";
import HackathonImage from "assets/hackathon.jpeg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
};

type BannerProps = {
  imgUrl?: string;
  teamName?: string;
};

enum Page {
  "PROPOSALS",
  "CONTRIBUTIONS",
}

const Banner = ({ imgUrl, teamName = "ITU Blockchain" }: BannerProps) => {
  const [tab, setTab] = useState<Page>(Page.PROPOSALS);

  return (
    <>
      <div className={styles.banner}>
        <img className={styles.header} src={imgUrl ?? HeaderImage} alt="" />
        <div className={styles.imageWrapper}>
          <ProfileImage
            profileImage={HatunImage}
            teamImage={ItuBlockChainImage}
            showTeam={false}
          />
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>
          Ulas {teamName ? `- ${teamName}` : null}
        </h1>
        <p className={styles.joinDate}>2 December, 2022</p>
      </div>
      <div className={styles.tabs}>
        <div
          onClick={() => setTab(Page.PROPOSALS)}
          className={clsnm(styles.tab, tab === Page.PROPOSALS && styles.active)}
        >
          Proposals
        </div>
        <div
          onClick={() => setTab(Page.CONTRIBUTIONS)}
          className={clsnm(
            styles.tab,
            tab === Page.CONTRIBUTIONS && styles.active
          )}
        >
          Contributions
        </div>
      </div>
      <div className={styles.main}>
        {tab === Page.CONTRIBUTIONS ? <Contributions /> : <Proposals />}
      </div>
    </>
  );
};

const ProfileImage = ({
  profileImage,
  showTeam,
  teamImage,
}: {
  profileImage: string;
  teamImage: string;
  showTeam: boolean;
}) => {
  return (
    <div className={clsnm(styles.image, showTeam && styles.shift)}>
      <img src={profileImage} alt="profile" />
      {showTeam && <img src={teamImage} alt="team" />}
    </div>
  );
};

const Proposals = () => {
  return (
    <div className={styles.data}>
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
    </div>
  );
};

const Proposal = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className={styles.proposal}>
      <img className={styles.proposalImage} src={img} alt="proposal" />
      <span className={styles.proposalText}>{text}</span>
    </div>
  );
};

const Contributions = () => {
  return (
    <div className={styles.contributions}>
      <img
        className={styles.contributionImage}
        src={HackathonImage}
        alt="contribution"
      />
      <img
        className={styles.contributionImage}
        src={HackathonImage}
        alt="contribution"
      />
      <img
        className={styles.contributionImage}
        src={HackathonImage}
        alt="contribution"
      />
      <img
        className={styles.contributionImage}
        src={HackathonImage}
        alt="contribution"
      />
      <img
        className={styles.contributionImage}
        src={HackathonImage}
        alt="contribution"
      />
      <img
        className={styles.contributionImage}
        src={HackathonImage}
        alt="contribution"
      />
    </div>
  );
};

export { Profile };
