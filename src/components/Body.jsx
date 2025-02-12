import React from "react";
import Sidebar from "./Sidebar";

const Body = () => {
    let totlaUSer = 15;
    return (
        <main className="container">
            <Sidebar />
            <div>
                <h1>Users = {totlaUSer}</h1>
            </div>
        </main>
    );
};

export default Body;
