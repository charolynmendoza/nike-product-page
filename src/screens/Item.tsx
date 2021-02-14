import React, { useState } from "react";
import styled from "styled-components";
import SizeButton from "../components/SizeButton";
import LargeButton from "../components/LargeButton";
import HorizontalScroller from "../components/HorizontalScroller";
import Cart from "../components/Cart";
import { colors, fonts } from "../utils/theme";
import itemImage from "../assets/img/shoes.jpg";
import itemImageReverse from "../assets/img/shoes-reverse.jpg";
import nikeLogo from "../assets/svg/nike.svg";
import heart from "../assets/svg/heart.svg";

export default function Item() {
  const [itemAmount, setItemAmout] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Container>
      <NikeLogo src={nikeLogo} />
      <Content>
        <MenuURL>Shoes / Men</MenuURL>
        <ItemTitle>Nike Air Force 1</ItemTitle>
        <ItemPrice>$175</ItemPrice>
        <ItemDescription>
          The Nike RYZ 365 2 brings you a futuristic take to classic '90s
          sneakers. The eye-catching midsole with stylized cutouts modernizes
          the chunky style with an airy aesthetic. A rich mixture of materials
          on the upper adds texture and style versatility.
        </ItemDescription>
        <SizeContainer>
          <SizeButton disabled={false}>7</SizeButton>
          <SizeButton disabled={false}>7.5</SizeButton>
          <SizeButton disabled={false}>8</SizeButton>
          <SizeButton disabled={true}>8.5</SizeButton>
          <SizeButton disabled={false}>9</SizeButton>
          <SizeButton disabled={false}>9.5</SizeButton>
          <SizeButton disabled={false}>10</SizeButton>
        </SizeContainer>
        <SizeContainer style={{ maxWidth: "initial" }}>
          <LargeButton
            inverse={false}
            onClick={() => setItemAmout(itemAmount + 1)}
          >
            Add to Cart
          </LargeButton>
          <LargeButton
            inverse={true}
            onClick={() => console.log("item added to favorites")}
          >
            Favorite <img src={heart} alt="sneakers" />
          </LargeButton>
        </SizeContainer>
      </Content>
      <ImageContainer
        style={{
          backgroundImage:
            activeSlide === 0
              ? `url(${itemImage})`
              : `url(${itemImageReverse})`,
        }}
      >
        <HorizontalScroller
          onMouseOver={() => {
            setActiveSlide(1);
          }}
          onMouseOut={() => {
            setActiveSlide(0);
          }}
        />
        <Cart value={itemAmount} />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  display: flex;
`;

const Content = styled.div`
  margin-top: 12.361vw;
  margin-left: 8.541vw;
  display: flex;
  flex-flow: column;
`;

const MenuURL = styled.h3`
  margin-top: 0;
  margin-bottom: 1em;
  color: ${colors.secondary};
  font-family: ${fonts.roboto};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const ItemTitle = styled.h1`
  margin: 0;
  color: ${colors.white};
  font-family: ${fonts.roboto};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
`;

const ItemPrice = styled.h4`
  margin: 0;
  color: ${colors.secondary};
  font-family: ${fonts.roboto};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const ItemDescription = styled.p`
  max-width: 27.361vw;
  margin-bottom: 3.742vw;
  color: ${colors.white};
  font-family: ${fonts.roboto};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

const SizeContainer = styled.div`
  max-width: 300px;
  margin-bottom: 70px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
`;

const NikeLogo = styled.img`
  width: 8.205vw;
  position: absolute;
  top: 2.551vw;
  right: 44.011vw;
  z-index: 1;
`;
