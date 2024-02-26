import React from "react";

function TodoTable(props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td style={{ paddingRight: '20px' }}>{todo.date}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoTable;
