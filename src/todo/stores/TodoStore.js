import React, { useReducer } from "react";
import { observable } from "mobx";
import TodoRepository from "../repositories/TodoRepositories";

const TodoStore = observable(
  {
    todoList: [],
    filterList: [],
    searchWord: '',
    seeDone: false,
    getTodoList(todoId) {
      const result = TodoRepository.getInitialTodo();
      this.todoList.replace(result);
    },
    getLeft() {
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
    },
    createTodo(newText) {
      if (this.todoList.length === 0) return;
      const targetIdx = this.todoList[this.todoList.length - 1].id;
      const nextIdx= this.todoList.length;
      this.todoList[nextIdx] = {
        id: targetIdx + 1,
        text: newText,
        done: false,
      };
    },
    deleteTodo(todoId) {
      const targetIdx = this.todoList.findIndex((e) => {
        return e.id === todoId;
      });
      this.todoList.splice(targetIdx, 1);
    },
    setSeeDone() {
      this.seeDone =!this.seeDone;
    },
    searchTodo(targetText) {
      this.searchWord = targetText;
    },
    get filteredTodoList() {  
      const arr1 = (this.seeDone? this.todoList.filter(t => t.text.match(this.searchWord) && t.done === true): Array(0));
      const arr2 = (this.todoList.filter(t=> t.text.match(this.searchWord) && t.done === false));
      return arr1.concat(arr2);
    }
  },
);

export default TodoStore;
