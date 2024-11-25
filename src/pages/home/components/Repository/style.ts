import { Paper } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  height: 100%;
  justify-content: space-between;
  align-items: start;
  > :first-child {
    text-align: left;
    padding: 0.25rem 0.25rem 0.25rem 0;
  }
`;
