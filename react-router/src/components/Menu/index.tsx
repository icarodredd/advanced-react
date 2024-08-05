import { Link } from "react-router-dom";
import "./style.css";

export default function Menu() {
  return (
    <div className="links">
      <Link to={"/post"}>Post</Link>
      <Link to={"/redirect"}>Redirect</Link>
    </div>
  );
}
