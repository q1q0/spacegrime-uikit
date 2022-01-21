import React from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  id: number;
  open: number;
  setOpenItem: (id:number)=>void;
  isMobile?: boolean;
  isDark?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number, isDark?: boolean }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed, isDark }) => {
    if(!isDark) return isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent";
    // eslint-disable-next-line no-else-return
    else        return isOpen && isPushed ? "#3a3996" : "transparent";
  }};
  border-style: solid;
  border-width: 1px;
  padding-left: 30px;
  border-radius: 6px;
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  // initialOpenState = false,
  children,
  className,
  setOpenItem,
  open,
  id,
  isDark
}) => {
  // const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      // setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      // setIsOpen(true);
    }
    if(id === open)
      setOpenItem(-1);
    else
      setOpenItem(id);
  };

  const getBoxShadow = () => {
    if(!isDark)
      return `${open === id ? '10px 12px 30px -6px rgba(15, 15, 110, 0.5)' : ''}`;
    return `${open === id ? 'rgba(29,29,112,.97) 2px 0px 17px 10px' : ''}`;
  }

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className}>
        {icon}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {open === id ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        style={{ boxShadow:  getBoxShadow() }}
        isOpen={open === id}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
        isDark={isDark}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
