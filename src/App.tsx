import { GlobalStateProvider } from "./context/GlobalStateContext";
import AppLayout from "./components/AppLayout";
import ScrollAnimation from "../utils/ScrollAnimation";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";

function App(): JSX.Element {
  return (
    <DarkModeProvider>
      <GlobalStateProvider>
        <ScrollAnimation>
          <GlobalStyles />
          <AppLayout  />
        </ScrollAnimation>
      </GlobalStateProvider>
    </DarkModeProvider>
  );
}

export default App;
