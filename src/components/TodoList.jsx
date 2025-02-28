import React, { useEffect } from "react";
import useTodoStore from "../store/useTodoStore";

const TodoList = () => {
    const { fetchTodos, todos } = useTodoStore();

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <ul>
                {todos.map((item) => {
                    return <li key={item._id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default TodoList;
