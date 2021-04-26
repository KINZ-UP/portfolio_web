import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Modal from "../common/Button/Modal";

const SaveModal = ({ visible, setVisible, onSave }) => {
  const onCancel = useCallback(() => setVisible(false), [setVisible]);
  return (
    <Modal visible={visible} onCancel={onCancel}>
      <StyledModalWindow>
        <h3>저장하시겠습니까?</h3>
        <div className="modal-footer">
          <Button onClick={onSave} width="4rem">
            확인
          </Button>
          <Button onClick={onCancel} width="4rem">
            취소
          </Button>
        </div>
      </StyledModalWindow>
    </Modal>
  );
};

const StyledModalWindow = styled.div`
  padding: 1rem;
  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 0.5rem;
    }
  }
`;

export default SaveModal;
