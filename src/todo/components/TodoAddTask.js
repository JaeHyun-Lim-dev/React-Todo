import React, { useState } from "react";
import styled, { css } from "styled-components";

const ADD_ICON_PATH = "./ts_add2.svg";

function TodoAddTask(props) {
  const [isOpened, setIsOpened] = useState(false);
  const onToggle = () => setIsOpened(!isOpened);
  return (
    <div>
      {isOpened && (
        <form>
          <input autoFocus placeholder="할 일을 입력" />
        </form>
      )}
      <WrappedButton onClick={onToggle}>
        <img src={ADD_ICON_PATH} alt="" />
      </WrappedButton>
    </div>
  );
}

const WrappedButton = styled.button`
  background: transparent;
  z-index: 5;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  border: none;
  outline: none;
  display: flex;
`;

export default TodoAddTask;
