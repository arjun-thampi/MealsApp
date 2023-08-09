import React, { useState, useEffect } from "react";
import FilteredDishes from "./FilteredDishes";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";

function Menus() {
  let [menu, setMenu] = useState([]);
  let [menuCategory, setMenuCategory] = useState([]);
  //console.log(menuCategory);

  const dataFetchMenu = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    let response = await fetch(API_URL);
    let data = await response.json();

    setMenu(data.meals);
  };
  const dataFetchCategory = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let category_data = await response.json();

    setMenuCategory(category_data.categories);
  };

  useEffect(() => {
    dataFetchMenu();
    dataFetchCategory();
  }, []);

  let menuImages = menu.map((item) => {
    //console.log(item.strMealThumb);
    return <img src={item.strMealThumb} />;
  });

  return (
    <div>
      <Hero />
      <SpecialDishes specialMenu={menu} />
      <FilteredDishes allMenuCategories={menuCategory} allMenus={menu} />
    </div>
  );
}

export default Menus;
