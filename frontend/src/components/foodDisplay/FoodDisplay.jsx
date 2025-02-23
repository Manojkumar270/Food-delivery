import React, { useContext, useEffect } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../Fooditem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top dishes near You</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category == item.category) {
              console.log(item.category);

              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
