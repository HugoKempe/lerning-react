// import React, {useState } from "react";
import { styled } from "styled-components";
import { STYLE } from "../../constants";

function Footer() {
  return (
    <>
      <StyledFooter>
        <h3>Footer</h3>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  padding: .5em;
  text-align: center;

  margin: 0;
  font-size: 3rem;

  background: ${STYLE.COLORS.BASE.BASE_19};
  color: ${STYLE.COLORS.BASE.BASE_08};

  h3 {
    font-weight: 400;
  }
  h3 span {
    color: ${STYLE.COLORS.ACCENT.GREEN_02};
  }

  p {
    font-weight: 200;
    font-size: 0.75em;
  }
`;

export default Footer;
