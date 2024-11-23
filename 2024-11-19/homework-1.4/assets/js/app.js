// מאחתל אחסון קודם,מילוי הפרטים ששמרנו לפני כן בדפדפן
// localStorage.clear('grades');
// localStorage.clear('average')

function collectData() {
    const picName = document.getElementById('picName').value
    const imageUrl = document.getElementById('imageUrl').value

    return {
        picName: picName,
        imageUrl: imageUrl
    }
}


function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.picName} </td>
            <td><img src="${data.imageUrl}" class="color-cell" /></td>

        </tr>    
    `
    return newHTML
}


function renderHTML(newHTML) {
    const picContainer = document.getElementById('picContainer')
    picContainer.innerHTML += newHTML
}


function clearForm() {
    const picForm = document.getElementById('picForm')
    picForm.reset()

    const picInput = document.getElementById('picName')
    picInput.focus()
}


function addColorToTable(event) {
    event.preventDefault()
    const data = collectData()
    const htmlTableRow = generateHTML(data)
    renderHTML(htmlTableRow)
    clearForm()
    picCounter()
    
}

function picCounter(){
    picCountText++
    document.getElementById('picCountText').innerHTML = picCountText
}

let picCountText = 0;
