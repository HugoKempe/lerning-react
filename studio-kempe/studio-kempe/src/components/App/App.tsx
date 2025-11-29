import styled, { createGlobalStyle } from "styled-components";

import { STYLE } from "../../constants";
import Header from "../Header";
import Footer from "../Footer";
import SvgViewport, { type Rect2D } from "../SvgViewport";

function App() {
  const rect: Rect2D = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  };

  return (
    <>
      <GlobalStyles />
      <Header />

      {/* <PageFiller> */}
        <SvgViewport rect={rect} />
      {/* </PageFiller> */}
      <Footer />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Geologica", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "slnt" 0, "CRSV" 0, "SHRP" 0;

    background-color: ${STYLE.COLORS.BASE.BASE_18};
  }

  body {
    margin: 0;
    display: flex;
    align-items: stretch;
    justify-content: space-around;

    /* width: 100%; */

    border: 1px solid red;
  }
`;

export default App;
