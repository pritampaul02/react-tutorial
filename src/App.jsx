import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route element={<Home />} path={"/"} />
                    <Route element={<About />} path={"/about"} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
