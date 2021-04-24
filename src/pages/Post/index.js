import React from "react";
import styled from "styled-components";
import { getPostById } from "../../api/posts";
import PageContainer from "../../components/layout/PageContainer";
import usePromise from "../../lib/usePromise";

const Post = ({ match }) => {
  const [loading, resp, error] = usePromise(
    () => getPostById(match.params._id),
    []
  );

  if (loading) return <p>loading..</p>;
  if (error) return <p>error</p>;

  return (
    <PageContainer>
      <StyledArticle>
        <h1 className="title">{resp.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: resp.body }} />
      </StyledArticle>
    </PageContainer>
  );
};

const StyledArticle = styled.article`
  font-size: 150%;
  line-height: 200%;

  h1.title {
    font-size: 3rem;
    text-align: center;
    margin: 5rem 0;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 3rem;
  }
`;

export default Post;
