import styled from "styled-components";
import { Container } from "../Container";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0 85px;
  background: #202329;
`;

export const FooterContainer = styled(Container)`
  width: 100%;
  max-width: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FooterTitle = styled.h3`
  color: #9e9e9e;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 21.938px; /* 162.5% */
  text-transform: uppercase;
`;

export const FooterImageWrapper = styled.div`
  width: 100%;
  min-width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  background-image: url("/images/svg/elipse.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(42px);
  position: relative;

  //&::before {
  //  content: "";
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 250px;
  //  height: 250px;
  //  background-image: url("/images/svg/elipse.svg");
  //  background-size: contain;
  //  background-repeat: no-repeat;
  //  border-radius: 50%;
  //  z-index: 1;
  //  filter: blur(42px);
  //}
  img {
    width: 100%;
    max-width: 50px;
    //position: absolute;
  }
`;

export const FooterLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FooterLinksItem = styled.div`
  cursor: pointer;
  svg {
    fill: #9e9e9e;
  }
`;

export const FooterParagraph = styled.p`
  color: #9e9e9e;
  font-family: "Roboto", sans-serif;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.938px;
  margin: 30px 0 0;
`;
