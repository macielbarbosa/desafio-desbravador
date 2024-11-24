import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import styled from "styled-components";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Root>
      <p>Essa página não existe.</p>
      <Button
        startIcon={<KeyboardBackspaceOutlinedIcon />}
        onClick={() => navigate("/")}
      >
        Voltar para a busca de usuário
      </Button>
    </Root>
  );
};

const Root = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;
