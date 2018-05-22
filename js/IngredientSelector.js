/* exported IngredientSelectorDisplay */
/* globals Ingredient */

'use strict';

const ingredientSelectorTemplate = document.getElementById('ingredient-selector-template');

class IngredientSelectorDisplay {
    constructor(recipe) {
        this.recipe = recipe;
    }

    render() {
        const dom = ingredientSelectorTemplate.content;
        const recipeName = dom.getElementById('recipe-name');
        recipeName.textContent = this.recipe.name;


        //Find out how many ingredients the recipe specifies, and add them to arrayOf10Ingredients
        //Calculate how many more "dummy" ingredients are needed
        //Randomly select enough "dummy" ingredients and add them into arrayOf10Ingredients
        //Shuffle arrayOf10Ingredients

        
        const ingredientSelectorSection = dom.getElementById('ingredient');
        for(let i = 0; i < 10; i++) {
            const ingredientSelectorComponent = new Ingredient(arrayOf10Ingredients[i]);
            ingredientSelectorSection.appendChild(ingredientSelectorComponent.render());
        }

        return dom;
    }
}