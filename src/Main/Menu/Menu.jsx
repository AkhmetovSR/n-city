import s from "./Menu.module.css";
import Home from "../../resource/Home.png";
import List from "../../resource/List.png";
import Category from "../../resource/Category.png";
import Heart from "../../resource/Heart.png";
import Support from "../../resource/Support.png";
import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";

function Menu() {
    const section = [
        {id: 1, img: Home, text: "Главная", link: "/"},
        {id: 2, img: List, text: "Список", link: "/category"},
        {id: 3, img: Category, text: "Категории", link: "/c"},
        {id: 4, img: Heart, text: "Избранное", link: "/ca"},
        {id: 5, img: Support, text: "Поддержка", link: "/cat"}
    ]
    function vibration(){
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10)
        }
    }
    const Sections = section.map(section =>
            <NavLink key={section.id} to={section.link} onClick={vibration} className={s.Option}>
                <motion.div whileTap={{scale: 1.4}} className={s.OptionImg}><img className={s.Img} src={section.img} alt="section"/></motion.div>
                <motion.div className={s.OptionText}>{section.text}</motion.div>
            </NavLink>
    )
    return (
        <div className={s.Menu}>
            <div className={s.Options}>
                {Sections}
            </div>
        </div>
    );
}
export default Menu;
