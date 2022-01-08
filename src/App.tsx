import { useState } from "react";
import ThemeProvider from "./contexts/ThemeProvider";
import GlobalStyle from "./GlobalStyle";
import Calculator from "./layout/calculator/Calculator";
import ColorCustomMenu from "./layout/ColorCustomMenu";
import Dashboard from "./layout/Dashboard";

function App() {
  const [customMenuActive, setCustomMenuActive] = useState(false)

  return (
    <ThemeProvider>
        <div className="App">
          <GlobalStyle />
          <Dashboard>
            {customMenuActive
              ? (<ColorCustomMenu customMenuActive={customMenuActive} setCustomMenuActive={setCustomMenuActive} />)
              : null
            }
            <Calculator setCustomMenuActive={setCustomMenuActive} />
          </Dashboard>
        </div>
    </ThemeProvider>
  );
}

export default App;