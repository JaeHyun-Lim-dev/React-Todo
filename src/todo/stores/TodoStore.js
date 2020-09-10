import React, { useReducer } from "react";
import { observable, autorun, action, extendObservable } from "mobx";
import TodoRepository from "../repositories/TodoRepositories";

const TodoStore = observable(
  {
    TodoList: [],
    getTodoList(todoId) {
      const result = TodoRepository.getInitialTodo();
      this.TodoList.replace(result);
      console.log(this.TodoList.length);
    },
    getLeft() {
      console.log(
        "getLeft " + this.TodoList.filter((item) => item.done === true).length
      );
      return this.TodoList.filter((item) => item.done === true).length;
    },
    updateTodoList(todoId, nextText, nextDone) {
      if (this.TodoList.length === 0) {
        return;
      }
      console.log(todoId);
      const targetIdx = this.TodoList.findIndex((e) => {
        return e.id === todoId;
      });
      this.TodoList[targetIdx] = {
        id: todoId,
        text: nextText,
        done: nextDone,
      };
    },
    createTodo(newText) {
      const targetIdx = this.TodoList.length;
      this.TodoList[targetIdx] = {
        id: targetIdx + 1,
        text: newText,
        done: false,
      };
    },
  },
  {
    updateTodoList: action,
  }
);

export default TodoStore;
