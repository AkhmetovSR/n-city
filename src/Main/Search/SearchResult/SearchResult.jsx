import s from "./SearchResult.module.css";
import {useState} from "react";
import {motion} from "framer-motion";

export default function SearchResult(props) {
    const wordList = [
        {id: 1, word: "Автосервис", link: ""},
        {id: 2, word: "авторизация", link: ""},
        {id: 3, word: "Клининг", link: ""},
        {id: 4, word: "Магазин", link: ""},
        {id: 5, word: "автодром", link: ""},
        {id: 6, word: "автомобиль", link: ""},
        {id: 7, word: "автомобиль", link: ""},
        {id: 8, word: "автомобиль", link: ""},
        {id: 9, word: "автомобиль", link: ""},
        {id: 10, word: "автомобиль", link: ""},
        {id: 12, word: "автомобиль", link: ""},
        {id: 13, word: "автомобиль", link: ""},
        {id: 14, word: "автомобиль", link: ""},
        {id: 15, word: "автомобиль", link: ""},
    ];

    const filteredSearch = wordList.filter(word => {
        return word.word.toLowerCase().includes(props.symbol.toLowerCase())
    })

    const [scale, setScale] = useState(1);
    function toScale(){
        setScale(0.6)
    }

    const finder = filteredSearch.map(word =>
        <motion.div key={word.id} id={word.id} className={s.Find} animate={{scale:scale}} onClick={toScale}>{word.word}</motion.div>
    )
    return (
        <motion.div className={s.SearchResult}>
            {finder}
        </motion.div>
    );
}
