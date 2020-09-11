import React, { useState, useEffect, useCallback } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import TodoSearchForm from "./TodoSearchForm";
import TodoCreateForm from "./TodoCreateFrom";
import TodoCheckBox from './TodoCheckBox';
import { Divider } from "antd";
import useStore from "../UseStore";

function TodoBody(props) {
  const { TodoStore } = useStore();
  useEffect(() => {
    console.log("todoBody");
    if (TodoStore.todoList.length === 0) {
      TodoStore.getTodoList();
    }
    TodoStore.searchTodo();
  }, [TodoStore]);
  return useObserver(() => (
    <div>
        <WrappedBody>
          <TodoCheckBox/>
          <TodoCreateForm/>
          <TodoSearchForm/>
          {TodoStore.filterList.map((tList, idx) => (
            <div key={idx}>
              {idx === Number(0) ? null : <Divider/>}
              <TodoListItem key={idx} item={tList} />
            </div>
          ))}
        </WrappedBody>
    </div>
  ));
}

const WrappedBody = styled.div`
  flex: 1 1 0%;
  padding: 20px 32px 48px;
  overflow-y: auto;
  font-size: 20px;
`;

export default TodoBody;
