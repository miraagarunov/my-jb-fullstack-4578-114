// מאחתל אחסון קודם,מילוי הפרטים ששמרנו לפני כן בדפדפן
// localStorage.clear('picCountText')

function collectData() {
    const animalType = document.getElementById('animalType').value
    const animalName = document.getElementById('animalName').value
    const animalAge = document.getElementById('animalAge').value
    const imageUrl = document.getElementById('imageUrl').value

    return {
        animalType: animalType,
        animalName: animalName,
        animalAge: animalAge,
        imageUrl: imageUrl
    }
}


function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.animalType} </td>
            <td>${data.animalName} </td>
            <td>${data.animalAge} </td>
            <td><img src="${data.imageUrl}" class="color-cell" /></td>
        </tr>    
    `
    return newHTML
}


function renderHTML(newHTML) {
    const animalContainer = document.getElementById('animalContainer')
    animalContainer.innerHTML += newHTML
}


function clearForm() {
    const animalForm = document.getElementById('animalForm')
    animalForm.reset()

    const typeInput = document.getElementById('animalType')
    typeInput.focus()
}

//לא צלח לי storage
// function saveSingleToStorage(animalObject) {
//     const currentInStorageJSON = localStorage.getItem('animals')

//     let animalsArray;
//     if (!currentInStorageJSON) {
//         animalsArray = []
//     } else {
//         animalsArray = JSON.parse(currentInStorageJSON)
//     }
    
//     animalsArray.push(animalObject)
//     localStorage.setItem('animals', JSON.stringify(animalsArray))
// }

function addToTable(event) {
    event.preventDefault()
    const data = collectData()
    const htmlTableRow = generateHTML(data)
    // saveSingleToStorage(data)
    renderHTML(htmlTableRow)
    clearForm()
    // animalCounter()
    
}
//לא צלח לי storage
// function loadFromLocalStorage() {
//     const animalsJSON = localStorage.getItem('animals')
//     if(animalsJSON) {
//         const animals = JSON.parse(animalsJSON)
//         for(const animal of animals) {
//             const newHTML = generateHTML(animal)
//             renderHTML(newHTML)
//         }
//     }
// }
// loadFromLocalStorage()

//מספר החיפושים
// function animalCounter(){
//     animalCounter++
//     document.getElementById('animalCounter').innerHTML = animalCounter
// }

// let animalCounter = 0;
