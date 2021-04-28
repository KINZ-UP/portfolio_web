import React from 'react';
import styled from 'styled-components';
import PostListForm from '../../components/Blog/PostListForm';

const Blog = () => {
  return (
    <StyledPageContainer>
      <div className="inner-container">
        <PostListForm />
      </div>
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled.div`
  padding-top: 3rem;
  background: #f1f1f1;
  min-height: 100vh;

  .inner-container {
    width: min(768px, 100%);
    padding: 0 0.5rem;
    margin: 0 auto;
  }
`;

export default Blog;
