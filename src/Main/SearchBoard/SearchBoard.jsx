import s from  "./SearchBoard.module.css";
import {motion} from "framer-motion";
import { inView } from "framer-motion"
import {useState} from "react";

function SearchBoard(props) {
    const searchLine = document.getElementById("search");
    inView(searchLine, () => {
        if (props.display === "block"){
            setTimeout(() => {searchLine.focus()}, 110)
        }
    });

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

    const [symbol, setSymbol] = useState('');
    const filteredSearch = wordList.filter(word => {
        return word.word.toLowerCase().includes(symbol.toLowerCase())
    })
    const finder = filteredSearch.map(word =>
            <motion.div key={word.id} className={s.Find} animate={{scale:1}}>{word.word}</motion.div>
    )

    return (
        <motion.div className={s.SearchBoard}
                    initial={{display: props.display, scale: props.scale - 0.2}}
                    animate={{display: props.display, scale: props.scale + 0.2}}
                    transition={{duration: 0.1}}>
            <div className={s.Close} onClick={props.func}></div>

            <div className={s.divSearchLine}>
                <input className={s.SearchLine} id="search" onInput={(inputSymbol) => setSymbol(inputSymbol.target.value)} type="text" placeholder="Введите запрос"/>
            </div>
            <div className={s.divSearchResults}>
                <div className={s.searchResults}>{finder}</div>
            </div>
        </motion.div>
    );
}

export default SearchBoard;