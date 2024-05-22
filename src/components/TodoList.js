import TodoItem from './TodoItem.js'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        ></TodoItem>
        )
      )}
    </ul>
  )
}

export default TodoList