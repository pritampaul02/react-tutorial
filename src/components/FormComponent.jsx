import React, { useState } from "react";
import { PiPencilLine } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const FormComponent = () => {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function resetTitle(e) {
        e.preventDefault();
        setTitle("");
    }

    function submitForm(e) {
        e.preventDefault();
        const id = Date.now();
        const newTodo = {
            id,
            title,
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTitle("");
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
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <button onClick={resetTitle}>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
            </div>
            <button className="w-full bg-slate-950 text-white p-3 rounded-md">
                Add Todo
            </button>
        </form>
    );
};

export default FormComponent;
