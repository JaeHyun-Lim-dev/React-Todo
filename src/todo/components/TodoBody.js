import React, { useState, useEffect, useCallback } from "react";
import { useObserver } from "mobx-react";
import { toJS } from "mobx";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import TodoAddTask from "./TodoAddTask";
import TodoSearchForm from "./TodoSearchForm";
import { Divider } from "antd";
import useStore from "../UseStore";

function TodoBody(props) {
  const { TodoStore } = useStore();
  useEffect(() => {
    if (TodoStore.TodoList.length === 0) {
      TodoStore.getTodoList();
    }
  }, [TodoStore]);
  return useObserver(() => (
    <div>
        <WrappedBody>
          <TodoSearchForm/>
          {TodoStore.TodoList.map((todoList, idx) => (
            <div key={idx}>
              {idx === Number(0) ? null : <Divider/>}
              <TodoListItem key={idx} item={todoList} />
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
