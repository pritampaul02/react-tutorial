import { create } from "zustand";
import axios from "axios";

const useTodoStore = create((set) => ({
    isLoading: false,
    error: null,
    todos: [],

    postTodo: async (todoForm) => {
        try {
            set({ isLoading: true, error: null });
            const response = await axios.post(
                "http://localhost:8080/api/v1/todo/",
                todoForm
            );
            set((state) => state.fetchTodos());
            set({
                isLoading: false,
                error: null,
            });

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    },

    fetchTodos: async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/v1/todo/"
            );
            console.log("🚀 ~ fetchTodo:async ~ response:", response);
            set({ isLoading: false, error: null, todos: response.data.data });
        } catch (error) {
            console.error(error);
        }
    },

    updateTodo: async (todoId) => {
        try {
            const response = await axios.patch(
                `http://localhost:8080/api/v1/todo/${todoId}`
            );

            console.log("🚀 ~ updateTodo:async ~ response:", response);
        } catch (error) {
            console.log("🚀 ~ updateTodo:async ~ error:", error);
        }
    },
}));

export default useTodoStore;
