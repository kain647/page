import React from "react";
//import { Page } from "./Page";
import ProgressBar from "./ProgressBar";
import DropDownContainer from "./drop-down-menu";
import DropDown from "./drop-down";
import Globalstyles from "./globals";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <DropDown />
      </ThemeProvider>
    </>
  );
}

export default App;
