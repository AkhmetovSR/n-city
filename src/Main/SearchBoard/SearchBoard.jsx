import s from  "./SearchBoard.module.css";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {isVisible} from "@testing-library/user-event/dist/utils";
import { useAnimate, useInView } from "framer-motion";
import { inView } from "framer-motion"

function SearchBoard(props) {
    const element = document.getElementById("ss")
    inView(element, () => {
        // alert("..")
        document.getElementById("search").click()
    })

    const show = {
        opacity: 1,
        display: "block"
    };

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };
    return (
        <motion.div className={s.SearchBoard} initial={{y:1000}} animate={{y: props.param}} transition={{duration: 0.1}}>
            <div><button onClick={props.func}></button></div>
            <input id="search" className={s.SearchLine}/>
        </motion.div>
    );
}

export default SearchBoard;

//animate={props.isVisible? show : hide}