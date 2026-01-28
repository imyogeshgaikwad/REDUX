import {useSelector} from "react-redux"


export default function Todo(){
    const todos =useSelector((state)=>state.todos)
    console.log(todos);
    return(
        <div>
            <h3>Todos</h3>
            <ul>
                {todos.map((todo)=>(<li key={todo.id}></li>))}
            </ul>
        </div>
    )
}