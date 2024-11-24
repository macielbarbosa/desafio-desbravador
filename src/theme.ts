import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
