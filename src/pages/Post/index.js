import React from 'react';
import styled from 'styled-components';
import { getPostById } from '../../api/posts';
import usePromise from '../../lib/usePromise';

const TagItem = ({ tag }) => {
  return <StyledTagItem>{tag}</StyledTagItem>;
};

const StyledTagItem = styled.div`
  padding: 0 1rem;
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

  if (loading) return <StyledPost />;
  if (error) return <p>error</p>;

  return (
    <StyledPost>
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
    </StyledPost>
  );
};

const StyledPost = styled.div`
  background: #f1f1f1;
  min-height: 100vh;
  padding: 3rem 0.5rem;
`;

const StyledArticle = styled.article`
  /* display: flow-root; */
  width: min(800px, 100%);

  margin: 0 auto;
  background: #fff;
  padding: 3rem 2rem;
  box-shadow: 2px 2px 6px #777;

  word-break: break-all;

  h1.title {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: #333b3f;
    line-height: 130%;
  }

  .tag-container {
    display: flex;
    margin-bottom: 2rem;
  }
`;

const StyledArticleBody = styled.div`
  line-height: 180%;
  font-size: 150%;

  p {
    margin-bottom: 0.5rem;
  }

  *:not(p, blockquote) {
    margin: 0.5rem 0;
  }

  h1 {
    margin-top: 4rem;
    margin-bottom: 1.2rem;
  }
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 2.5rem;
    margin-bottom: 0.8rem;
  }
  h4 {
    margin-top: 2rem;
    margin-bottom: 0.6rem;
  }
  h5 {
    margin-top: 1.5rem;
    margin-bottom: 0.4rem;
  }

  ul,
  ol {
    padding-left: 2rem;
    margin: 1rem 0;
  }

  ul {
    list-style-type: disc;
  }

  blockquote {
    border-left: 7px solid #a3b88e;
    padding: 0.4rem 0.4rem 0.4rem 0.625rem;
    background: #edf3e6;
  }

  *:not(blockquote) + blockquote {
    margin-top: 1rem;
  }

  blockquote + p {
    margin-top: 1rem;
  }

  pre.ql-syntax {
    background: #f9f9fd;
    overflow-x: scroll;
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
    line-height: 180%;
  }

  img,
  video {
    max-width: 100%;
  }
`;

export default Post;
