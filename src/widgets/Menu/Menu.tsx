/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import Avatar from "./Avatar";
import {Gear} from "./icons"
// eslint-disable-next-line global-require
// const TopNavBG = require("./IconImage/BgHeader.svg") as string;

const Wrapper = styled.div<{ isMobile: boolean}>`
  position: relative;
  width: 100%;
  padding-left: ${({ isMobile }) => (isMobile ? `${SIDEBAR_WIDTH_REDUCED}px` : '0')};
`;

const StyledNav = styled.nav<{ showMenu: boolean, isMobile: boolean, isPushed: boolean }>`
  z-index: 1 !important;
  width: 100% !important;
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px !importants`)};
  left: ${({ isMobile }) => (isMobile ? '8%' : '16%')};
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: ${({ isMobile }) => (isMobile ? '100%' : '78%')};
  height: ${MENU_HEIGHT}px;
  border-bottom:  ${({ isMobile }) => (isMobile ? 'solid 1px blue;' : undefined)}; 
  z-index: 20;
  flex-grow: 1;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  /* margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)}; */
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const GearBackground = styled.div`
  margin-right: 50px;  
  margin-left: 25px;  
  @media screen and (max-width: 450px) {
    margin-left: 0px !important;
  }
`

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(()=>{
    if(!isMobile) {
      setShowMenu(true);
      setIsPushed(true);
    }
  }, [isMobile])

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");
  const pushSideBar = () => {
    setIsPushed((prevState: boolean) => !prevState)
  }

  return (
    <Wrapper isMobile={isMobile}>
      <div style={{position: 'relative', display: 'flex'}}>
      <StyledNav showMenu={showMenu} isMobile={isMobile} isPushed={isPushed}>
          <Logo
            isPushed={isPushed}
            togglePush={() => {pushSideBar()}}
            isDark={isDark}
            isMobile={isMobile}
            href={homeLink?.href ?? "/"}
          />
          <Flex>
            <UserBlock account={account} login={login} logout={logout} isMobile={isMobile}/>
            <GearBackground>
              <Gear/>
            </GearBackground>
            {profile && <Avatar profile={profile} />}
          </Flex>
      </StyledNav>
      </div>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
          onClick={() => {pushSideBar()}}
        />
        <Inner isPushed={isPushed} showMenu={showMenu} >
          {children}
        </Inner>
        <MobileOnlyOverlay isDark={isDark} show={isPushed} onClick={() => setIsPushed(false)} role="presentation"  />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
