import {Cursor, useTypewriter} from "react-simple-typewriter";
import React from "react";
import s from "./Writer.module.css"

function Writer () {
    const [text] = useTypewriter({
            words: ['Начните поиск здесь...', "Адвокаты...", "Салоны красоты...", "И многое другое..."],
            loop: 10,
            typeSpeed: 50,
            deleteSpeed: 20
        }
    );
    return (
        <div className={s.Writer}>
            <span className={s.HelloText}>{text}<Cursor cursorStyle="|"/></span>
        </div>
    )
}

export default Writer;