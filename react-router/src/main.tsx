import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Menu from "./components/Menu";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);
