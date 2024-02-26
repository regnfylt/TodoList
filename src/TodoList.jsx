import { useState } from "react";
import TodoTable from "./TodoTable";
import "./index.css";

function TodoList() {

    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("")
    const [todos, setTodos] = useState([]);

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    
    const addTodo = () => {
        const newTodo = { description: desc, date: date };
        setTodos([...todos, newTodo]);
        setDesc("");
        setDate("");

    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
      }

    return (
    <div>
        <h2>Simple To Do List</h2>
        <div className="container2">
        <span>Description: </span>
        <input type="text" onChange={handleDescChange} value={desc} />
        <span>Date: </span>
        <input type="desc" onChange={handleDateChange} value={date} />
        <button onClick={addTodo}>Add</button>
        
    </div>
    <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
      );
    }


  export default TodoList;