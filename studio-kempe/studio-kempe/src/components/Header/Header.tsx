// import React, {useState } from "react";
import { styled } from "styled-components";
import { STYLE } from "../../constants";

const StyledHeader = styled.header`
  padding: .5em;
  text-align: center;

  font-size: 3rem;

  background: ${STYLE.COLORS.ACCENT.BLUE_09};
  color: ${STYLE.COLORS.BASE.BASE_05};

  h2 {
    font-weight: 400;
    text-shadow: ${STYLE.EFFECT.TEXT_SHADOW.SMALL};
  }
  h2 span {
    color: ${STYLE.COLORS.ACCENT.GREEN_02};
  }

  p {
    font-weight: 200;
    font-size: 0.5em;
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <h2>
          Studio <span>Kempe</span>
        </h2>
        <p>
          With a <b>flexible</b> layout.
        </p>
      </StyledHeader>
    </>
  );
}

export default Header;
