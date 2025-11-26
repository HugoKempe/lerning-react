import { createGlobalStyle } from "styled-components";
import Header from "../Header";
import "./App.css";
import DigitalClock from "../DigitalClock/DigitalClock";
import { STYLE } from "../../constants/style";

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: code-saver, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1.5rem;


    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${STYLE.COLORS.BASE.BASE_17};
    color: ${STYLE.COLORS.BASE.BASE_02};
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header title={"Clock"} />
      <DigitalClock />
    </>
  );
}

export default App;
