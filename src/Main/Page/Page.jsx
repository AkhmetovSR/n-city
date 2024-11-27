import s from "./Page.module.css";
import {motion} from "framer-motion";

export default function Page() {

    return (
        <motion.div className={s.Page} initial={{scale:1.2, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:1.2, opacity:0}} transition={{duration:0.1}}>
            <div className={s.OrganizationCard}></div>
        </motion.div>
    );
}