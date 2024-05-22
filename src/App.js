import { useState } from "react";
import TodoList from './components/TodoList.js'

function App () {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 新增
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, complete: false }]);
      setInput('');
    }
  }

  // 切换
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  // 删除
  const deleteTodo = (index) => {
    const newTodos = todos.filter((item, i) => {
      return i !== index;
    })
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  )
}

export default App;