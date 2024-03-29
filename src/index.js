import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorModeScript, ChakraProvider,theme, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher zIndex={1} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
