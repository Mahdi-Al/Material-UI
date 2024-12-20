import Box from "@mui/material/Box";
import React from "react";
import { createTheme, colors } from "@mui/material";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.purple["A100"],
    },
    primary: {
      main: colors.blue[500],
      darker: colors.blue[900],
    },
    success: {
      main: colors.green[800],
    },
  },
});
export default function CustomTheme() {
  return (
    <>
      <Box
        component="section"
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: theme.palette.secondary.main,
        }}
      ></Box>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          mt: 1,
          bgcolor: theme.palette.primary.main,
        }}
      ></Box>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          mt: 1,
          bgcolor: theme.palette.success.main,
        }}
      ></Box>
    </>
  );
}
