import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditForm from "./EditForm";
uuidv4();

const Wrapper = (setIsInputValid) => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {

    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };



  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditin,
            }
          : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing} : todo
    ))
  }

  return (
    <div className="TodoWrapper">
      
      <h1>Make your list!</h1>


      <Form addTodo={addTodo} />

      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditForm editTodo = {editTask} task = {todo}/>
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  )
}

export default Wrapper
