import { Navbar } from "components";
import styles from "./Profile.module.scss";
import HeaderImage from "assets/header.jpeg";
import HatunImage from "assets/ulas.png";
import ItuBlockChainImage from "assets/ITUBCLogo.jpeg";
import { clsnm } from "utils/clsnm";
import { useState } from "react";
import { Communities, Contributions } from "components";
import HackathonImage from "assets/hackathon.jpeg";
import { Proposals } from "constants/Proposals";

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
          Ulaş Erdoğan
          {/* {teamName ? `- ${teamName}` : null} */}
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
        {tab === Page.CONTRIBUTIONS ? <Contributions /> : <Proposalss />}
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

const Proposalss = () => {
  return (
    <div className={styles.data}>
      <div className={styles.membership}>
        <div className={styles.x}> My Communities</div>
        <Communities />
      </div>
      <div className={styles.line}></div>
      <div className={styles.x}>My Proposals</div>
      <div className={styles.myProposals}>
        {Proposals.map((data: any, i: number) => {
          if (data.contributors[0].name === "Ulaş Erdoğan,") {
            // return <div className={styles.myProposal}></div>;
            return (
              <Proposal
                img={data.proposalLogo}
                link={data.link}
                text={data.proposalTitle}
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
      {/* <Proposal img={HackathonImage} text="Akbank ReFi Hackatdhon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" />
      <Proposal img={HackathonImage} text="Akbank ReFi Hackathon" /> */}
    </div>
  );
};

const Proposal = ({
  img,
  text,
  link,
}: {
  img: string;
  text: string;
  link: string;
}) => {
  return (
    <div className={styles.proposal}>
      <img className={styles.proposalImage} src={img} alt="proposal" />
      <div className={styles.proposalTexts}>
        <div className={styles.proposalText1}>{text}</div>
        <div className={styles.proposalText2}>{link}</div>
      </div>
    </div>
  );
};

// const Contributions = () => {
//   return (
//     <div className={styles.contributions}>
//       <img
//         className={styles.contributionImage}
//         src={HackathonImage}
//         alt="contribution"
//       />
//       <img
//         className={styles.contributionImage}
//         src={HackathonImage}
//         alt="contribution"
//       />
//       <img
//         className={styles.contributionImage}
//         src={HackathonImage}
//         alt="contribution"
//       />
//       <img
//         className={styles.contributionImage}
//         src={HackathonImage}
//         alt="contribution"
//       />
//       <img
//         className={styles.contributionImage}
//         src={HackathonImage}
//         alt="contribution"
//       />
//       <img
//         className={styles.contributionImage}
//         src={HackathonImage}
//         alt="contribution"
//       />
//     </div>
//   );
// };

export { Profile };
