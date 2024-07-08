import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import YouTubeIcon from '@mui/icons-material/YouTube';
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <span style={{ color: "red", display: "flex", alignItems: "center" }}>
        <YouTubeIcon style={{ fontSize: 60 }} />
        <span style={{ fontSize: 30, color: "white", fontFamily: "fantasy" }}>Youtabe</span>
      </span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
