import React from "react";
import { Link } from "react-router-dom";

const SidebarElement = ({ title, href }) => {
    return (
        <div style={{ padding: "2rem" }}>
            <Link className="link" to={href}>
                {title}
            </Link>
        </div>
    );
};

export default SidebarElement;
