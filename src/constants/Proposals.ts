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
  },
  {
    proposalLogo: BN,
    proposalTitle: "Twitter Spaces  @squanch",
    contributors: [membersDetail.ulas, membersDetail.alim],
  },
  {
    proposalLogo: TSHIRT,
    proposalTitle: "Swatshirt Tasarim & Uretim",
    contributors: [membersDetail.ulas, membersDetail.alim],
  },
  {
    proposalLogo: ITUBCVSAVAX,
    proposalTitle: "Sponsorluk Anlasmasi",
    contributors: [membersDetail.ulas, membersDetail.alim],
  },
];
