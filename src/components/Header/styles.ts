import styled from "styled-components";
import { Container } from "../Container";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

export const HeaderLogoWrapper = styled.div`
  width: 100%;
  max-width: 40px;
  height: 40px;
  padding: 20px 0;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const HeaderTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 115px 0;
  z-index: 2;
  h1 {
    color: #202329;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 101.25px;
    font-style: normal;
    font-weight: 900;
    line-height: 111.375px;
  }
`;

export const HeaderBackgroundImageWrapper = styled.div`
  width: 100%;
  height: 345px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
