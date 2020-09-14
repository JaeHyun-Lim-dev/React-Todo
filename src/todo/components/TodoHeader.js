import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import useStore from "../UseStore";
import 'antd/dist/antd.css';

function TodoHeader(props) {
  const [date, setDate] = useState(new Date());
  const { TodoStore } = useStore();

  const getDate = (date) => {
    return (
      <h1>
        {date.getFullYear()}년 {date.getMonth()}월 {date.getDay()}일
      </h1>
    );
  };
  useEffect(() => {
    // let setTime = setInterval(() => {
    //   setDate(new Date());
    // }, 1000);
    // return () => clearInterval(setTime);
    setDate(new Date());
    console.log("setDate");
  }, []);

  return useObserver(() => (
    <div>
      <StyledHeader >
        {getDate(date)}
        <div style = { {color: '#ededed', }}>남은 할 일 : {TodoStore.getLeft()}개</div>
      </StyledHeader>
    </div>
  ));
}

const StyledHeader = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #ededed;
  }
`;

export default TodoHeader;
