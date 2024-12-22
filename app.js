var mainDiv = document.querySelector(".main")
var count = 0
function previousHandler() {
    console.log("Me chal Raha hun previousHandler()")

}
function nextHandler() {
    console.log("Me chal Raha hun nextHandler()")
    console.log(mainDiv)
    mainDiv.style.backgroundImage = `url("./Images/Background Image two.jpg")`
    for (i = 0; count < 1 ; i++) {
        mainDiv.style.backgroundImage = `url("./Images/Background Image three.jpg")`
        console.log(count)
        mainDiv.style.backgroundImage = `url("./Images/Background Image four.jpg")`
        count++
        break
    }
}