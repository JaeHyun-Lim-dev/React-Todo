import React, { useState, useEffect, useCallback } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Checkbox } from "antd";
import useStore from "../UseStore";

function TodoCheckBox(props) {
  const { TodoStore } = useStore();
  const checkToggle = () => {
    console.log('checkbox');
    TodoStore.setSeeDone();
  }

  return useObserver(() => (
      <WrappedBox >
          전체 보기
    <Checkbox onChange={checkToggle}></Checkbox>
    </WrappedBox >
  ));
}

const WrappedBox = styled.div`
  overflow-y: auto;
  font-size: 15px;
`;


export default TodoCheckBox;
