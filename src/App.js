import React, { useState } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //Data to reset the form after submission
  const cleanFormState = { name: "", cuisine: "", photo: "", ingredients: "", preparation: "", }

  //Form data, auto-filled for testing purposes
  const [formData, setFormData] = useState({ 
    name: "Burger",
    cuisine: "American",
    photo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    ingredients: "BEEF, Bun, anything else you want.",
    preparation: "Put it all together.",
   })

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} formData={formData} setFormData={setFormData} cleanFormState={cleanFormState} />
    </div>
  );
}

export default App;
