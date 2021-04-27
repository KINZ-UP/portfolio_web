import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-light.css";
import { uploadImage } from "../../api/posts";

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});

const PostEditor = ({ body, setBody, setQuill }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const imageHandler = useCallback(async () => {
    const quill = quillInstance.current;
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append("image", file);

      // Save current cursor state
      const range = quill.getSelection(true);

      // Insert temporary loading placeholder image
      // quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);

      // Move cursor to right side of image (easier to continue typing)
      quill.setSelection(range.index + 1);

      try {
        const res = await uploadImage(formData); // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
        console.log(res);
        // Remove placeholder image
        // quill.deleteText(range.index, 1);

        // Insert uploaded image
        // this.quill.insertEmbed(range.index, 'image', res.body.image);
        quill.insertEmbed(range.index, "image", res.data.path);
        quill.setSelection(range.index + 1);
      } catch (e) {
        console.error(e);
        alert("이미지 업로드에 실패하였습니다");
      }
    };
  }, []);

  const toolbarOptions = useMemo(
    () => ({
      container: [
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
        ["link", "image"],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme

        ["clean"], // remove formatting button
      ],
      handlers: {
        image: () => imageHandler(quillInstance.current),
      },
    }),
    [imageHandler]
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
      console.log(source);
      if (source === "user") {
        setBody(quill.root.innerHTML);
      }
    });

    setQuill(quill);
  }, [setBody, toolbarOptions]);

  useEffect(() => {
    quillInstance.current.root.innerHTML = body;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuillWrapper>
      <div ref={quillElement} />
    </QuillWrapper>
  );
};

const QuillWrapper = styled.div`
  .ql-container {
    border: none;
  }
  .ql-editor {
    height: 500px;
    overflow: scroll;
    border-bottom: 1px solid #aaa;
    font-size: 1.125rem;
    line-height: 180%;

    h2 {
      margin-top: 3rem;
      margin-bottom: 1rem;
    }

    ul {
      margin-left: 3rem;
    }

    blockquote {
      border-left: 7px solid #aad;
      padding: 3px 3px 3px 10px;
      background: #fcfcfc;
    }

    pre.ql-syntax {
      color: #000;
      background: #f9f9f9;
      overflow-x: scroll;
      padding: 10px 15px;
      border-radius: 10px;
    }

    p img {
      max-height: 400px;
      max-width: 100%;
    }
  }

  .ql-toolbar.ql-snow {
    border: none;
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
