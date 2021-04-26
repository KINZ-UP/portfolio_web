import React from "react";
import styled from "styled-components";
import PostEditor from "../../../components/Blog/PostEditor";
import Responsive from "../../../components/layout/Responsive";

const PostWrite = () => {
  return (
    <Responsive>
      <PostEditor />
    </Responsive>
  );
};

export default PostWrite;
