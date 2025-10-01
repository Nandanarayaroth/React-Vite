import { recipes } from "./Recipes";

function RecipeList() {

    return(
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => (
                <div key={recipe.id} className="mb-6">
                    <h2 className="text-xl font-semibold">{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map((ingredients, index) => (
                            <li key={index}>{ingredients}</li>

                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default RecipeList