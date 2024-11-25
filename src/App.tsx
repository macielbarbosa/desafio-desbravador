import { Outlet } from "react-router";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Header, Root } from "./style";
import { Typography } from "@mui/material";

function App() {
  return (
    <Root>
      <Header>
        <GitHubIcon fontSize="large" />
        <Typography variant="h3">Github Client</Typography>
      </Header>
      <Outlet />
    </Root>
  );
}

export default App;
