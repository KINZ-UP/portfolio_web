import React from "react";
import styled from "styled-components";

const Responsive = ({ className, children }) => {
  return (
    <ResponsiveContainer className={className}>{children}</ResponsiveContainer>
  );
};

const ResponsiveContainer = styled.div`
  width: min(100%, 1200px);
  height: 100%;
  padding: 0 0.5rem;
  margin: 0 auto;
`;

export default Responsive;
