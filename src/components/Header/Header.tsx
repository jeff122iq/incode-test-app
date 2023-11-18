import React from "react";
import {
  HeaderBackgroundImageWrapper,
  HeaderContainer,
  HeaderLogoWrapper,
  HeaderTitleWrapper,
  HeaderWrapper,
} from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoWrapper>
          <img src="/images/svg/homePageIcon.svg" alt="" />
        </HeaderLogoWrapper>
        <HeaderTitleWrapper>
          <h1>The Rick and Morty API</h1>
        </HeaderTitleWrapper>
        <HeaderBackgroundImageWrapper>
          <img src="/images/svg/headerBackgroundImage.svg" alt="" />
        </HeaderBackgroundImageWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
