import "../App.jsx";
import { useTodos } from "../context/TodoContext.jsx";

function ToDoWriteForm() {
  const { addtodo } = useTodos();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    addtodo(form.todo.value);
  };

  return (
    <>
      할일
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button>입력</button>
      </form>
    </>
  );
}
export default ToDoWriteForm;
