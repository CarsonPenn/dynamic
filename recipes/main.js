import recipes from './recipes.mjs';
console.log(getRandomListEntry(recipes));

// random num
function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Recipe template - was having a hard time getting all the correct things to load in, chatgpt taught me this revised version.
function recipeTemplate(recipe) {
    return `<figure id="recipe-container">
        <img class="recipe-img" src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="border">
                ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe-stats">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe-description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

// rate
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

// Render recipes
function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipe-container');
    if (!outputElement) {
        console.error("Recipe container not found.");
        return;
    }

    const recipeHTML = recipeList.map(recipeTemplate).join('');
    outputElement.innerHTML = recipeHTML;
}

// Initialize
function init() {
    const recipe = getRandomListEntry(recipes);
    console.log(recipe);  // Log the random recipe to ensure it's being selected

    renderRecipes([recipe]);
}

// dom event listener
document.addEventListener('DOMContentLoaded', function () {
    init();
});

// used guide and chatgpt to help figure this out
function filterRecipes(query) {
    
    const filtered = recipes.filter(recipe => {
        
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
               recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
    });
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    return sorted;
}


function searchHandler(e) {
    e.preventDefault(); 
    const query = document.querySelector('.nav-search input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);

    renderRecipes(filteredRecipes);
}


document.querySelector('.nav-search button').addEventListener('click', searchHandler);
