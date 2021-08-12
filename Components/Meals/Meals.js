import MealsSummary from "./MealsSummary";
import React,{Fragment} from "react";
import AvailableMeals from "./AvailableMeals";


const Meals =()=>{
  return <Fragment>
    <MealsSummary/>
   <AvailableMeals/>
  </Fragment>
};
export default Meals;