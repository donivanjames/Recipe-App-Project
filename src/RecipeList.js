import React from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeMap from "./RecipeMap"

//Creates the entire table
function RecipeList(prop) {

  return (
    <div className="recipe-list">
      <form name="create">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <RecipeMap newProp={prop} />
          <RecipeCreate newProp={prop} />
        </tbody>

      </table>
      </form>
    </div>
  );
}

export default RecipeList;
