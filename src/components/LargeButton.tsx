import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors, fonts } from "../utils/theme";

interface Props {
  children: ReactNode;
  inverse: boolean;
  onClick?: () => void;
}

export default function LargeButton(props: Props) {
  return (
    <Container inverse={props.inverse} onClick={props.onClick}>
      <Text inverse={props.inverse}>{props.children}</Text>
    </Container>
  );
}

const Container = styled.div<{ inverse: boolean }>`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.inverse ? colors.white : colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  :first-child {
    margin-right: 30px;
  }

  :hover {
    background-color: ${colors.accent};

    h1 {
      color: ${colors.white};
    }
  }
`;

const Text = styled.h1<{ inverse: boolean }>`
  color: ${(props) => (props.inverse ? colors.secondary : colors.white)};
  font-family: ${fonts.roboto};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;
