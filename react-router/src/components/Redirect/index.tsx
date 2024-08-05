import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const [time, setTime] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setTime((t) => t - 1), 1000);
    if (time === 0) navigate("/");
  });

  return <h1>Get out of here in: {time}</h1>;
}
