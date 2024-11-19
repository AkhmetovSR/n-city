import s from  "./Main.module.css";
import Home from "./Home/Home.jsx";
import Category from "./Category/Category.jsx";
import Menu from "./Menu/Menu.jsx";
import {Route, Routes} from "react-router-dom";

export default function Main() {
  return (
      <div className={s.Main}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category' element={<Category/>}/>
          {/*    /!*<Widgets/>*!/*/}
          </Routes>
          <Menu/>
      </div>
  );
}

//($env:HTTPS = "true") -and (npm start)
// const [isVisible, setIsVisible] = useState(false);
// setIsVisible(!isVisible);
// setIsVisible(!isVisible);