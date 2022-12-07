import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Dashboard from "./components/Dashboard";
import TestPage from "./components/Testpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route index element={<App />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="test" element={<TestPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);