import React, { useState } from "react";
import Button from "./Button";

const Form = ({ addTodo }) => {

  const [value, setValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setIsInputValid(false);
      return setValue("");
    }

    addTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsInputValid(true); // Сбрасываем ошибку ввода при вводе текста
    }
  };



  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`todo-input ${!isInputValid ? 'invalid' : ''}`}
        value={value}
        placeholder="Write the task..."
        onChange={handleChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default Form;
