import React from 'react'
import Navbars from './Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import { useReducer } from 'react';
import "./App.css"


export default function App() {
  const initState = []
  function reducerCount(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.newTask];
      case 'delete':
        const updatedState = state.filter(task => task.taskId !== action.taskId);
        return updatedState;
      case 'update':
        return state.map(task => {
          if (task.taskId === action.taskUpdate.taskId) {
            return action.taskUpdate;
          }
          return task;
        });
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducerCount, initState);

  return (
    <div className='content'>
      <Navbars handleAddTask={dispatch}></Navbars>
      <Task handleUpdateTask={dispatch} handleDeleteTask={dispatch} taskList={state}></Task>
    </div>
  )
}
