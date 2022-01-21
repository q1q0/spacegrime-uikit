/* eslint-disable @typescript-eslint/no-shadow */
import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";
// eslint-disable-next-line import/order
import styled from "styled-components";

const Toggle: React.FC<ToggleProps> = ({ checked,...props }) => {
  const isChecked = !!checked;

  const Content = styled.div<{checked: boolean}>`
    width: 100%;
    padding-left: 10px;
    padding-right: 12px;
    font-size: 14px;
    /* font-weight: bolder; */
    text-align: ${({ checked }) => checked ? 'left' : 'right'};
  `

  return (
    <StyledToggle checked={isChecked}>
      <Content checked={isChecked}>{checked ? "Enable" : "Disable"}</Content>
      <Input checked={checked} {...props} type="checkbox" />
      <Handle />
    </StyledToggle>
  );
};

export default Toggle;
