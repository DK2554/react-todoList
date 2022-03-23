import "./App.css";
import TodoMain from "./TodoMain";

import LoginPage from "./components/LoginPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const isLogin = true;
  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      console.log(" isLogin ?? :: ", isLogin);
    } else {
      isLogin = true;
      console.log("isLogin ?? :: ", isLogin);
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path="/main" element={<TodoMain />} />
        ) : (
          <Route path="/login" element={<LoginPage />} />
        )}
        <Route  path="/" element={<LoginPage />} />
        <Route  path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
