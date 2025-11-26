import styled from "styled-components";
import { STYLE } from "../../constants/style";

const StyledTitle = styled.h2`
  /* font-weight: 600; */
  font-family: kettler-web, monospace;
  font-weight: 400;
  font-style: normal;

  font-size: 5em;
  text-align: center;

  line-height: 1.2rem;
  padding: 1rem 0;
`;

const HeaderContainer = styled.div`
  background-color: ${STYLE.COLORS.BASE.BASE_20};
  padding: 0.5rem;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const HeaderItem = styled.div`
  background-color: ${STYLE.COLORS.BASE.BASE_19};
  color: ${STYLE.COLORS.ACCENT.BLUE_08};

  font-weight: 500;
  padding: 1rem;
`;

function Header({ title }) {
  return (
    <>
      <HeaderContainer className="noselect">
        <HeaderItem>
          <StyledTitle>{title}</StyledTitle>
        </HeaderItem>
      </HeaderContainer>
    </>
  );
}

export default Header;
