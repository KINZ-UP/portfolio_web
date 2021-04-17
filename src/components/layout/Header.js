import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import GithubIcon from "../../assets/icons/github_icon_60_60.png";
const Header = () => (
  <StyledHeader>
    <header>
      <Responsive className="header-inner-container">
        <div className="header-left">
          <span>ZERONINE</span>
        </div>
        <div className="header-center">
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="header-right">
          <a href="https://kinz-up.github.io" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="github" />
          </a>
        </div>
      </Responsive>
    </header>
    <div className="header-spacer"></div>
  </StyledHeader>
);

const StyledHeader = styled.div`
  --header-height: 4rem;
  width: 100vw;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Montserrat";

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);

    background: #222;
    color: #fff;

    .header-inner-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a:visited {
        color: #fff;
        text-decoration: none;
      }

      .header-right,
      .header-left {
        width: 10rem;
      }

      .header-left {
        font-weight: bold;
        font-size: 1.5rem;
      }

      .header-center {
        flex: 1;
        max-width: 22rem;
        display: flex;
        justify-content: space-between;
      }

      .header-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
          height: var(--header-height);
          padding: 0;
          margin: 0;
          display: block;
        }
      }
    }
  }

  .header-spacer {
    width: 100%;
    height: var(--header-height);
  }
`;

export default Header;
