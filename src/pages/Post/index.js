import React from "react";
import styled from "styled-components";
import { getPostById } from "../../api/posts";
import PageContainer from "../../components/layout/PageContainer";
import usePromise from "../../lib/usePromise";

const TagItem = ({ tag, onDelete }) => {
  return <StyledTagItem onClick={onDelete}>{tag}</StyledTagItem>;
};

const StyledTagItem = styled.div`
  padding: 0 0.6rem;
  border-radius: 20rem;
  background: #e0e0e0;
  cursor: default;
  margin-right: 0.5rem;
  height: var(--tagHeight);
  line-height: var(--tagHeight);
`;

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
        <div className="tag-container">
          {resp.tags.map((tag) => (
            <TagItem tag={tag} />
          ))}
        </div>
        <StyledArticleBody
          dangerouslySetInnerHTML={{ __html: resp.body }}
        ></StyledArticleBody>
      </StyledArticle>
    </PageContainer>
  );
};

const StyledArticle = styled.article`
  font-size: 150%;
  line-height: 200%;

  width: min(768px, 100%);
  margin: 0 auto;

  h1.title {
    font-size: 3rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
    color: #333b3f;
  }

  .tag-container {
    display: flex;
    margin-bottom: 2rem;
  }
`;

const StyledArticleBody = styled.div`
  line-height: 180%;
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

  blockquote {
    border-left: 7px solid #aad;
    padding: 3px 3px 3px 10px;
    background: #fcfcfc;
  }

  pre.ql-syntax {
    background: #f9f9f9;
    overflow-x: scroll;
    padding: 10px 15px;
    border-radius: 10px;
  }
`;

export default Post;
