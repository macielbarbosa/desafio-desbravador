import { useState } from "react";
import {
  Avatar,
  Box,
  Grid2 as Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Data, Repositories, RepositoriesHeader, Root } from "./style";
import { observer } from "mobx-react-lite";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import StarBorder from "@mui/icons-material/StarBorder";

import { useHome } from "@pages/home/context";
import { Labels } from "@components/Labels";
import { Label } from "@components/Label";
import { Repository as IRepository } from "@models/repository";

import { Repository } from "../Repository";

type Order = "desc" | "asc";

export const User = observer(() => {
  const { user, repositories } = useHome();
  const [order, setOrder] = useState<Order>("desc");

  const sortByStarsCount = (a: IRepository, b: IRepository) =>
    order === "desc"
      ? b.stargazers_count - a.stargazers_count
      : a.stargazers_count - b.stargazers_count;

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
            <b>{user?.following}</b> Seguindo
          </Label>
        </Labels>
        <Typography>{user?.email || "E-mail privado"}</Typography>
      </Data>
      <Repositories>
        <RepositoriesHeader>
          <Typography variant="h6">Repositórios</Typography>
          <Box>
            <Typography>Ordenar:</Typography>
            <Select
              variant="standard"
              size="small"
              value={order}
              onChange={(event) => setOrder(event.target.value as Order)}
            >
              <MenuItem value="desc">
                Mais <StarBorder />
              </MenuItem>
              <MenuItem value="asc">
                Menos <StarBorder />
              </MenuItem>
            </Select>
          </Box>
        </RepositoriesHeader>
        <Grid
          sx={{ maxWidth: "100%" }}
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {repositories
            ?.slice()
            .sort(sortByStarsCount)
            ?.map((repository, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{ minWidth: 240 }}
              >
                <Repository value={repository} />
              </Grid>
            ))}
        </Grid>
      </Repositories>
    </Root>
  );
});
