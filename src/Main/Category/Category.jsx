import s from "./Category.module.css";
import { motion } from "framer-motion";

export default function Category() {
    return (
        <motion.div className={s.Category} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
asdasd
        </motion.div>
    );
}
