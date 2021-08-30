let randomNumber
let times = 0
let rIndex = 1

let resetBtn = function () {
    let resetBtnID = document.getElementById("resetbtn")
    let acceptBtn = document.getElementById("acceptbtn")
    resetBtnID.onclick = function () {
        makeRandom()
        validguess()
        times = 0
        rIndex = 1
        acceptBtn.removeAttribute("disabled")
        let rowsClass = document.getElementsByTagName("tr")
        for (let i of rowsClass)
            if (i.className === "")
                i.className = i.className.replace("", "tr")
    }
}

let validguess = function () {
    let inputguessID = document.getElementById("guessnumber")
    inputguessID.value = ""
    inputguessID.onkeydown = function (e) {
        if (isNaN(parseInt(String.fromCharCode(e.which))) && e.which !== 8 && e.which !== 37 && e.which !== 39) {
            e.preventDefault()
        } else {
            if (inputguessID.value.length ===5 && e.which !== 8 && e.which !== 37 && e.which !== 39) {
                e.preventDefault()
            }
        }
    }
    acceptBtn()
}

let acceptBtn = function () {
    let acceptBtn = document.getElementById("acceptbtn")
    let rowsClass = document.getElementsByTagName("tr")
    let inputguessID = document.getElementById("guessnumber")
    let arrGuide = ["Hole", "Alone", "Pole", "triangle", "For", "Fingers", "Binary0110", "CR?", "VIII", "Ascii&# 57"]
    let guideIndex = 0

    acceptBtn.onclick = function (e) {
        if(inputguessID.value.length!==5){
            e.preventDefault()
            document.getElementsByClassName("invalid-tooltip")[0].style.display = "block"
        }
        else
        {
            document.getElementsByClassName("invalid-tooltip")[0].style.display = "none"
            let childIndex = 1
            rowsClass[rIndex].children[childIndex].innerHTML = inputguessID.value
            checkGuess(inputguessID.value)
            rowsClass[rIndex].className = rowsClass[rIndex].className.replace("tr", "")
            rIndex++
            times++
            if (times === 15) {
                acceptBtn.setAttribute("disabled", "true")
            }
        }
    }

    let checkGuess = function (number) {
        let j = 0
        for (let i = 0; i < randomNumber.length; i++) {
            if (number[i] === randomNumber[i]) {
                j++
            }
        }
        if (number === randomNumber) {
            rowsClass[rIndex].style.backgroundColor = "green"
            rowsClass[rIndex].children[3].innerHTML = j
            rowsClass[rIndex].children[2].innerHTML = "You win"
            acceptBtn.setAttribute("disabled", "true")
        } else {
            rowsClass[rIndex].children[3].innerHTML = j
            if (number < randomNumber) {
                guideIndex = Math.floor(Math.random() * 5)
                rowsClass[rIndex].children[2].innerHTML = "guess grater," + arrGuide[randomNumber[guideIndex]]
            } else {
                guideIndex = Math.floor(Math.random() * 5)
                rowsClass[rIndex].children[2].innerHTML = "guess lower," + arrGuide[randomNumber[guideIndex]]
            }
            if(times===14)
            {
                rowsClass[rIndex].style.backgroundColor = "red"
                rowsClass[rIndex].children[2].innerHTML = "True is:"+randomNumber
            }
        }

    }
}

let makeRandom = function () {
    randomNumber = Math.floor(Math.random() * 90000 + 10000).toString()
//    console.log(randomNumber)
}
// let changeColorborder = function () {
//     let colors = ["rgba(128,1,1,0.91)", "rgba(255,242,0,0.91)", "rgba(39,255,0,0.91)", "rgba(16,0,228,0.91)"]
//     let classborderlink = document.getElementsByClassName("borderlink")
//     let borderNum = document.getElementById("randomnum")
//     let randomColor = Math.floor(Math.random() * colors.length)
//     document.documentElement.style.setProperty('--c', colors[randomColor])
//     borderNum.style.borderColor = colors[randomColor]
//     for (let i of classborderlink) {
//         i.style.borderLeftColor = colors[randomColor]
//         i.style.borderRightColor = colors[randomColor]
//     }
// }
//
// let borderMenu = function () {
//     let classborderlink = document.getElementsByClassName("borderlink")
//     for (let i of classborderlink) {
//         i.style.borderWidth = "4px"
//         i.style.borderTopColor = "transparent"
//         i.style.borderBottomColor = "transparent"
//         i.style.borderStyle = "solid"
//         i.style.color = "black"
//     }
//     setInterval(changeColorborder, 2000)
// }
window.onload = function () {
    var playerID = document.getElementById("playername")
    playerID.innerText = localStorage.getItem("username")
    makeRandom()
    validguess()
    resetBtn()
    // borderMenu()
}
