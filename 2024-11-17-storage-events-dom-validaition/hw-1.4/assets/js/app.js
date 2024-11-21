function changeBackgroundColor() {

    const colors = ['red', 'green' , 'blue', 'yellow' , 'wheat', 'purple']

    const randomIndex = parseInt(Math.random() * colors.length)
   
    document.getElementsById(`myInput`).style.backgroundColor = colors[randomIndex]
}
