// מאחתל אחסון קודם,מילוי הפרטים ששמרנו לפני כן בדפדפן
// localStorage.clear('grades');
// localStorage.clear('average')

function collectData() {
    const colorName = document.getElementById('colorName').value
    return {
        colorName: colorName
    }
}


function generateHTML(colorData) {
    const newHTML = `
        <tr>
            <td>${colorData.colorName} </td>
            <td class="color-cell" style="background-color:${colorData.colorName};"></td>
        </tr>    
    `
    return newHTML
}


function renderHTML(newHTML) {
    const colorContainer = document.getElementById('colorContainer')
    colorContainer.innerHTML += newHTML
}


function clearForm() {
    const colorForm = document.getElementById('colorForm')
    colorForm.reset()

    const colorInput = document.getElementById('colorName')
    colorInput.focus()
}


function addColorToTable(event) {
    event.preventDefault()
    const colorData = collectData()
    const htmlTableRow = generateHTML(colorData)
    renderHTML(htmlTableRow)
    clearForm()
    colorCounter()
    
}

function colorCounter(){
    colorCountText++
    document.getElementById('colorCountText').innerHTML = colorCountText
}

let colorCountText = 0;
