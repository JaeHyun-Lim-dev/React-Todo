import React, { useState } from "react";
import styled, { css } from "styled-components";
import useStore from "../UseStore";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";

function TodoListItem(props) {
  const [isDone, setDone] = useState(props.item.done);
  const [text, setText] = useState(props.item.text);
  const { TodoStore } = useStore();
  const onToggle = () => {
    console.log(props.item.id + " " + props.item.done);
    TodoStore.updateTodoList(props.item.id, text, !props.item.done);
    TodoStore.getLeft();
  };
  return (
    <WrappedItem>
      <DoneIcon onClick={onToggle}>
        <CheckCircleOutlined style={{ opacity: props.item.done ? 1 : 0.3, marginRight: '15px' }}/>
      </DoneIcon>
      <Text done={props.item.done} style={{ paddingRight: '250px' }}>{props.item.text}</Text>
      <RemoveIcon>
      <DeleteOutlined />
      </RemoveIcon>
    </WrappedItem>
  );
}

const RemoveIcon = styled.div`
  display: none;
`;
const WrappedItem = styled.div`
  display: flex;
  align-items: center;
  &: hover {
    ${RemoveIcon} {
      display: initial;
    }
  }
`;
const DoneIcon = styled.div``;
const Text = styled.div``;

export default TodoListItem;
