import s from "./Menu.module.css";
import Home from "../../resource/Home.png";
import List from "../../resource/List.png";
import Category from "../../resource/Category.png";
import Heart from "../../resource/Heart.png";
import Support from "../../resource/Support.png";
import { motion } from "framer-motion";

function Menu() {
    const section = [
        {id: 1, img: Home, text: "Главная"},
        {id: 2, img: List, text: "Список"},
        {id: 3, img: Category, text: "Категории"},
        {id: 4, img: Heart, text: "Избранное"},
        {id: 5, img: Support, text: "Поддержка"}
    ]
    function vibration(){
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10)
        }
    }
    const Sections = section.map(section =>
        <motion.div key={section.id} className={s.Section}>
            <motion.div whileTap={{scale: 1.4}} onClick={vibration} className={s.OptionImg}><img className={s.Img} src={section.img} alt="section"/></motion.div>
            <motion.div className={s.OptionText}>{section.text}</motion.div>
        </motion.div>
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
