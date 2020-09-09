import React, { useReducer } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: false
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
];

function todoReducer(state, event) {
  switch (event.type) {
    case 'CREATE':
      return state.concat(event.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === event.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== event.id);
    default:
      throw new Error(`Unhandled action type: ${event.type}`);
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return children;
}