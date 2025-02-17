import React, { useState } from "react";

const About = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    console.log(name);

    function decrement() {
        setCount(count - 1);
    }

    const color = count < 0 ? "red" : "green";

    const formSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: name,
            password: password,
        });
        setName("");
        setPassword("");
    };

    return (
        <div style={{ paddingTop: "4rem" }}>
            <button onClick={decrement}>-</button>
            <span
                style={{
                    fontSize: "2rem",
                    color: color,
                }}
            >
                {count}
            </span>

            <button onClick={() => setCount(count + 1)}>+</button>

            <form onSubmit={formSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text "
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default About;
