import React, {useState} from "react";
import styled, { css } from "styled-components";
const ARROW_PATH = "/arrow_down_line.svg";
const CANCEL_PATH = "/talk_cancel.svg";

function TodoListItem(props) {
const [isDone, setDone] = useState(false);
const handleClick = () => {
    setDone(!isDone);
    console.log(isDone);
}
  return (
    <WrappedItem>
      <DoneIcon onClick = {handleClick}>
        <img src={ARROW_PATH} style = {{ opacity : isDone? 1: 0.3}}alt="" />
      </DoneIcon> 
      <Text done={isDone}>{props.text}</Text>
      <RemoveIcon>
        <img src={CANCEL_PATH} alt="" />
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
const DoneIcon = styled.div`

`;
const Text = styled.div`

`;

export default TodoListItem;
