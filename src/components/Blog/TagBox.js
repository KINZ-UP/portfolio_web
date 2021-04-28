import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

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

const TagBox = ({ tags, setTags }) => {
  const [inputTag, setInputTag] = useState('');

  const createTag = useCallback(
    (value) => {
      if (!tags.includes(value)) {
        setTags(tags.concat(value));
      }
      setInputTag('');
    },
    [tags, setTags]
  );

  const onChangeInput = useCallback(
    (e) => {
      const { value } = e.target;
      const l = value.length;
      const lastInput = value[l - 1];

      if (lastInput === ',') {
        createTag(value.slice(0, l - 1));
        return;
      }
      setInputTag(value);
    },
    [createTag]
  );

  const onKeyDownEnter = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        createTag(e.target.value);
      }
    },
    [createTag]
  );

  const onDeleteTag = useCallback(
    (tag) => () => setTags((tags) => tags.filter((_tag) => tag !== _tag)),
    [setTags]
  );

  return (
    <StyledTagBox>
      <TagListWrapper>
        {tags.map((tag, idx) => (
          <TagItem key={idx} tag={tag} onDelete={onDeleteTag(tag)} />
        ))}
      </TagListWrapper>
      <TagInput
        value={inputTag}
        placeholder="태그를 입력하세요"
        onChange={onChangeInput}
        onKeyDown={onKeyDownEnter}
      />
    </StyledTagBox>
  );
};

const StyledTagBox = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
  font-size: 1rem;
`;
const TagInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: var(--tagHeight);
  height: var(--tagHeight);
`;
const TagListWrapper = styled.div`
  display: flex;
`;
export default TagBox;
