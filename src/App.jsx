import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Navigation from "./routes/Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
    const location = window.location.pathname;

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
