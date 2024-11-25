import { Avatar, Grid2 as Grid, Typography } from "@mui/material";
import { Data, Root } from "./style";
import { observer } from "mobx-react-lite";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import { useHome } from "@pages/home/context";
import { Labels } from "@components/Labels";
import { Label } from "@components/Label";

import { Repository } from "../Repository";

export const User = observer(() => {
  const { user, repositories } = useHome();

  return (
    <Root>
      <Data>
        <Avatar src={user?.avatar_url} sx={{ width: 296, height: 296 }} />
        <Typography variant="h5">{user?.name} </Typography>
        {user?.bio && <Typography>{user?.bio} </Typography>}
        <Labels>
          <Label>
            <PeopleOutlineOutlinedIcon /> <b>{user?.followers}</b> Seguidores
          </Label>
          ·
          <Label>
            <b>{user?.followers}</b> Seguindo
          </Label>
        </Labels>
        <Typography>{user?.email || "E-mail privado"}</Typography>
      </Data>
      <Grid
        sx={{ maxWidth: 800 }}
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {repositories?.map((repository, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
            sx={{ minWidth: 256 }}
          >
            <Repository value={repository} />
          </Grid>
        ))}
      </Grid>
    </Root>
  );
});
