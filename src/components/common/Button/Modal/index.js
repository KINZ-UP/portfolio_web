import React from "react";
import styled from "styled-components";
import CloseFill from "../../../../assets/icons/close-fill.svg";

const Modal = ({ className, children, visible, onCancel }) => {
  if (!visible) return null;
  return (
    <StyledModal className={className}>
      <div className="modal-window">
        <div className="modal-header">
          <div className="close-btn-container">
            <img src={CloseFill} alt="close" onClick={onCancel} />
          </div>
        </div>
        <div className="modal-main">{children}</div>
      </div>
      <div className="modal-back" />
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .modal-window {
    width: 20rem;
    background: #fff;
    z-index: 1000;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .modal-header {
      height: 2.5rem;
      display: flex;
      /* padding-top: 1rem; */

      .close-btn-container {
        height: 24px;
        width: 24px;
        margin: auto;
        margin-right: 7px;
      }
    }

    .modal-main {
    }
  }

  .modal-back {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default Modal;
