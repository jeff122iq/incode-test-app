import React from "react";
import {
  FooterContainer,
  FooterImageWrapper,
  FooterLinksItem,
  FooterLinksWrapper,
  FooterParagraph,
  FooterTitle,
  FooterWrapper,
} from "./styles";
import { footerLinksData } from "./mocks";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTitle>
          performed as part of a test case for the company
        </FooterTitle>
        <FooterImageWrapper>
          <img src="/images/svg/incode.svg" alt="" />
        </FooterImageWrapper>
        <FooterLinksWrapper>
          {footerLinksData.map((item) => (
            <FooterLinksItem key={item.id}>{item.icon}</FooterLinksItem>
          ))}
        </FooterLinksWrapper>
        <FooterParagraph>2023</FooterParagraph>
      </FooterContainer>
    </FooterWrapper>
  );
};
