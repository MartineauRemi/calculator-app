import ThemeProvider from "./contexts/ThemeProvider";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider>
        <div className="App">
          <GlobalStyle />
          <h1>Hello world</h1>
        </div>
    </ThemeProvider>
  );
}

export default App;
