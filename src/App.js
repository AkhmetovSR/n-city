import './App.css';
import Main from "./Main/Main.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
