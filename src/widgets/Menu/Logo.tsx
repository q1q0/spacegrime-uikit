/* eslint-disable import/no-useless-path-segments */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import LogoDark from "../Menu/icons/Logo_dark";
import LogoLight from "../Menu/icons/Logo_light";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";
// eslint-disable-next-line global-require

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  isMobile: boolean;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, isMobile }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
        {isDark ? 
                  <LogoDark width={isMobile? '120':'224'} height={isMobile?'16':'24' } /> : 
                  <LogoLight width={isMobile? '120':'224'} height={isMobile?'16':'24'} />
        }
      </MenuButton>
      {/* {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )} */}
    </Flex>
  );
};

export default Logo;
