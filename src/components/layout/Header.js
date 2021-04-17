import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <Link to="/">About</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/blog">Blog</Link>
  </div>
);

export default Header;
