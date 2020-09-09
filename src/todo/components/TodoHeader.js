import React, { useState, useEffect } from "react";
import styled from "styled-components";

function TodoHeader(props) {
  const [date, setDate] = useState(new Date());
  const [taskCnt, setTaskCnt] = useState(0);
  const getDate = (date) => {
    return (
      <h1>
        {date.getFullYear()}년 {date.getMonth()}월 {date.getDay()}일
        {date.getHours()}시 {date.getMinutes()}분
      </h1>
    );
  };
  useEffect(() => {
    let id = setInterval(() => {
      setDate(new Date());
    }, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <StyledHeader>
      {getDate(date)}
      <div className="left-task">남은 할 일 : {taskCnt}개</div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
border-bottom: 1px solid;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .left-task {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export default TodoHeader;
