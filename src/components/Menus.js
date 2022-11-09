import React, { useState, useEffect } from "react";

function Menus() {
  let [menu, setMenu] = useState([]);

  const dataFetch = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  let menuImages = menu.map((item) => {
    console.log(item.strMealThumb);
    return <img src={item.strMealThumb} />;
  });

  return (
    <div>
      <h1>Welcome</h1>
      {menuImages}
    </div>
  );
}

export default Menus;
