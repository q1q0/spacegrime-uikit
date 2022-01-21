import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 473.412 473.412" enable-background="new 0 0 473.412 473.412" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m429.03 177.53-44.382 59.176h29.588c0 97.895-79.634 177.529-177.529 177.529-61.551 0-115.846-31.508-147.704-79.215l-18.531 24.709c37.771 50.904 98.123 84.094 166.235 84.094 114.206 0 207.117-92.911 207.117-207.117h29.588s-44.382-59.177-44.382-59.176z"
      />
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="m59.177 236.706c0-97.895 79.634-177.529 177.529-177.529 61.551 0 115.846 31.508 147.704 79.215l18.531-24.709c-37.771-50.903-98.123-84.094-166.235-84.094-114.206 0-207.118 92.911-207.118 207.118h-29.588l44.382 59.175 44.382-59.175c.001-.001-29.588-.001-29.587-.001z"
      />
    </Svg>
  );
};

export default Icon;