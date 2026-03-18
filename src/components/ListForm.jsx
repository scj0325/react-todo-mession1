import "../App.jsx";
import { useTodos } from "../context/TodoContext.jsx";

function ListForm() {
  const { todos, lastid, removeTodo, ToggleE } = useTodos();
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => ToggleE(todo.id)}
              checked={todo.checked}
            />
            {todo.checked.toString()}
            {todo.id}
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListForm;
