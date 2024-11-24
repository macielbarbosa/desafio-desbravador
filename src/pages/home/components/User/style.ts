import { Box } from "@mui/material";
import styled from "styled-components";

import { theme } from "@src/theme";

export const Root = styled(Box)`
  display: flex;
  gap: 2rem;
  ${theme.breakpoints.down("sm")} {
    flex-wrap: wrap;
  }
`;

export const Data = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 18rem;
`;
