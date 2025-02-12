import React from "react";
import SidebarElement from "./SidebarElement";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarElement title={"Home"} />
            <SidebarElement title={"About"} />
            <SidebarElement title={"Contact us"} />
        </div>
    );
};

export default Sidebar;
