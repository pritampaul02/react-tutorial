import React from "react";
import SidebarElement from "./SidebarElement";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarElement title={"Home"} href={"/"} />
            <SidebarElement title={"About"} href={"/about"} />
            <SidebarElement title={"Contact us"} href={"/contact"} />
        </div>
    );
};

export default Sidebar;
