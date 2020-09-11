import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useObserver } from "mobx-react";
import useStore from "../UseStore";
import {Form, Input } from 'antd';
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";

function TodoListItem(props) {
  const [isDone, setDone] = useState(props.item.done);
  const [isModify, setIsModify] = useState(false);
  const [value, setValue] = useState(props.item.text);
  const { TodoStore } = useStore();
  const onToggle = () => {
    console.log(props.item.id + " " + props.item.done);
    TodoStore.updateTodoList(props.item.id, props.item.text, !props.item.done);
    TodoStore.getLeft();
  };
  const deleteTodo = () => {
    console.log("delete " + props.item.text + props.item.id);
    TodoStore.deleteTodo(props.item.id);
    TodoStore.getLeft();
  };
  const modifyText = () => {
    if (isModify) return;
    console.log('doubleclicked');
    setIsModify(!isModify);
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleBlur = (event) => {
    event.preventDefault();
    
    console.log('handleBlur');
    TodoStore.updateTodoList(props.item.id, value, props.item.done);
    setIsModify(!isModify);
  }
  const handleKey = (e) => {
    if (e.keyCode === 27) {  
      e.preventDefault();
      console.log("escape");
      setIsModify(!isModify);
      //handleBlur(e);
    }
  } 
  
  const onFinish = () => {
    console.log('submit');
    TodoStore.searchTodo(value); 
  };
  return useObserver(() => (
    <WrappedItem>
      <DoneIcon onClick={onToggle}>
        <CheckCircleOutlined style={{ opacity: props.item.done ? 1 : 0.3 }} />
      </DoneIcon>
      <div onDoubleClick = {modifyText}>
      {isModify? <form onSubmit = {handleBlur}>
        <input value = {value} onChange = {handleChange} onBlur = {handleBlur} onKeyDown = {handleKey}></input>
      </form> : <Text done={props.item.done}>{props.item.text}</Text>}
      </div>
      <RemoveIcon onClick={deleteTodo}>
        <DeleteOutlined />
      </RemoveIcon>
    </WrappedItem>
  ));
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
const DoneIcon = styled.div`
  padding: 5px 10px;
  margin-right: 15px;
`;
const Text = styled.div`
  width: 400px;
  height: 30px;
  font-size: 21px;
  padding-right: 15px;
  padding-bottom: 10px;
  overflow: hidden;
`;

export default TodoListItem;
