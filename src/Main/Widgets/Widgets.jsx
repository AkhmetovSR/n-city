// import s from "./Widgets.module.css";
// import w1 from "../../resource/Mask.webp";
// import w2 from "../../resource/Group 22.png";
// import w3 from "../../resource/Group 23.png";
// import w4 from "../../resource/Group 24.png";
// import w5 from "../../resource/Group 25.png";
// import w6 from "../../resource/Group 26.png";
//
//
// function Widgets() {
//     const widgets = [
//         {id: 1, text: "Афиша", img: w1},
//         {id: 2, text: "widget2", img: w2},
//         {id: 3, text: "widget3", img: w3},
//         {id: 4, text: "widget4", img: w4},
//         {id: 5, text: "widget5", img: w5},
//         {id: 6, text: "widget6", img: w6},
//     ]
//     const wdg = widgets.map(widget =>
//         <div key={widget.id} className={s.Widgets}>
//             <div className={s.Widget}>
//                 <img className={s.WdgImage} src={widget.img} alt="widget"/>
//                 <div className={s.Footer}>{widget.text}</div>
//             </div>
//         </div>
//     )
//     return (
//         <div className={s.WidgetBoard}>
//             {wdg}
//         </div>
//     );
// }
//
// export default Widgets;
