import { Box } from "@mui/material";
import styled from "styled-components";

import { theme } from "@src/theme";

export const Root = styled(Box)`
  display: flex;
  gap: 2rem;
  align-items: start;
  width: 100%;
  ${theme.breakpoints.down("sm")} {
    flex-wrap: wrap;
  }
`;

export const Data = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const Repositories = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
`;

export const RepositoriesHeader = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  .MuiSelect-select svg {
    font-size: 1rem;
    margin-bottom: -0.125rem;
  }
  > :last-child {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
