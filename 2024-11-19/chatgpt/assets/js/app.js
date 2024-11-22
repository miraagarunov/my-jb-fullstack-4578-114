let colors = []; // מערך לאחסון הצבעים

function addColor() {
    // קבלת שם הצבע מהשדה
    const colorName = document.getElementById('colorName').value.trim();

    // ולידציה: האם השדה לא ריק והאם שם הצבע בגודל תקני (3 עד 20 תווים)
    if (colorName === "" || colorName.length < 3 || colorName.length > 20) {
        alert("שם הצבע חייב להיות בין 3 ל-20 תווים.");
        return;
    }

    // הוספת הצבע למערך
    colors.push(colorName);

    // יצירת שורה חדשה לטבלה
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${colorName}</td><td class="color-cell" style="background-color:${colorName};"></td>`;
    document.getElementById('colorTable').appendChild(tableRow);

    // עדכון מספר הצבעים בטבלה
    updateColorCount();

    // אפס את שדה שם הצבע
    document.getElementById('colorName').value = "";
}

function updateColorCount() {
    document.getElementById('colorCountText').innerText = `מספר הצבעים בטבלה: ${colors.length}`;
}
