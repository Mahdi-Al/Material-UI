import { useState } from "react";
import { createTheme, colors, ThemeProvider, styled } from "@mui/material";
import "./App.css";
import { Box } from "@mui/material";
import AlignedButtons from "../src/components/1-AlignedButtons/AlignedButtons";
import GridTextFields from "../src/components/2-GridTextFields/GridTextFields";
import CustomTheme from "./components/3-customTheme/CustomTheme";
// const theme = createTheme({
//   status: {
//     danger: "#e53e3e",
//   },
//   palette: {
//     secondary: {
//       main: colors.orange[500],
//     },
//     neutral: {
//       main: colors.grey[500],
//       darker: colors.grey[700],
//     },
//   },
// });
const styledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}));
function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      {/* <AlignedButtons /> */}
      <GridTextFields />
      <CustomTheme />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
