import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")



  function handleTodo() {
    const item = {
      id: todos.length + 1,
      text: input,
      completed: false
    }
    setTodos(prev => [...prev, item])

    setInput("")
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => {
      return t.id !== id
    }))
  }

  function toggle(id) {
    setTodos(todos.map((t) => {
      if (id === t.id) {
        return {
          ...t,
          completed: !t.completed
        }
      } else {
        return t
      }

    }))
  }


  return (
    <>
      <div>

        <input placeholder="Enter todo" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleTodo}>Add</button>

      </div>
      <div>
        <ul>
          {todos.map((t) => <li key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} />
            <span id={t.completed ? "todoCompleted" : ""} style={{ margin: 10 }}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button></li>)}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
