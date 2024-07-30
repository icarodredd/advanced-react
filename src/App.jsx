import "./App.css";
import { createContext, useContext } from "react";

//useContext
const GlobalContext = createContext();

const UseContext = () => {
  const context = useContext(GlobalContext);
  return (
    <div>
      <h1>{context.text}</h1>
    </div>
  );
};

function App() {
  //useContext

  return (
    <GlobalContext.Provider value={{ text: "Example of useContext" }}>
      <UseContext />
    </GlobalContext.Provider>
  );
}

export default App;
