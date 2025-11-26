import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { STYLE } from "../../constants/style";
import { formatTime } from "../../utils";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);




  return (
    <CenterContainer>
      <ClockContainer>
        <Clock>
          <span>{formatTime(time)}</span>
        </Clock>
      </ClockContainer>
    </CenterContainer>
  );
}

const CenterContainer = styled.div`
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

const ClockContainer = styled.div`
  background-color: ${STYLE.COLORS.BASE.BASE_19};
`;

const Clock = styled.div`
  color: ${STYLE.COLORS.BASE.BASE_01};
  text-shadow: ${STYLE.EFFECT.TEXT_SHADOW.SMALL};
  /* font-weight: bold; */
  padding: 2rem;

  font-family: kettler-web, monospace;
  font-weight: 400;
  font-style: normal;

  font-size: 6em;
  text-align: center;

  line-height: 1.5rem;
`;

export default DigitalClock;
