function collectData() {
    const ingredientName = document.getElementById('ingredientName').value
    const amountVolume = document.getElementById('amountVolume').value

    
    if (ingredientName === "" || amountVolume === "" || amountVolume <= 0) {
   alert("the amount needs to be positive number");
   return;
    }
    return{
        ingredientName: ingredientName,
        amountVolume: amountVolume
    }
}


function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.ingredientName}</td>
            <td>${data.amountVolume}</td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const ingredientContainer = document.getElementById('ingredientContainer')
    ingredientContainer.innerHTML += newHTML
}

function clearForm() {

    const ingredientForm = document.getElementById('ingredientForm')
    ingredientForm.reset()

    const ingredientNameInput = document.getElementById('ingredientName')
    ingredientNameInput.focus()
}

function saveSingleToStorage(ingredientObject) {
    const currentIngredientsInStorageJSON = localStorage.getItem('ingredients')

    let ingredientsArray;
    if (!currentIngredientsInStorageJSON) {
        ingredientsArray = []
    } else {
        ingredientsArray = JSON.parse(currentIngredientsInStorageJSON)
    }
    
    ingredientsArray.push(ingredientObject)
    localStorage.setItem('ingredients', JSON.stringify(ingredientsArray))
}

function addIngredientToTable(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveSingleToStorage(data)
    renderHTML(newHTML)
    clearForm()
}

function loadCarsFromLocalStorage() {
    const ingredientJSON = localStorage.getItem('ingredients')
    if(ingredientJSON) {
        const ingredient = JSON.parse(ingredientJSON)
        for(const ingredient of ingredients) {
            const newHTML = generateHTML(ingredient)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromLocalStorage()