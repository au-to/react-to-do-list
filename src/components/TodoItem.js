const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(index)}>
        {todo.complete ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  )
}

export default TodoItem;