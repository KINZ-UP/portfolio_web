import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ParticleCanvas from "./ParticleCanvas";

const Canvas = () => {
  const canvas = useRef(null);
  useEffect(() => {
    new ParticleCanvas(canvas.current);
  }, []);
  return <StyledCanvas ref={canvas}></StyledCanvas>;
};

const StyledCanvas = styled.canvas`
  background: #222;
  width: 100%;
  height: 20rem;
`;

export default Canvas;
