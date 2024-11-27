import s from  "./Main.module.css";
import Home from "./Home/Home.jsx";
import Category from "./Category/Category.jsx";
import Menu from "./Menu/Menu.jsx";
import Search from "./Search/Search.jsx";
import Page from "./Page/Page.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
// import {} from "framer-motion";
// import {useState} from "react";
import {AnimatePresence} from "framer-motion";

export default function Main() {
    const location = useLocation();
    return (
        <div className={s.Main}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/'             element={<Home/>}/>
                    <Route path='/category'     element={<Category/>}/>
                    <Route path='/search'       element={<Search/>}/>
                    {/*<Route path='/search/page'  element={<Page/>}/>*/}
                    {/*<Route path='/search' element={<Search/>}/>*/}
                    {/*    /!*<Widgets/>*!/*/}
                </Routes>
            </AnimatePresence>
            {/*<AnimatePresence>*/}
            {/*    <Routes location={location} key={location.pathname}>*/}
            {/*        <Route path='/search' element={<Search/>}/>*/}
            {/*    </Routes>*/}
            {/*</AnimatePresence>*/}
            <Menu/>


        </div>

  );
}

//($env:HTTPS = "true") -and (npm start)
// const [isVisible, setIsVisible] = useState(false);
// setIsVisible(!isVisible);
// setIsVisible(!isVisible);