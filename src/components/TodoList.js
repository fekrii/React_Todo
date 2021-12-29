import '../App.css';
import Todo from './Todo';


function TodoList({todos, setTodos, filteredTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo text={todo.text} key={todo.id} completed={todo.completed} todos={todos} setTodos={setTodos} todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
