import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between bg-black text-white h-16 px-10">
                <h1>Todo App</h1>
                <ul className="flex gap-3">
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-400 font-bold"
                                    : "text-white"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-400 font-bold"
                                    : "text-white"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
