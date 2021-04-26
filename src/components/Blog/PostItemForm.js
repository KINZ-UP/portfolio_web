import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";

const PostItemForm = ({ post, className }) => {
  return (
    <StyledPostItemForm clasName={className}>
      <Link to={`/blog/${post._id}`}>
        <h1>{post.title}</h1>
      </Link>
      <div className="post-body">{post.body}</div>
      <ul className="post-tags">
        {post.tags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
      <p className="post-created">
        {moment(post.createdAt).format("YYYY년 MM월 DD일")}
      </p>
    </StyledPostItemForm>
  );
};

const StyledPostItemForm = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
    color: #222;
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
`;

export default PostItemForm;
