import React from "react";
import styled from "styled-components";
import Fire from "../../assets/icons/fire.svg";
import PageContainer from "../../components/layout/PageContainer";
import Canvas from "../../components/About/Canvas";

const About = () => {
  return (
    <StyledAbout>
      <Canvas />
      <PageContainer>
        <div className="description">
          <img src={Fire} alt="fire-icon" />
          <h1>
            성장에 목마른 주니어 <b style={{ color: "#a00" }}>프론트엔드</b>{" "}
            개발자, 구인영 입니다.
          </h1>
        </div>
        <section className="introduction">
          <h1 className="section-title">About Me</h1>
          <div className="sub-section">
            <h2 className="sub-title">Introduction</h2>
            <ul className="sub-section-content">
              <li>안녕하세요! 1년차 프론트엔드 개발자 구인영입니다.</li>
              <li>UI / UX 등 사용자 경험을 중시하면서 개발합니다.</li>
              <li>가능하면 Scratch 부터 개발하는 것을 좋아합니다.</li>
              <li>
                항상 가독성과 확장성을 고려한 코드를 짜기 위해 노력합니다.
              </li>
              <li>Canvas API를 이용한 토이 프로젝트를 즐겨합니다.</li>
            </ul>
          </div>
          <div className="sub-section">
            <h2 className="sub-title">Contact & Channel</h2>
            <ul className="sub-section-content">
              <li>
                <b>Email</b> | berksmile@gmail.com
              </li>
              <li>
                <b>Github</b> |{" "}
                <a
                  href="https://github.com/kinz-up"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/kinz-up
                </a>
              </li>
              <li>
                <b>Blog</b> |{" "}
                <a href="https://kinz-up.github.io">
                  https://kinz-up.github.io
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="skills">
          <h1 className="section-title">Skills</h1>
          <div className="sub-section">
            <h2 className="sub-title">Front End</h2>
            <ul className="sub-section-content">
              <li>HTML | CSS | Javascript</li>
              <li>ReactJS | ReduxJS</li>
              <li>REST API | GraphQL | Apollo</li>
              <li>Canvas API | D3.JS</li>
            </ul>
          </div>
          <div className="sub-section">
            <h2 className="sub-title">Back End</h2>
            <ul className="sub-section-content">
              <li>NodeJS | Python</li>
              <li>MySQL | MongoDB</li>
            </ul>
          </div>
        </section>
        <section id="career">
          <h1 className="section-title">Career</h1>
          <div className="sub-section">
            <h2 className="sub-title">PushNews</h2>
            <ul className="sub-section-content">
              <li>2020.06 ~ 2021.04</li>
            </ul>
          </div>
        </section>
      </PageContainer>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  word-break: keep-all;

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20rem;
    overflow-y: hidden;
  }

  .description {
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
      padding-bottom: 0.5rem;
      height: 2.5rem;
      filter: brightness(1.4);
      z-index: -1;
    }
  }

  section {
    padding: 1.5rem 0;
  }
  .section-title {
    font-size: 2rem;
    color: #2a752b;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #eee;
  }

  .sub-section {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
  }

  .sub-title {
    width: 18rem;
    /* margin-right: 2rem; */
    margin-bottom: 1rem;
  }

  .sub-section-content {
    width: 32rem;
    font-size: 1.2rem;
    padding-left: 1.5rem;
    /* list-style-position: inside; */
    margin-top: 0;
    li {
      margin-bottom: 1rem;

      a {
        color: #2f70f0;
        /* font-weight: bold; */
        text-decoration: underline;
        :visited {
          color: #2f70f0;
        }
      }
    }
  }

  h1 {
  }
`;

export default About;
