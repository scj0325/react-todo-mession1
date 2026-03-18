import { useState, useRef } from "react";
export function useContext() {
  const lastid = useRef(4);

  const [todos, setTodos] = useState([
    { id: 3, text: "공부하기", checked: false },
    { id: 2, text: "저녁먹기", checked: false },
    { id: 1, text: "야구보기", checked: true },
  ]);

  /*function isBigEnough(cd, ina, ab) {
     cd == ina ? (ab.checked = !ab.checked) : (ab.checked = ab.checked);
     return true;
   }*/
  /* const handleOnSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     return form.target.value;
   };*/
  const addtodo = (text) => {
    setTodos([{ id: lastid.current++, text, checked: false }, ...todos]);
  };
  const removeTodo = (sindex) => {
    const filterTodos = todos.filter((ab, cb) => ab.id != sindex);
    setTodos(filterTodos);
  };
  const ToggleE = (ina) => {
    //const filterToggle = todos.filter((ab, cd) => isBigEnough(ab.id, ina, ab));
    const filterToggle = todos.filter(
      (ab, cd) =>
        (ab.id == ina
          ? (ab.checked = !ab.checked)
          : (ab.checked = ab.checked)) || true,
    );
    setTodos(filterToggle);
  };
  return { todos, lastid, addtodo, removeTodo, ToggleE };
}
