import React, { useReducer } from "react";
import { observable, autorun, action, extendObservable } from "mobx";
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
      console.log(this.todoList.length);
    },
    getLeft() {
      return this.todoList.filter((item) => item.done === false).length;
    },
    updateTodoList(todoId, nextText, nextDone) {
      if (this.todoList.length === 0) {
        return;
      }
      const targetIdx = this.todoList.findIndex((e) => {
        if (e.id === todoId) console.log(e.text + ' to ' + nextText);
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
      if (this.todoList.length === 0) return;
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
      this.searchTodo(this.searchWord);
    },
    setSeeDone() {
      this.seeDone =!this.seeDone;
      this.searchTodo(this.searchWord);
    },
    searchTodo(targetText) {
      this.filterList = this.todoList.filter(t => t.text.match(targetText));
      this.filterList = this.filterList.filter(t => (t.done === false || this.seeDone === true));
      for(let i = 0; i< this.filterList.length; i++) {
        console.log('id: ' + this.filterList[i].id + ', text: ' + this.filterList[i].text);
      }
      this.searchWord = targetText;
    }, 
  },
);

export default TodoStore;
