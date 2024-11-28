import s from "./SearchResult.module.css";
import {useState} from "react";
import {motion, AnimatePresence, LayoutGroup} from "framer-motion";

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
        {id: 16, word: "автомобиль", link: ""},
        {id: 17, word: "автомобиль", link: ""},
        {id: 18, word: "автомобиль", link: ""},
        {id: 19, word: "автомобиль", link: ""},
    ];

    const cards = wordList.filter(word => {
        return word.word.toLowerCase().includes(props.symbol.toLowerCase())
    })

    const [index, setIndex] = useState(false);
    function closeCard(){setIndex(false)}

    function Cards({cards, setIndex}) {
        return (
            <div className={s.mainDivCard}>
                {cards.map((card, i) => (
                    <div key={card.id} className={s.divWord}>
                        <motion.div transition={{duration: 0.3, ease: "easeInOut"}} onClick={() => {setIndex(i)}} layoutId={card.id} className={s.Word}>
                            <motion.div className={s.Name}>{card.word}</motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>
        );
    }

    function ModalCard({ index, cards }) {
        return (
            /* Container */  // Раскрывающаяся карточка
            <motion.div id={cards[index].id} className={s.OpenCard} style={{position: "fixed", top: "50%", transform: "translate(-50%, -50%)", left: "50%", display: "flex", width: "fit-content", height: "fit-content", justifyContent: "center", justifySelf: "center", alignContent: "center"}}>
                {/* Card */}
                <motion.div transition={{type: "spring", stiffness: 200, damping: 20, duration: 0.3, ease: "easeInOut"}} layoutId={cards[index].id} className={s.LayoutID}>
                    {index !== false && (
                        <motion.div exit={{ opacity: 0 }} transition={{duration: 0.3, ease: "easeInOut",}}>
                            <div className={s.ColseCard} onClick={closeCard}>Закрыть</div>
                            <div className={s.Title}>{cards[index].word}</div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        );
    }


    return (
        <>
            {/*<div*/}
            {/*    // style={{*/}
            {/*    //     height: "100vh",*/}
            {/*    // }}*/}
            {/*    // className={`flex h-full justify-center content-center bg-black`}*/}
            {/*    className={s.Cards}*/}
            {/*>*/}
                <LayoutGroup>
                    <AnimatePresence>
                        <Cards index={index} setIndex={setIndex} cards={cards} />
                        {index !== false && (<motion.div className={s.Back} initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} exit={{opacity:0}} transition={{ duration: 0.3, ease: "easeInOut" }} key="overlay" onClick={() => {setIndex(false);}}/>)}
                        {index !== false && (<ModalCard key="singlecard" index={index} cards={cards} setIndex={setIndex}/>)}
                    </AnimatePresence>
                </LayoutGroup>
            {/*</div>*/}
        </>
    );
}












// const finder = filteredSearch.map(word =>
//     <motion.div key={word.id} id={word.id} className={s.Find} initial={{scale: 1.2, opacity: 0}}
//                 animate={{scale: 1, opacity: 1}} exit={{scale: 1.2, opacity: 0}}
//                 transition={{duration: 0.1}}>{word.word}</motion.div>
// )