import { useState } from "react";

const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);
function TodoLists() {
    const [todos, setTodos] = useState([{
        id: 'Task-one',
        createdAt: '18:00'},
    {
        id: 'Task-two',
        createdAt: '20:30',   
    }]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }
    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <ToDo key={todo.id}id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoLists;