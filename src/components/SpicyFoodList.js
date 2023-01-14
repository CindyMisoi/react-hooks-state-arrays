import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
    console.log(newFood);
  }

   function handleClick(id){
    //remove using filter
    // const newFoodArray = [1,2,3].filter((number)=> number.id !== 3)

    //update using map
    const newFoodArray = foods.map((food)=>{
      if(food.id === id){
        return{
          ...food,
          heatLevel: food.heatLevel + 1
        }
      }
      else{
        return food;
      }
    })
    setFoods(newFoodArray)
   }
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=>{handleClick(food.id)}}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
