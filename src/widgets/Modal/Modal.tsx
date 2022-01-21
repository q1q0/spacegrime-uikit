/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";
import { Planet, SlippageToggleActive, RecentTransactionsToggleActive } from "../Menu/icons";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  onClickIcon?: (id: string) => void;
}

const StyledModal = styled.div`
  background-size: contain;
  height: auto;
  background-repeat: no-repeat;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {

  }
`;

const ModalHeader = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  // border-bottom: 1px solid #e9eaeb;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;
const Logo = styled.div`
  position: absolute;
  /* float: right; */
  right: 0;
  z-index: -1;
  width: 60%;
  top: 0;
  text-align: end;
  @media screen and (min-width: 320px) {
    width: 95% !important;
    right: 75% !important;
  }
  @media screen and (min-width: 450px) {
    width: 95% !important;
    right: 55% !important;
  }
  @media screen and (min-width: 570px) {
    width: 85% !important;
    right: 43% !important;
  }
  @media screen and (min-width: 770px) {
    width: 80% !important;
    right: 23% !important;
  }
  @media screen and (min-width: 970px) {
    width: 74% !important;
    right: 10% !important;
  }
  @media screen and (min-width: 1100px) {
    width: 75% !important;
    right: -3% !important;
  }
  @media screen and (min-width: 1500px) {
    width: 75% !important;
    right: -8% !important;
  }
  @media screen and (min-width: 1700px) {
    width: 55% !important;
    right: -7% !important;
  }
  @media screen and (min-width: 2010px) {
    width: 60% !important;
    right: -12% !important;
  }
`;

const ModalContent = styled.div`
  width: 374px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  onClickIcon
}) => (
  <StyledModal>
    <Logo>
      <Planet />
      <SlippageToggleActive style={{ left: 320, top: 120, position: 'absolute'}} onClick={()=>{onClickIcon&&onClickIcon("setting")}} />
      <RecentTransactionsToggleActive style={{ left: 280, top: 650, position: 'absolute'}} onClick={()=>{onClickIcon&&onClickIcon("recent")}} />
    </Logo>
    <ModalHeader>
      {/* <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle> */}
      {!hideCloseButton && (
        // <IconButton variant="text"  aria-label="Close the dialog">
          <CloseIcon color="primary" onClick={onDismiss}/>
        // </IconButton>
      )}
    </ModalHeader>
    <ModalContent>
      <Flex flexDirection="column" p={bodyPadding}  >
        {children}
      </Flex>
    </ModalContent>
  </StyledModal>
);

export default Modal;
