import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{isPushed: boolean}>`
  display: flex;
  flex-direction: column;
  /* overflow-y: auto;
  overflow-x: hidden; */
  height: 100%;
  margin-top: ${props => !props.isPushed ? '40%' : '-100%'};
  width: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, isDark }) => {
  const location = useLocation();
  const [openItem, setOpenItem] = useState(-1);
  
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  const setOpenItemNumber = (openId: number) => {
    setOpenItem(openId)
  }

  return (
    <Container isPushed={isPushed} >
      {links.map((entry, index) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon 
                              width="18px" mr="8px" 
                              stroke="currentColor" 
                              fill="currentColor" 
                              style={{color: index!==openItem ? '#33adff' : 'white',
                                      fill: index!==openItem ? '#33adff' : 'white'}}
                            />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <Accordion
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
              id={index}
              open={openItem}
              setOpenItem={setOpenItemNumber}
              isMobile={isMobile}
              isDark={isDark}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          <MenuEntry key={index} isActive={entry.href === location.pathname} className={calloutClass} onClick={()=>setOpenItemNumber(index)}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
