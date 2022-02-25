import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./Components/Dashboard/BlogList";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<BlogList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;