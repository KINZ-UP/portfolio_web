import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/layout/PageContainer";
import LinkIcon from "../../assets/icons/link.png";
import CandleStick from "../../assets/candlestick.gif";
import FirstArticle from "../../assets/firstArticle.gif";
import ExternArticle from "../../assets/externArticle.gif";
import ThemeManage from "../../assets/themeManage.gif";
import UserStatistics from "../../assets/userStatistics.gif";

const Portfolio = () => (
  <StyledPortfolio>
    <PageContainer>
      <section id="pushnews-web">
        <h1 className="section-title">
          PushNews Webpage
          <a href="https://pushnews.ai" target="_blank" rel="noreferrer">
            <img src={LinkIcon} alt="link" />
          </a>
        </h1>
        <div className="sub-section">
          <h2 className="sub-title">기본 정보</h2>
          <ul className="sub-section-content">
            <li>주식 관련 뉴스 플랫폼</li>
            <li>뉴스기사 및 관련 주식종목 정보 제공</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">기술 스택</h2>
          <ul className="sub-section-content">
            <li>ReactJS | NextJS</li>
            <li>GraphQL | ApolloClient</li>
            <li>Canvas API</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">수행 역할</h2>
          <ul className="sub-section-content">
            <li>주요 페이지 UI, 반응형 페이지 구현</li>
            <li>주가 차트 구현 (CandleStick Chart)</li>
            <li>주요 컴포넌트 구현 (카드 / 레이아웃 / 모달창 / 검색바 등)</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">작업 예시</h2>
          <div className="image-container">
            <img src={CandleStick} alt="candlestick" />
          </div>
        </div>
      </section>
      <section id="admin-page">
        <h1 className="section-title">PushNews App & Web 관리자페이지</h1>
        <div className="sub-section">
          <h2 className="sub-title">기본 정보</h2>
          <ul className="sub-section-content">
            <li>주식 뉴스 플랫폼 (웹/앱) 관리자 페이지</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">기술 스택</h2>
          <ul className="sub-section-content">
            <li>ReactJS | ReduxJS</li>
            <li>REST API</li>
            <li>ChartJS</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">수행 역할</h2>
          <ul className="sub-section-content">
            <li>관리자페이지 프론트 전체</li>
            <li>대시보드, 회원관리, 기사관리 등 테이블 조회</li>
            <li>공지사항, 주식테마, 기사 정보 등록 / 수정 / 삭제 기능</li>
            <li>
              주요 컴포넌트 구현 (테이블, CustomSelector, ResolvedWindow 등)
            </li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">작업 예시</h2>
          <div className="image-container">
            <img src={ExternArticle} alt="extern-article" />
            <img src={ThemeManage} alt="theme-manage" />
            <img src={UserStatistics} alt="user-statistics" />
          </div>
        </div>
      </section>
      <section className="first-article-search">
        <h1 className="section-title">최초기사검색 API</h1>
        <div className="sub-section">
          <h2 className="sub-title">기본 정보</h2>
          <ul className="sub-section-content">
            <li>어떤 뉴스기사의 관련뉴스 및 최초뉴스를 찾아주는 검색 서비스</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">기술 스택</h2>
          <ul className="sub-section-content">
            <li>Python | Pandas | Flask</li>
            <li>MySQL</li>
            <li>VanillaJS</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">수행 역할</h2>
          <ul className="sub-section-content">
            <li>프로젝트 전체 프로세스</li>
            <li>실시간 뉴스 크롤러 개발 | 뉴스 DB 구축</li>
            <li>관련기사 추출 프로세스 개발 | 검색 API 개발</li>
            <li>관련기사 검색 웹페이지 구현</li>
          </ul>
        </div>
        <div className="sub-section">
          <h2 className="sub-title">작업 예시</h2>
          <div className="image-container">
            <img src={FirstArticle} alt="firstArticle" />
          </div>
        </div>
      </section>
    </PageContainer>
  </StyledPortfolio>
);

const StyledPortfolio = styled.div`
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
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #008;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #eee;

    a {
      display: block;
    }
    img {
      display: block;
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
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

  .image-container {
    img {
      width: min(50rem, 100%);
    }
  }
`;

export default Portfolio;
