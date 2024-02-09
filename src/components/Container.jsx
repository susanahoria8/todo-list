import React from 'react';
import { useState } from "react";
import FormTodo from './FormTodo';
import TaskList from './TaskList';

const Container = ({week, style, tittle, card}) => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList ([...list, addItem]);
  }
  return (
    <div style={style}>
      <TaskList list={list} setList={setList} week={week} style ={style} tittle = {tittle} card={card}/>
      <FormTodo handleAddItem={handleAddItem} />
    </div>

  )
}

export default Container;