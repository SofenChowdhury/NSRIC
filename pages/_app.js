import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

//Redux imports
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

import { ColorModeContext, useMode, tokens } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const [theme, colorMode] = useMode();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
