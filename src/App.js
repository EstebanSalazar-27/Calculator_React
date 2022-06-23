import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./themes/themes";
import { GlobalStyles } from "./GlobalsStyles";
import { Wrapper } from "./layout/Wrapper";
import { Calculator } from "./components/Calculator/Calculator";
import LogoMode from "./images/dark-mode.png"

const AppComponent = styled.div`
width: 100%;
height: 100%;
`
const SwitchButton = styled.button`
filter: drop-shadow(1px 1px 5px #cbd5e1);
`

function App() {
  const [activedTheme, setActivedTheme] = useState(false)
  const handleTheme = () => {
    setActivedTheme(!activedTheme)
  }
  return (
    <AppComponent className="App">
      <ThemeProvider theme={activedTheme === false ? lightMode : darkMode}>
        <GlobalStyles />
        <Wrapper>

          <Calculator />
          <SwitchButton onClick={handleTheme}><img src={LogoMode} width={80} /></SwitchButton>

        </Wrapper>
      </ThemeProvider>
    </AppComponent>
  );
}

export default App;
