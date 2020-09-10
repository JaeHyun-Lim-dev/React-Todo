import React from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoBody from './components/TodoBody.js';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Content } = Layout;
function TodoApp(props) {
    return (
        <Layout style = {{display: 'flex'}}>
            {/* <TodoHeader/>
            <TodoBody/>           */}
            <Header style = {{height: 'auto', display: 'flex'}}>
                <TodoHeader/>
            </Header>
            <Content>
                <TodoBody/>
            </Content>
        </Layout>
    );
}

const StyledTodo = styled.div`
    background: #d6e4ff;
    position: relative; 
    width: 600px;
    height: 700px;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 28px;
`;

export default TodoApp;