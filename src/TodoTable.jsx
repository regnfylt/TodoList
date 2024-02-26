import React from "react";
import "./index.css";

function TodoTable({todos, deleteTodo}) {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
              <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
