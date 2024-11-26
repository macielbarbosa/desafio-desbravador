import { Link } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router";

import { Repository as IRepository } from "@models/repository";
import { Label } from "@components/Label";

import { Root } from "./style";

interface Props {
  value: IRepository;
}

export const Repository = ({ value }: Props) => {
  const { name, stargazers_count, full_name } = value;
  const navigate = useNavigate();

  return (
    <Root>
      <Link
        component="button"
        onClick={() => navigate(`repository/${full_name}`)}
      >
        {name}
      </Link>
      <Label>
        <StarBorder /> {stargazers_count}
      </Label>
    </Root>
  );
};
