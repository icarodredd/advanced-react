import "./App.css";
import { createContext, useContext, useReducer } from "react";
import { context, ContextProvider } from "./contexts/CounterContext";

const globalState = {
  title: "Title",
  count: 0,
};

//useContext
const GlobalContext = createContext();

const UseContext = () => {
  const context = useContext(GlobalContext);
  return (
    <div>
      <h1>{context.title}</h1>
    </div>
  );
};

const H1 = () => {
  const context = useContext(context);
  console.log(context);
};

//useReducer
const reducer = (state, action) => {
  if (action.type === "Change")
    return { ...state, title: "The text has changed!" };
  return { ...state };
};

function App() {
  return (
    <ContextProvider>
      <H1 />
    </ContextProvider>
  );
}

export default App;
