import HACKATHON from "assets/hackathon.png";
import { membersDetail } from "constants/Members";
import BN from "assets/blockchainNights.png";
import TSHIRT from "assets/tshirt.png";

import ITUBCVSAVAX from "assets/ITUBCvsAvax.png";

export const Proposals = [
  {
    proposalLogo: HACKATHON,
    proposalTitle: "Akbank ReFi Hackathon",
    contributors: [membersDetail.hatun, membersDetail.tahir],
    link: "https://twitter.com/ITUblockchain/status/1575875730893832193",
  },
  {
    proposalLogo: BN,
    proposalTitle: "Twitter Spaces  @squanch",
    contributors: [membersDetail.ulas, membersDetail.alim],
    link: "https://twitter.com/CanaryDefiTR/status/1530989603427168261",
  },
  {
    proposalLogo: TSHIRT,
    proposalTitle: "Swatshirt Tasarim & Uretim",
    contributors: [membersDetail.ulas, membersDetail.alim],
    link: "https://twitter.com/ITUblockchain/status/1512064803845533698",
  },
  {
    proposalLogo: ITUBCVSAVAX,
    proposalTitle: "Sponsorluk Anlasmasi",
    contributors: [membersDetail.ulas, membersDetail.alim],
    link: "https://twitter.com/ITUblockchain/status/1508110984451440650",
  },
];
