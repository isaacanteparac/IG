import "./App.css";
import { Context } from "./auth/Context";
import AppRouter from "./router/AppRouter";

import { ThemeProvider } from "styled-components";
import { themeLight } from "./styles/colors";

function App() {
  return (
    <div>
      <ThemeProvider theme={themeLight}>
        <Context>
          <AppRouter />
        </Context>
      </ThemeProvider>
    </div>
  );
}

export default App;
