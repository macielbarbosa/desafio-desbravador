import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Avatar, Button, Typography } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Code from "@mui/icons-material/Code";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

import { axiosInstance } from "@utils/axiosInstance";
import { Repository as IRepository } from "@models/repository";
import { Labels } from "@components/Labels";
import { Label } from "@components/Label";

import { Header, Root, Title } from "./style";

export const Repository = () => {
  const { username, name } = useParams();
  const navigate = useNavigate();
  const [repository, setRepository] = useState<IRepository>();

  const getRepository = async () => {
    try {
      const { data } = await axiosInstance(`repos/${username}/${name}`);
      setRepository(data);
    } catch (error) {
      navigate("notfound");
    }
  };

  useEffect(() => {
    getRepository();
  }, []);

  return (
    <Root>
      <Header>
        <Title>
          <Avatar
            src={repository?.owner.avatar_url}
            sx={{ width: 48, height: 48 }}
          />
          <Typography variant="h5">{username}</Typography> /{" "}
          <Typography variant="h5">{name}</Typography>
        </Title>
        <Labels>
          <Label>
            <StarBorder /> {repository?.stargazers_count}
          </Label>
          {repository?.language && (
            <Label>
              <Code /> {repository?.language}
            </Label>
          )}
        </Labels>
      </Header>
      <Typography>{repository?.description}</Typography>
      <Button
        variant="contained"
        startIcon={<OpenInNew />}
        onClick={() => window.open(repository?.html_url)}
      >
        Abrir no Github
      </Button>
      <Button
        startIcon={<KeyboardBackspaceOutlinedIcon />}
        onClick={() => navigate("/")}
      >
        Voltar
      </Button>
    </Root>
  );
};
