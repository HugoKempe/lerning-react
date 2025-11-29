// import React, { Component, type ReactNode } from "react";
import styled from "styled-components";
import { STYLE } from "../../constants";

export type Rect2D = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ViewContainerProps = {
  rect: Rect2D;
};

const CenterContainer = styled.div`
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

const FlexContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

`

// background:
//       radial-gradient(50% 50% at 100% 0,#13430d 0%  5% ,#eaad5b 6%  15%,#13430d 16% 25%,#eaad5b 26% 35%,#13430d 36% 45%,
//        #eaad5b 46% 55%,#13430d 56% 65%,#eaad5b 66% 75%,#13430d 76% 85%,#eaad5b 86% 95%,
//        #0000 96%),
//       radial-gradient(50% 50% at 0 100%,#13430d 0%  5% ,#eaad5b 6%  15%,#13430d 16% 25%,#eaad5b 26% 35%,#13430d 36% 45%,
//        #eaad5b 46% 55%,#13430d 56% 65%,#eaad5b 66% 75%,#13430d 76% 85%,#eaad5b 86% 95%,
//        #0000 96%),
//       radial-gradient(50% 50%,#13430d 0%  5% ,#eaad5b 6%  15%,#13430d 16% 25%,#eaad5b 26% 35%,#13430d 36% 45%,
//        #eaad5b 46% 55%,#13430d 56% 65%,#eaad5b 66% 75%,#13430d 76% 85%,#eaad5b 86% 95%,
//        #0000 96%),
//       radial-gradient(50% 50%,#13430d 0%  5% ,#eaad5b 6%  15%,#13430d 16% 25%,#eaad5b 26% 35%,#13430d 36% 45%,
//        #eaad5b 46% 55%,#13430d 56% 65%,#eaad5b 66% 75%,#13430d 76% 85%,#eaad5b 86% 95%,
//        #0000 96%) 50px 50px;
// background-size: 100px 100px;
// background-color: #13430d;

const ViewportContainer = styled(FlexContainer)`
  padding: 1rem;
  display: inline-block;
  border: 5px solid #333333;
  background-color: white;
  svg {
    background: radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, transparent 80%, transparent) 0% 0% / 50px 50px, radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, transparent 80%, transparent) 25px 25px / 50px 50px, linear-gradient(#171717 1px, transparent 1px) 0px -0.5px / 25px 25px, linear-gradient(90deg, #171717 1px, rgba(255, 255, 255, 0) 1px) -0.5px 0px / 25px 25px rgba(255, 255, 255, 0);
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
    background-color: rgba(255, 255, 255, 0);
  }
`;

function SvgViewport({ rect }: ViewContainerProps) {
  return (
    <>
      <ViewportContainer>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          width={`${500}pt`}
          height={`${500}pt`}
        >
          <title>A gradient</title>
          <linearGradient id="gradient">
            <stop className="begin" offset="0%" stop-color="red" />
            <stop className="end" offset="100%" stop-color="black" />
          </linearGradient>
          <rect
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            fill="url(#gradient)"
          />
          {/* <circle cx="50" cy="50" r="30" fill="url(#gradient)" /> */}
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            strokeWidth={`5px`}
            stroke={STYLE.COLORS.SETI.GREEN}
          />
        </svg>
      </ViewportContainer>
    </>
  );
}

export default SvgViewport;
