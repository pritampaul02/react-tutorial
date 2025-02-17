import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import About from "../pages/About";

const Navigation = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Body />} />
            <Route path={"/about"} element={<About />} />
        </Routes>
    );
};

export default Navigation;
