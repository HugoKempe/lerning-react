import { createGlobalStyle } from "styled-components";
import Header from "../Header";
import "./App.css"

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: code-saver, sans-serif;
    font-weight: 400;
    font-style: normal;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: hsl(0, 0%, 20%);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header title={"Clock"} />
    </>
  );
}

export default App;
