import React from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoBody from './components/TodoBody.js';
import styled from 'styled-components';

function TodoApp(props) {
    return (
        <StyledTodo>
            <TodoHeader/>
            <TodoBody/>
        </StyledTodo>
    );
}

const StyledTodo = styled.div`
    background: white;
    position: relative; 
    width: 600px;
    height: 700px;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    text-align: center;
    border: 1px solid;
    border-radius: 28px;
`;

export default TodoApp;