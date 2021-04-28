import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../../api/posts';
import PostItemForm from './PostItemForm';
import usePromise from '../../lib/usePromise';
import FetchMore from './FetchMore';
const PostListForm = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isNoMore, setIsNoMore] = useState(false);

  const [loading, response, error] = usePromise(
    () => getPosts({ offset, limit: 5 }),
    [offset]
  );

  useEffect(() => {
    if (response) {
      console.log(response);
      setPosts((posts) => [...posts, ...response]);
      if (response.length < 5) setIsNoMore(true);
    }
  }, [response]);

  if (error) return <p>error</p>;

  return (
    <StyledPostListForm>
      {posts.map((post) => (
        <PostItemForm key={post._id} post={post} />
      ))}

      <FetchMore loading={loading} isNoMore={isNoMore} setOffset={setOffset} />
    </StyledPostListForm>
  );
};

const StyledPostListForm = styled.div`
  .fetchMore-target {
    height: 0.5rem;
    background: red;
  }
`;

export default PostListForm;
