import React, { ReactNode } from "react";
import styled from "styled-components";
import { fonts, colors } from "../utils/theme";
import line from "../assets/svg/diagonal-line.svg";

interface Props {
  children: ReactNode;
  disabled: boolean;
}

export default function SizeButton(props: Props) {
  return (
    <Container disabled={props.disabled}>
      <Number disabled={props.disabled}>{props.children}</Number>
    </Container>
  );
}

const Container = styled.div<{ disabled: boolean }>`
  width: 50px;
  height: 50px;
  margin: 10px 20px 10px 0px;
  border: 1px solid;
  border-color: ${(props) => (props.disabled ? colors.gray : colors.black)};
  box-sizing: border-box;
  filter: drop-shadow(-1px 0px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => (props.disabled ? `url(${line})` : "none")};
  background-size: cover;

  :hover {
    border-color: ${(props) => (props.disabled ? "none" : colors.white)};
    cursor: ${(props) => (props.disabled ? "no-drop" : "default")};

    p {
      color: ${(props) => (props.disabled ? "none" : colors.white)};
    }
  }
`;

const Number = styled.p<{ disabled: boolean }>`
  margin: 0;
  flex: 1;
  font-family: ${fonts.roboto};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${(props) => (props.disabled ? colors.gray : colors.black)};
`;
