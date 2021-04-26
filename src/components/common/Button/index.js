import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  font-weight: bold;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0.3rem 0.6rem"};
  border: none;
  outline: none;
  background: ${(props) => props.background || "#454545"};
  color: ${(props) => props.color || "#fff"};

  :hover {
    background: ${(props) => props.backgroundHover || "#777"};
  }
`;

export default Button;
