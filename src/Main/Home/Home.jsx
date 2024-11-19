import s from "./Home.module.css";
import {motion, useTime, useTransform} from "framer-motion";
import Carousel from "../Carousel/Carousel.jsx";
import Sun from "../../resource/sun.webp";
import Mountin from "../../resource/forest1.webp";
import Car from "../../resource/car.webp";
import {useState} from "react";
import Writer from "../Writer/Writer.jsx";
import searchIcon from "../../resource/searchIcon.webp";
import SearchBoard from "../SearchBoard/SearchBoard.jsx";

export default function Home() {
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
        <motion.div className={s.Home}>
            <div className={s.divSun}>
                <motion.div className={s.Sun} style={{rotate}}><img className={s.sunImg} src={Sun} alt="sun" onClick={closeSearchBoard}/></motion.div>
            </div>
            <div className={s.TitleAll}>
                <div className={s.Mountin}>
                    <img src={Mountin} className={s.mountinImg}/>
                    {/*<motion.div className={s.divCar} initial={{opacity:60}} animate={{x:150, opacity: 0}} transition={{duration:7, repeat: 10}}><img src={Car} className={s.Car}/></motion.div>*/}
                </div>
                <div className={s.TitleCity}>НЯГАНЬ</div>
                <div className={s.SearchAll}>#НАЙДЕТСЯВСЕ</div>
            </div>
            <div className={s.Carousel}>
                {/*<Carousel/>*/}
            </div>
            <div className={s.Search} onTouchStart={openSearchBoard}>
                <div className={s.SearchText}><Writer/></div>
                <div className={s.SearchIcon}><img className={s.searchImg} src={searchIcon} alt="search"/></div>
            </div>
            <SearchBoard display={display} scale={scale} func={closeSearchBoard}/>
        </motion.div>
    );
}
