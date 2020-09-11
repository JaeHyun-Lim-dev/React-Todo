import React, { useReducer } from "react";
import { observable, autorun, action, extendObservable } from "mobx";
import TodoRepository from "../repositories/TodoRepositories";

const TodoStore = observable(
  {
    todoList: [],
    filterList: [],
    searchWord: '',
    onlyUndone: true,
    getTodoList(todoId) {
      const result = TodoRepository.getInitialTodo();
      this.todoList.replace(result);
      console.log(this.todoList.length);
    },
    getLeft() {
      console.log(
        "getLeft " + this.todoList.filter((item) => item.done === true).length
      );
      return this.todoList.filter((item) => item.done === false).length;
    },
    updateTodoList(todoId, nextText, nextDone) {
      if (this.todoList.length === 0) {
        return;
      }
      const targetIdx = this.todoList.findIndex((e) => {
        return e.id === todoId;
      });
      this.todoList[targetIdx] = {
        id: todoId,
        text: nextText,
        done: nextDone,
      };    
      this.searchTodo(this.searchWord);
    },
    createTodo(newText) {
      const targetIdx = this.todoList[this.todoList.length - 1].id;
      const nextIdx= this.todoList.length;
      this.todoList[nextIdx] = {
        id: targetIdx + 1,
        text: newText,
        done: false,
      };
      this.searchTodo(this.searchWord);
    },
    deleteTodo(todoId) {
      const targetIdx = this.todoList.findIndex((e) => {
        return e.id === todoId;
      });
      this.todoList.splice(targetIdx, 1);
    },
    searchTodo(targetText) {
      this.filterList = this.todoList.filter(t => t.text.match(targetText));
      this.searchWord = targetText;
    }, 
  },
);

export default TodoStore;
