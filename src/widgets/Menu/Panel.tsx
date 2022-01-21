/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";
// eslint-disable-next-line import/named
import { Astronaut } from "./icons";
// eslint-disable-next-line global-require
interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  onClick?: ()=>void;
}

const StyledPanel = styled.div<{ isPushed: boolean, showMenu: boolean, isDark: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  background-image:   ${(props)=>{
    if(!props.isDark) return `linear-gradient(to right, rgba(181,189,255,.8),rgba(181,189,255,.8),rgba(181,189,255,.8),rgba(181,189,255,.8),rgba(181,189,255,.8),rgba(181,189,255,0.8),rgba(181,189,255,.6),rgba(181,189,255,0.2));`
    return undefined;
  }};
  background-color:   ${(props)=>{
    if(props.isDark) return `#050545;`
    return undefined;
  }};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : '50px')};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  /* border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)}; */
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, isDark, onClick } = props;
  return (
    <div>
      <StyledPanel isPushed={isPushed} showMenu={showMenu} isDark={isDark} >
        <Astronaut width={`${SIDEBAR_WIDTH_FULL+160}px`} isVisible={isPushed} onClick={onClick}/>
        <PanelBody {...props} />
        <PanelFooter {...props} />
      </StyledPanel>
    </div>
  );
};

export default Panel;
