import s from  "./Main.module.css";
import searchIcon from "../resource/searchIcon.webp";
import Writer from "./Writer/Writer.jsx";
import Menu from "./Menu/Menu.jsx";

function Main() {
  return (
    <div className={s.Main}>
        <div className={s.Search}>
            <div className={s.SearchText}><Writer/></div>
            <div className={s.SearchIcon}><img className={s.searchImg} src={searchIcon}/></div>
        </div>
        <Menu/>
    </div>
  );
}

export default Main;
