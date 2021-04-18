import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";

const PageContainer = ({ className, children }) => {
  return <StyledPageLayout className={className}>{children}</StyledPageLayout>;
};

const StyledPageLayout = styled(Responsive)`
  padding-top: 2rem;
`;

export default PageContainer;
