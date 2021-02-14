import React from "react";
import styled from "styled-components";
import { colors } from "../utils/theme";

interface Props {
  onMouseOver: () => void;
  onMouseOut: () => void;
}
export default function HorizontalScroller(props: Props) {
  return (
    <Container onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
      <InsideBar id="bar" />
    </Container>
  );
}

const Container = styled.div`
  width: 345px;
  height: 16px;
  margin: 30px 0px;
  border-radius: 5px;
  background-color: ${colors.secondary};
  overflow: hidden;

  :hover {
    #bar {
      transform: translate(175px, 0px);
    }
  }
`;

const InsideBar = styled.div`
  width: 172.5px;
  height: 16px;
  background-color: ${colors.primary};
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transform: translate(0px, 0px);
`;
