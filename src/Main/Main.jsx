import s from  "./Main.module.css";
import Home from "./Home/Home.jsx";
import Category from "./Category/Category.jsx";
import Menu from "./Menu/Menu.jsx";
import Search from "./Search/Search.jsx";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

export default function Main() {
    return (
      <div className={s.Main}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category' element={<Category/>}/>
              {/*<Route path='/search' element={<Search/>}/>*/}
          {/*    /!*<Widgets/>*!/*/}
          </Routes>
          <Routes>
              <Route path='/search' element={<Search/>}/>
          </Routes>
          <Menu/>
      </div>
  );
}

//($env:HTTPS = "true") -and (npm start)
// const [isVisible, setIsVisible] = useState(false);
// setIsVisible(!isVisible);
// setIsVisible(!isVisible);