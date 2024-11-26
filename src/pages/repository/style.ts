import { Box } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Box)`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 3rem;
`;

export const Header = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  h5:last-child {
    font-weight: 500;
  }
  img {
    border: 1px solid lightgray;
    border-radius: 50%;
  }
`;
