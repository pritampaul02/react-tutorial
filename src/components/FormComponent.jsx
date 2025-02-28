import React, { useState } from "react";
import { PiPencilLine } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import useTodoStore from "../store/useTodoStore";
import { FiLoader } from "react-icons/fi";

const FormComponent = () => {
    const { postTodo, isLoading } = useTodoStore();

    const [todoForm, setTodoForm] = useState({
        title: "",
        description: "",
        isCompleted: false,
    });

    const handleChange = (e) => {
        console.log(todoForm);
        setTodoForm({
            ...todoForm,
            [e.target.name]: e.target.value,
        });
    };

    function resetTitle(e) {
        e.preventDefault();
        setTodoForm({ ...todoForm, title: "" });
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(todoForm);

        postTodo(todoForm);
        // const id = Date.now();
        // const newTodo = {
        //     id,
        //     title: todoForm.title,
        //     description: todoForm.description,
        //     isCompleted: todoForm.isCompleted,
        // };
        // const updatedTodos = [...todos, newTodo];
        // setTodos(updatedTodos);
        // localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodoForm({
            title: "",
            description: "",
            isCompleted: false,
        });
    }

    return (
        <form
            className="w-[450px] bg-slate-100 h-full flex flex-col items-center py-14 px-10 gap-3"
            onSubmit={submitForm}
        >
            <div className="flex flex-col items-start w-full">
                <label
                    htmlFor="title"
                    className="text-lg font-medium text-black"
                >
                    Title :
                </label>
                <div className="w-full flex items-center rounded-md border border-slate-900 px-2 gap-2">
                    <PiPencilLine className="text-2xl" />
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Add your task"
                        required
                        className="w-full px-2 py-2 bg-transparent outline-none"
                        onChange={handleChange}
                        value={todoForm.title}
                    />
                    <button onClick={resetTitle}>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
                <label
                    htmlFor="description"
                    className="text-lg font-medium text-black"
                >
                    Description :
                </label>
                <div className="w-full flex items-center rounded-md border border-slate-900 px-2 gap-2">
                    <PiPencilLine className="text-2xl" />
                    <textarea
                        id="description"
                        placeholder="Description"
                        name="description"
                        rows={4}
                        className="w-full px-2 py-2 bg-transparent outline-none resize-none"
                        onChange={handleChange}
                        value={todoForm.description}
                    />
                    <button onClick={resetTitle}>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="isCompleted"
                        id="isCompleted"
                        onChange={(e) => {
                            setTodoForm({ ...todoForm, isCompleted: true });
                        }}
                        value={todoForm.isCompleted}
                    />
                    <span>Completed</span>
                </div>
            </div>
            <button className="w-full bg-slate-950 text-white p-3 rounded-md">
                {isLoading ? <FiLoader /> : "Add Todo"}
            </button>
        </form>
    );
};

export default FormComponent;
