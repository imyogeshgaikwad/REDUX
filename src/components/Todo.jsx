import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "./Todo.css"; 

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const markDoneHandler = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <div className="todo-container">
            <AddForm />
            <h3>Todos</h3>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.isDone ? "done" : ""}>
                        <span>{todo.task}</span>
                        <div>
                            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                            {!todo.isDone && (
                                <button onClick={() => markDoneHandler(todo.id)}>Mark as Done</button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
