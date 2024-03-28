import React,{useState} from 'react'
import './style.css'
import Menu from './MenuAPI' 
import MenuCard from './MenuCard'
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(Menu.map((curEle)=>{
  return curEle.category;}
  )),
  'All'
];

  console.log(uniqueList);

const Restaurant = () => {
   const[menuData,setMenuData]= useState(Menu)
   const[menuList,setMenuList]= useState(uniqueList)

   const filterItem = (category) =>{

    if(category==='All'){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currentElement)=>{
      return currentElement.category===category;
    });
    setMenuData(updatedList);
   }
 

  return (
    <div>
      <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
    </div>
  )
}

export default Restaurant