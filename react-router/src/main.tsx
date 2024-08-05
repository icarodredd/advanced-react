import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Menu from "./components/Menu";
import Redirect from "./components/Redirect";
import NotFound from "./components/NotFound";
import Example from "./components/Example";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />}>
        <Route path=":id" element={<Example />} />
      </Route>
      <Route path="/redirect" element={<Redirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
