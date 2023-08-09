import React, { useState } from "react";
import Pagination from "./Pagination";

function FilteredDishes({ allMenus, allMenuCategories }) {
  //console.log(props.allMenus);

  let [filteredDishes, SetFilteredDishes] = useState([]);
  let [activeDish, SetActiveDish] = useState();
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  //console.log("fullmen", props.allMenus);
  //console.log("allmen", allMenus);

  function showFilteredDishesHandler(category) {
    SetActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <li>
            <img src={item.strMealThumb} />
            <h5>{item.strMeal}</h5>
          </li>
        );
      });
    SetFilteredDishes(filteredDishesAre);
    // console.log(filteredDishesAre);
  }

  let allCategories = allMenuCategories.map((item) => {
    return (
      <li
        className={item.strCategory == activeDish ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  return (
    <div className="filtred-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose Your Dishes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            similique quod dolorum accusamus alias odio eos veniam, odit
            voluptatum laborum.
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {filteredDishes.length <= 0 ? (
              <h3>Keep waiting....</h3>
            ) : (
              filteredDishes
            )}
          </ul>
        </div>
        <Pagination filteredDishes={filteredDishes}></Pagination>
      </div>
    </div>
  );
}

export default FilteredDishes;
