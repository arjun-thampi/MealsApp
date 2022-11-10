import React from "react";

function SpecialDishes(props) {
  // console.log("props are ", props);

  let specialMenus = props.specialMenu.map((menuItem) => {
    return (
      <li>
        <img className="br-10" src={menuItem.strMealThumb} />
        <h4> {menuItem.strMeal}</h4>
      </li>
    );
  });
  return (
    <div className="specail-dishes">
      <div className="container">
        <section className="special-dishes-content text-center">
          <h2> Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos
            soluta culpa asperiores recusandae fugit, nihil ducimus. Facilis
            mollitia corporis cum itaque illum provident voluptatum!
          </p>
          <div className="special-dishes-list">
            <ul className="flex flex-wrap gap-30">
              {specialMenus}
              {specialMenus}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SpecialDishes;
