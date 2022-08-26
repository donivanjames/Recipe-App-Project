import React from "react";

//Handles Recipie Creation
function RecipeCreate({ newProp: { recipes, setRecipes, formData, setFormData, cleanFormState } }) {

  //Handle form changes
  const handleValueChange = ({ target }) => setFormData({...formData,[target.name]: target.value})

  //Handle submit button changes
  const submitHandler = (event) => {
    event.preventDefault()

    setRecipes([...recipes, formData]) //set form
    setFormData({ ...cleanFormState }) //reset form
  }

  return (
    <tr>
      <td><input name="name" type="name" value={formData.name} onChange={handleValueChange} /></td>
      <td><input name="cuisine" type="cuisine" value={formData.cuisine} onChange={handleValueChange} /></td>
      <td><input name="photo" type="photo" value={formData.photo} onChange={handleValueChange} /></td>
      <td><textarea name="ingredients" type="ingredients" value={formData.ingredients} onChange={handleValueChange} /></td>
      <td><textarea name="preparation" type="preparation" value={formData.preparation} onChange={handleValueChange} /></td>
      <td><button type="submit" onClick={submitHandler}>Create</button></td>
    </tr>
  );
}

export default RecipeCreate;
