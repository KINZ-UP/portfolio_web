import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "../../api/posts";
import PostItemForm from "./PostItemForm";

const PostListForm = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function test() {
      const { data } = await getPosts();
      setPosts(data);
    }
    test();
  }, []);
  return (
    <StyledPostListForm>
      {posts.map((post) => (
        <PostItemForm key={post.id} post={post} />
      ))}
    </StyledPostListForm>
  );
};

const StyledPostListForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

export default PostListForm;
