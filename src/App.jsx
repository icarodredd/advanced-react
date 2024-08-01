import "./App.css";
import { createContext, useContext, useReducer } from "react";

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

//useReducer
const reducer = (state, action) => {
  if (action.type === "Change")
    return { ...state, title: "The text has changed!" };
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <GlobalContext.Provider value={state}>
      <UseContext />
      <button onClick={() => dispatch({ type: "Change" })}>Click</button>
    </GlobalContext.Provider>
  );
}

export default App;
