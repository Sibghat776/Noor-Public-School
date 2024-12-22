var mainDiv = document.querySelector(".main")
var count = 0
function previousHandler() {
    console.log("Me chal Raha hun previousHandler()")

}
function nextHandler() {
    console.log("Me chal Raha hun nextHandler()")
    console.log(mainDiv)
    mainDiv.style.backgroundImage = `url("./Images/Background Image three.jpg")`
    count++
}