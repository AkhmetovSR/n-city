import s from "./Search.module.css";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";
import {inView, motion} from "framer-motion";
import {useState} from "react";

export default function Search() {
    const searchLine = document.getElementById("search");
    inView(searchLine, () => {
        // if (props.ioSearch === "open"){
        //     setTimeout(() => {searchLine.focus()}, 2000)
            setTimeout(() => {searchLine.click()}, 10000)
        // }
        alert("видно")
        // searchLine.focus()
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
    const [num, setNum] = useState(0)
    const [symbol, setSymbol] = useState('');
    const filteredSearch = wordList.filter(word => {
        return word.word.toLowerCase().includes(symbol.toLowerCase())
    })

    function openClick(elem){
        setNum(Number(elem.target.id))
    }
    const finder = filteredSearch.map(word =>
        <motion.div key={word.id} id={word.id} className={s.Find} onClick={openClick} animate={num === word.id ? {width: 300, zIndex:1, height: 500, position: "fixed", top: 0} : {scale:1, zIndex:0, position: "relative"}}>{word.word}</motion.div>
    )

    return (
        <motion.div className={s.Search} initial={{opacity:0}} animate={{opacity:100}}>
            <NavLink to="/" className={s.Close}></NavLink>
            <div className={s.divSearchLine}>
                <input className={s.SearchLine} id="search" onInput={(inputSymbol) => setSymbol(inputSymbol.target.value)} type="text" placeholder="Введите запрос"/>
            </div>
            <div className={s.divSearchResults}>
                <div className={s.searchResults}>{finder}</div>
            </div>
        </motion.div>
    );
}