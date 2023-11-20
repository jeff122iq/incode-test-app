import { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { generateUUIDv4 } from "../../helpers";

interface IFooterData {
  id: string;
  icon: ReactNode;
  url: string;
}

export const footerLinksData: IFooterData[] = [
  {
    id: generateUUIDv4(),
    icon: <GitHubIcon />,
    url: "https://github.com/MaksLitus/demo-app",
  },
  {
    id: generateUUIDv4(),
    icon: <TwitterIcon />,
    url: "https://github.com/MaksLitus/demo-app",
  },
  {
    id: generateUUIDv4(),
    icon: <FavoriteIcon />,
    url: "https://github.com/MaksLitus/demo-app",
  },
];
