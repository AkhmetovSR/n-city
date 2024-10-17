import s from  "./Main.module.css";
import searchIcon from "../resource/searchIcon.webp";
import Sun from "../resource/sun.webp";
import Writer from "./Writer/Writer.jsx";
import Menu from "./Menu/Menu.jsx";
import SearchBoard from "./SearchBoard/SearchBoard.jsx";
import {useState} from "react";
import { motion, useTime, useTransform } from "framer-motion";

function Main() {
    //------------------------------------------Вращение солнышка--------------------------------------------------------------
    const time = useTime();
    const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });

    //-------------------------------------------------------------------------------------------------------------------------
    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState();
    function openSearchBoard(){
        setIsVisible(!isVisible);
        setOpen(0)
    }
    function closeSearchBoard(){
        setIsVisible(!isVisible);
        setOpen(1000)
    }

  return (
    <div className={s.Main}>
        <motion.div className={s.Sun} style={{rotate}}><img src={Sun} alt="sun" onClick={closeSearchBoard}/></motion.div>
        <div className={s.Search} onTouchStart={openSearchBoard}>
            {/*<div className={s.SearchText}><Writer/></div>*/}
            <div className={s.SearchIcon}><img className={s.searchImg} src={searchIcon} alt="search"/></div>
        </div>
        {/*<Menu/>*/}
        <SearchBoard isVisible={isVisible} param={open} func={closeSearchBoard}/>
    </div>
  );
}

export default Main;

//($env:HTTPS = "true") -and (npm start)