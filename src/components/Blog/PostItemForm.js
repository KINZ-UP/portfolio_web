import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostItemForm = ({ post, className }) => {
  const { _id, title, body, thumbnail, tags, createdAt } = post;
  return (
    <StyledPostItemForm clasName={className}>
      <Link to={`/blog/${_id}`}>
        <h1>{title}</h1>
      </Link>
      <div className="post-content">
        {thumbnail && (
          <img className="thumbnail" src={thumbnail} alt="thumbnail" />
        )}
        <div className="content-wrapper">
          <div className="post-body">{body}</div>
          <ul className="post-tags">
            {tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
          <p className="post-created">
            {moment(createdAt).format('YYYY년 MM월 DD일')}
          </p>
        </div>
      </div>
    </StyledPostItemForm>
  );
};

const StyledPostItemForm = styled.div`
  padding: 1.5rem 1rem;
  margin-bottom: 2rem;
  /* border-bottom: 1px solid #ccc; */
  background: #fff;
  box-shadow: 2px 2px 8px #999;

  .post-content {
    display: flex;
  }

  img.thumbnail {
    width: 200px;
    height: 200px;
    object-fit: cover;
    order: 1;
    margin-left: 10px;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 1rem;
    color: #222;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  .post-body {
    color: #656c72;
    line-height: 160%;
    min-height: 5rem;
    margin-bottom: 1rem;
  }

  ul.post-tags {
    display: flex;
    margin-top: auto;
    margin-bottom: 1rem;
    margin-top: auto;
    li {
      background: #e0e0e0;
      border-radius: 10rem;
      padding: 0.3rem 0.5rem;
    }

    li + li {
      margin-left: 0.5rem;
    }
  }

  .post-created {
    color: #b4babe;
  }

  @media (max-width: 568px) {
    .post-content {
      display: block;
    }
    img.thumbnail {
      width: 100%;
      height: auto;
      max-height: 300px;
      margin: 0;
      margin-bottom: 5px;
    }
  }
`;

export default PostItemForm;
