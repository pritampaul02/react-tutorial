import React from "react";
import { Link } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import TodoList from "../components/TodoList";

const Home = () => {
    return (
        <div className="h-[calc(100vh-4rem)] flex">
            <FormComponent />
            <TodoList />
        </div>
    );
};

export default Home;
