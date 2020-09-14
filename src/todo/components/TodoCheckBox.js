import React from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Checkbox } from "antd";
import useStore from "../UseStore";

function TodoCheckBox(props) {
  const { TodoStore } = useStore();
  const checkToggle = () => {
    TodoStore.setSeeDone();
  };

  return useObserver(() => (
      <Checkbox onChange={checkToggle} style = {{fontSize: '15px'}}>전체보기</Checkbox>
  ));
}

export default TodoCheckBox;
