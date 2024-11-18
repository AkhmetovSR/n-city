import s from  "./Main.module.css";
import searchIcon from "../resource/searchIcon.webp";
import Sun from "../resource/sun.webp";
import Writer from "./Writer/Writer.jsx";
import Menu from "./Menu/Menu.jsx";
import SearchBoard from "./SearchBoard/SearchBoard.jsx";
import Widget from "./Widget/Widget.jsx";
import Carousel from "./Carousel/Carousel.jsx"
import {useState} from "react";
import { motion, useTime, useTransform } from "framer-motion";

function Main() {
    //------------------------------------------Вращение солнышка--------------------------------------------------------------
    const time = useTime();
    const rotate = useTransform(time, [0, 15000], [0, 760], { clamp: false });

    //-------------------------------------------------------------------------------------------------------------------------
    const [scale, setScale] = useState(1);
    const [display, setDisplay] = useState("none");
    function openSearchBoard(){
        setScale(0.8);
        setDisplay("block")
    }
    function closeSearchBoard(){
        setScale(1);
        setDisplay("none")
    }

  return (
      <div className={s.M}>
          <motion.div className={s.Main} animate={{scale: scale}} transition={{ type: "spring", bounce: 0, duration: 0.1 }}>
              <Carousel/>
              <div className={s.TitleAll}>
                  <div className={s.TitleCity}>НЯГАНЬ</div>
                  <div className={s.SearchAll}>#НАЙДЕТСЯВСЕ</div>
              </div>
              <motion.div className={s.Sun} style={{rotate}}><img className={s.sunImg} src={Sun} alt="sun" onClick={closeSearchBoard}/></motion.div>
              <div className={s.Search} onTouchStart={openSearchBoard}>
                  <div className={s.SearchText}><Writer/></div>
                  <div className={s.SearchIcon}><img className={s.searchImg} src={searchIcon} alt="search"/></div>
              </div>
              <Widget/>
              <Menu/>
          </motion.div>
          <SearchBoard display={display} scale={scale} func={closeSearchBoard}/>
      </div>
  );
}
export default Main;

//($env:HTTPS = "true") -and (npm start)

// const [isVisible, setIsVisible] = useState(false);
// setIsVisible(!isVisible);
// setIsVisible(!isVisible);