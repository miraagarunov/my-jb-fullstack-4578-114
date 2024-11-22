const arr = [];
function collectData() {
  const colorName = document.getElementById('colorName').value;
  return colorName;
}

function countingColors(data) {
  arr.push(data);
  console.log(arr);
  return arr;
}

function renderHTML(data, arr) {
  const tableBody = document.getElementById('tableBody');
  const countingDiv = document.getElementById('countingDiv');
  tableBody.innerHTML += `
  <tr>
  <td>${data}</td>
  <td style="background-color: ${data}"></td>
  </tr>
  `;

  countingDiv.innerHTML = arr.length;
}

function doAll(event) {
  event.preventDefault();
  const data = collectData();
  const arr = countingColors(data);
  renderHTML(data, arr);
}