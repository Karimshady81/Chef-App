import React, { useState } from "react"
import IngredientsList from "./Components/IngredientList"
import GetRecipe from "./Components/getRecipe"
import { getRecipeFromAi } from "./JS/Ai"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState("")

    async function getRecipe(){
        const recipeMarkDown = await getRecipeFromAi(ingredients)
        setRecipeShown(recipeMarkDown)
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
 
    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="e.g Tomatos" 
                    aria-label="Add Ingredient" 
                    name="ingredient"
                    required
                />
                <button>Add Ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientsList ingredients={ingredients} toggle={getRecipe}/>
            }

            {recipeShown && <GetRecipe recipe={recipeShown}/>}

        </main>
    )
}