import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Menu from "./components/Menu";
import Redirect from "./components/Redirect";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/redirect" element={<Redirect />} />
    </Routes>
  </BrowserRouter>
);
