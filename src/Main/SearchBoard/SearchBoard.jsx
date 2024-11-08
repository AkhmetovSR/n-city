import s from  "./SearchBoard.module.css";
import {motion} from "framer-motion";
import { inView } from "framer-motion"
import {useState} from "react";

function SearchBoard(props) {
    const element = document.getElementById("search");
    inView(element, () => {
        if (props.display === "block"){
            setTimeout(() => {element.focus()}, 110)
        }
    });

    // 1. Сначала подгружаем массив слов
    // 2. Дальше нужно идти по каждой строке, делить ее на массив и сравнивать букву с буквой слова (при этом вторая введенная буква должна начинать
    // сравнивать со второго символа и т.д.)
    // 3. После равенства сразу рендерить подходящие слова внизу поиска

    const wordList = [
        {id: 1, word: "Автосервис", link: ""},
        // {id: 2, word: "авторизация", link: ""},
        // {id: 3, word: "автоэмаль", link: ""},
        // {id: 4, word: "автоцарапина", link: ""},
        // {id: 5, word: "автодром", link: ""},
        // {id: 6, word: "автомобиль", link: ""},
    ];

    const [symbols, setSymbols] = useState("");
    function search(){
        // const [wordSplit, setWordSplit] = useState("")
        setSymbols(element.value.toLowerCase())
        // alert(element.value.toLowerCase())
        wordList.forEach((word) =>{
            word.word.startsWith(symbols.toLowerCase(), 1)?alert("yes"):alert("no")
            // alert(wrd[0])
        })
    }
    // const finder = wordList.map(word =>
    //     // <div className={s.Find} key={word.id}>{(word.word.toString()).startsWith() ? word:""}</div>
    //     // <div>asd</div>
    // )


    return (
        <motion.div className={s.SearchBoard}
                    initial={{display: props.display, scale: props.scale - 0.2}}
                    animate={{display: props.display, scale: props.scale + 0.2}}
                    transition={{duration: 0.1}}>
            <div className={s.Close} onClick={props.func}></div>
            <input id="search" onInput={search} type="text" className={s.SearchLine}/>
            {/*{finder}*/}
        </motion.div>
    );
}

export default SearchBoard;

//animate={props.isVisible? show : hide}
// const show = {
//     opacity: 1,
//     display: "block"
// };
//
// const hide = {
//     opacity: 0,
//     transitionEnd: {
//         display: "none"
//     }
// };

// words.map(wrd=> {
//         // alert(wrd.word.toLowerCase());
//
//     }
// )