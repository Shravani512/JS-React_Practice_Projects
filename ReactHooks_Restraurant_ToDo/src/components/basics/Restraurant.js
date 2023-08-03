import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'
import Navebar from './Navebar'
import logo from './lg.png'


const uniqueLst = [...new Set(Menu.map((currele) => {
    return currele.category;
})), "All"
]
// console.log(uniqueLst)


const Restraurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueLst);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currele) => {
            return currele.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            {/* <div className='head' id="hd">
                <div id="logo"><img src={logo} alt="LG" id="img" /></div>
                <p id="logo">🧋</p>
                🍴WELCOME TO FRESH FOOD CORNER🍴 */}
            {/* </div> */}
            <Navebar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}
export default Restraurant
