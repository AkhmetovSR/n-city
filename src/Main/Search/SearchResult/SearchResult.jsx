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
    ];
    const [index, setIndex] = useState(false);

    const cards = wordList.filter(word => {
        return word.word.toLowerCase().includes(props.symbol.toLowerCase())
    })

    function Cards({cards, setIndex}) {
        return (
            <div className={s.mainDivCard}>
                {cards.map((card, i) => (
                    <div key={card.id} className={s.divWord}>
                        <motion.div transition={{duration: 0.3, ease: "easeInOut"}} onClick={() => {setIndex(i);}} layoutId={card.id} className={s.Word}>
                            {card.word}
                        </motion.div>
                    </div>
                ))}
            </div>
        );
    }

    function ModalCard({ index, cards }) {
        return (
            /* Container */
            <motion.div id={cards[index].id} // Раскрывающаяся карточка
                style={{
                    position: "fixed",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    justifyContent: "center",
                    justifySelf: "center",
                    alignContent: "center",
                }}
            >
                {/* Card */}
                <motion.div transition={{type: "spring", stiffness: 200, damping: 20, duration: 0.3, ease: "easeInOut"}} layoutId={cards[index].id} className={s.LayoutID}>
                    {index !== false && (
                        <motion.div exit={{ opacity: 0 }} transition={{duration: 0.3, ease: "easeInOut",}}>
                            {/*<p className={s.Title}>*/}
                                {cards[index].word}
                            {/*</p>*/}
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        );
    }

    // const finder = filteredSearch.map(word =>
    //     <motion.div key={word.id} id={word.id} className={s.Find} initial={{scale: 1.2, opacity: 0}}
    //                 animate={{scale: 1, opacity: 1}} exit={{scale: 1.2, opacity: 0}}
    //                 transition={{duration: 0.1}}>{word.word}</motion.div>
    // )
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
                        {index !== false && (
                            <motion.div
                                className={s.Back}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.8 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                // key="overlay"
                                style={{
                                    // backgroundColor: "rgba(16,16,16,0.45)",
                                    // width: "100vw",
                                    // height: "100vh",
                                    // position: "fixed",
                                }}
                                onClick={() => {
                                    setIndex(false);
                                }}
                            />
                        )}

                        {index !== false && (
                            <ModalCard
                                key="singlecard"
                                index={index}
                                cards={cards}
                                // setIndex={setIndex}
                            />
                        )}
                    </AnimatePresence>
                </LayoutGroup>
            {/*</div>*/}
        </>
    );
}
