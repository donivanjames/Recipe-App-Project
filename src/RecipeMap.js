import React from "react";

//Returns a JSX list off all recipes to the Recipe List
function RecipeMap({ newProp: { recipes, setRecipes } }) {

    //Delete recipe on click
    function deleteRecipe(event, key){
        event.preventDefault()
        const filteredRecipes = recipes.filter(recipe => recipe.key != key)
        setRecipes(filteredRecipes)
    }

    return (
        recipes.map((recipe, index) => {
            recipe.key = index //add key to recipe for easy deletion

            return (
                <tr key={index}>
                    <td>{recipe.name}</td>
                    <td>{recipe.cuisine}</td>
                    <td><img className="contain" src={recipe.photo} alt="Food Pic" /></td>
                    <td className="content_td"><p>{recipe.ingredients}</p></td>
                    <td className="content_td"><p>{recipe.preparation}</p></td>
                    <td><button onClick={(event) => deleteRecipe(event, index)} name="delete">Delete</button></td>
                </tr>
            )
        })
    )
}

export default RecipeMap