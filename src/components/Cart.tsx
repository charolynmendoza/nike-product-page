import React from "react";
import styled from "styled-components";
import { fonts } from "../utils/theme";
import cart from "../assets/svg/cart.svg";

interface Props {
  value: any;
}
export default function Cart(props: Props) {
  return (
    <Container>
      <CartNumber>{props.value}</CartNumber>
    </Container>
  );
}

const Container = styled.div`
  width: 44px;
  height: 44px;
  background-image: url(${cart});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 36px;
  right: 30px;
`;

const CartNumber = styled.p`
  margin: 0;
  font-family: ${fonts.roboto};
  font-weight: normal;
  font-size: 10px;
  position: absolute;
  top: 12px;
  right: 15px;
`;
