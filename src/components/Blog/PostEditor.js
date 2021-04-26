import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { createPost } from "../../api/posts";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-light.css";
import Responsive from "../layout/Responsive";
import TagBox from "./TagBox";
import Button from "../common/Button";
import Modal from "../common/Button/Modal";
import SaveModal from "./SaveModal";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});

const PostEditor = ({ history }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);

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

  const onCreatePost = useCallback(async () => {
    try {
      await createPost({ title, body, tags });
      history.push("/blog");
    } catch (err) {
      console.log(err);
    }
  }, [title, body, tags, history]);

  const toolbarOptions = useMemo(
    () => [
      [{ header: [1, 2, 3, false] }],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      ["clean"], // remove formatting button
    ],
    []
  );

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 작성하세요...",
      modules: {
        syntax: {
          highlight: (text) => hljs.highlightAuto(text).value,
        },
        toolbar: toolbarOptions,
      },
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        setBody(quill.root.innerHTML);
      }
    });
  }, [toolbarOptions]);

  useEffect(() => {
    quillInstance.current.root.innerHTML = body;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <StyledPostEditor>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <TagBox tags={tags} setTags={setTags} />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
      <div className="button-container">
        <Button onClick={onClickSave}>저장하기</Button>
      </div>
      <SaveModal
        visible={modalVisible}
        setVisible={setModalVisible}
        onSave={onCreatePost}
      />
    </StyledPostEditor>
  );
};

const StyledPostEditor = styled(Responsive)`
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
const QuillWrapper = styled.div`
  /* height: 400px; */

  .ql-container {
    border: none;
  }
  .ql-editor {
    padding-bottom: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
    border-bottom: 1px solid #aaa;
  }

  .ql-toolbar.ql-snow {
    border: none;
    /* border-bottom: 1px solid #aaa; */
    background: #a8b6ba;
    /* fill: #fff; */
    .ql-picker-options {
      background: #454545;
    }
    .ql-stroke {
      fill: none;
      stroke: #fff;
    }
    .ql-fill {
      fill: #fff;
      stroke: none;
    }
    .ql-picker {
      color: #fff;
    }
    .ql-picker-item {
      color: #fff;
    }

    /* .ql-active {
      &::before {
        color: orange;
      }
      .ql-stroke {
        fill: none;
        stroke: orange;
      }
      .ql-fill {
        fill: orange;
        stroke: none;
      }
      .ql-picker {
        color: orange;
      }
    } */
  }

  .ql-toolbar.ql-snow .ql-formats {
    padding-right: 8px;
    border-right: 1px solid #e0e0e0;
    margin-right: 10px;
  }

  .ql-editor.ql-blank::before {
    /* left: 0px; */
  }
`;

export default withRouter(PostEditor);
