import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import TodoAddTask from './TodoAddTask';

function TodoBody(props) {
    return (
        <WrappedBody>
        <TodoListItem text = 'todo1'/>
        <TodoListItem text = 'todo2'/>
        <TodoListItem text = 'todo3'/>
        <TodoAddTask/>
        </WrappedBody>
    );
}

const WrappedBody = styled.div`
  flex: 1 1 0%;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

export default TodoBody;