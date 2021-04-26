import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { getPostById, createPost, updatePost } from "../../../api/posts";
import PostEditor from "../../../components/Blog/PostEditor";
import SaveModal from "../../../components/Blog/SaveModal";
import TagBox from "../../../components/Blog/TagBox";
import Button from "../../../components/common/Button";
import Responsive from "../../../components/layout/Responsive";
import usePromise from "../../../lib/usePromise";

const PostEdit = ({ match, history }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, response, error] = usePromise(
    () => getPostById(match.params._id),
    []
  );

  useEffect(() => {
    if (response) {
      const { title, body, tags } = response;
      setTitle(title);
      setBody(body);
      setTags(tags);
    }
  }, [response]);

  const onChangeTitle = (e) => setTitle(e.target.value);

  const onClickSave = useCallback(() => {
    if (title === "") {
      alert("제목을 입력하세요");
      return;
    }
    if (body === "") {
      alert("내용을 입력하세요");
      return;
    }
    setModalVisible(true);
  }, [body, title]);

  const onUpdatePost = useCallback(async () => {
    try {
      await updatePost({ id: match.params._id, post: { title, body, tags } });
      history.push("/blog");
    } catch (err) {
      console.log(err);
    }
  }, [match.params._id, title, body, tags, history]);

  if (loading) return null;

  return (
    <StyledResponsive>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <TagBox tags={tags} setTags={setTags} />
      <PostEditor body={body} setBody={setBody} />
      <div className="button-container">
        <Button onClick={onClickSave}>수정하기</Button>
      </div>
      <SaveModal
        visible={modalVisible}
        setVisible={setModalVisible}
        onSave={onUpdatePost}
      />
    </StyledResponsive>
  );
};

const StyledResponsive = styled(Responsive)`
  padding: 5rem 0;
  width: min(768px, 100%);

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }
`;

const TitleInput = styled.input`
  font-size: 2.4rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
  width: 100%;
  font-weight: bold;
  color: #757575;
`;

export default PostEdit;
