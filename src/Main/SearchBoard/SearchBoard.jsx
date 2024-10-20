import s from  "./SearchBoard.module.css";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {isVisible} from "@testing-library/user-event/dist/utils";
import { useAnimate, useInView } from "framer-motion";
import { inView } from "framer-motion"

function SearchBoard(props) {
    const element = document.getElementById("search")
    inView(element, () => {
        if (props.display === "block"){
            setTimeout(() => {element.focus()}, 110)
        }
    })

    return (
        <motion.div className={s.SearchBoard}
                    initial={{display: props.display, scale: props.scale - 0.2}}
                    animate={{display: props.display, scale: props.scale + 0.2}}
                    transition={{duration: 0.1}}>
            <div className={s.Close} onClick={props.func}></div>
            <input id="search" className={s.SearchLine}/>
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