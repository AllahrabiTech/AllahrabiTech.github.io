let userName

let MainStart = function () {
    constructormenu()
    runContentMenu()
    constrctorMoveImage()
    moveImgPortofilo(0, ["1.1.png", "1.2.png", "1.3.png"])
    moveImgPortofilo(1, ["2.1.png", "2.2.png", "2.3.png"])
    multymoveImage1()
    multymoveImage2()
    checkNumber()
}

let multymoveImage2 = function () {
    let divId = document.getElementById("multymoveImage2")
    let firstLeft = divId.getBoundingClientRect().left

    let startmove = function () {
        divId.style.left = window.innerWidth / 6
        divId.style.top = -divId.getBoundingClientRect().height + 30 + "px"

        let intervalID1 = setTimeout(function () {
            divId.style.top = window.innerHeight - divId.getBoundingClientRect().height + 40 + "px"
            clearInterval(intervalID1)
        }, 4000)
        let intervalID2 = setTimeout(function () {
            divId.style.left = -firstLeft - 20 + "px"
            divId.style.top = window.innerHeight / 3
            clearInterval(intervalID2)
        }, 8000)
    }
    startmove()
    setInterval(startmove, 12000)

}

var multymoveImage1 = function () {
    let divId = document.getElementById("multymoveImage1")
    let firstLeft = divId.getBoundingClientRect().left
    let startmove = function () {
        divId.style.left = window.innerWidth / 3
        divId.style.top = -divId.getBoundingClientRect().height - 15 + "px"
        let intervalID1 = setTimeout(function () {
            divId.style.left = window.innerWidth - divId.getBoundingClientRect().width + "px"
            divId.style.top = window.innerHeight / 2
            clearInterval(intervalID1)
        }, 3000)
        let intervalID2 = setTimeout(function () {
            divId.style.left = window.innerWidth / 3
            divId.style.top = window.innerHeight + "px"
            clearInterval(intervalID2)
        }, 6000)
        let intervalID3 = setTimeout(function () {
            divId.style.left = -firstLeft + "px"
            divId.style.top = window.innerHeight / 3
            clearInterval(intervalID3)
        }, 9000)
    }
    startmove()
    setInterval(startmove, 12000)
}

let moveImgPortofilo = function (j, arrimgs) {
    // let indexslideshow = j
    // let imageSource = arrimgs
    let slideshow = document.getElementsByClassName("slideshow")
    let i = 1

    slideshow[j].childNodes[0].src = 'portofilo-image/' + arrimgs[0]
    slideshow[j].childNodes[0].className = slideshow[j].childNodes[0].className.replace("", "opacitydelay ")
    let timeoutID1 = setTimeout(function () {
        slideshow[j].childNodes[0].className = slideshow[j].childNodes[0].className.replace("opacitydelay", "")
        clearTimeout(timeoutID1)
    }, 1000)
    let intervalID2 = setInterval(function () {

        slideshow[j].childNodes[0].className = slideshow[j].childNodes[0].className.replace("", "opacitydelay")
        slideshow[j].childNodes[0].src = 'portofilo-image/' + arrimgs[i % 3]

        var timeoutID2 = setTimeout(function () {
            slideshow[j].childNodes[0].className = slideshow[j].childNodes[0].className.replace("opacitydelay", "")
            clearTimeout(timeoutID2)
        }, 3000)
        i++

    }, 6000)

}

let moveDivMenu = function () {
    let divsname = ["homediv", "contactdiv", "portofilodiv", "playmygamediv"]
    let divsID = []
    let linksname = ["homeID", "contactID", "portofiloID", "playmygameID"]
    let linksID = []
    for (let i = 0; i < divsname.length; i++) {
        divsID[i] = document.getElementById(divsname[i])
        divsID[i].style.display = "none"
    }
    let firstdiv = divsID[0]
    firstdiv.style.display = "block"

    for (let i = 0; i < linksname.length; i++) {
        linksID[i] = document.getElementById(linksname[i])
    }
    for (let j = 0; j < linksname.length; j++) {

        linksID[j].onclick = function (e) {
            e.stopPropagation()
            e.preventDefault()
            if (linksname[j] === "playmygameID") {
                setRandomNum()
            }
            for (let i = 0; i < divsname.length; i++) {

                if (divsID[i].style.display === "block") {
                    firstdiv = divsID[i]
                    break
                }
            }
            let seconddiv = divsID[linksID.indexOf(this)]
            let widthbrowser = window.innerWidth
            let rightwidthdiv = firstdiv.getBoundingClientRect().right
            let distoright = widthbrowser - rightwidthdiv
            firstdiv.style.left = rightwidthdiv + distoright + "px"
            seconddiv.style.transitionProperty = "left"
            seconddiv.style.transitionDuration = ".4s"
            seconddiv.style.left = -rightwidthdiv
            let intervalid = setInterval(function () {
                firstdiv.style.display = "none"
                seconddiv.style.display = "block"
                clearInterval(intervalid)
            }, 400)
            let intervalid2 = setInterval(function () {
                seconddiv.style.left = 0
                clearInterval(intervalid2)
            }, 500)
        }
    }
}

let constrctorMoveImage = function () {
    /*-------- first image ------------------ */
    let imageidfirst = document.getElementById("moveFirstImage")
    let rightwidthdiv = parseFloat(-imageidfirst.getBoundingClientRect().right)
    let widthbrowser = window.innerWidth
    let maxwidth = (widthbrowser + rightwidthdiv + 75)
    let vl = maxwidth
    document.documentElement.style.setProperty('--start', vl)
    setInterval(function () {
        vl = vl * (-1)
        document.documentElement.style.setProperty('--start', vl)
    }, 5000)
    /*-------- second image ------------ */
    let imageidsecond = document.getElementById("moveSecondImage")
    let rightwidthdiv2 = parseFloat(-imageidsecond.getBoundingClientRect().right)
    let widthbrowser2 = window.innerWidth
    let maxwidth2 = (widthbrowser2 + rightwidthdiv2 - 80)
    let vl2 = maxwidth2
    document.documentElement.style.setProperty('--last', vl2)
    setInterval(function () {
        vl2 = vl2 * (-1)
        document.documentElement.style.setProperty('--last', vl2)
    }, 5000)
}

let constructormenu = function () {
    let menulinks = document.getElementsByClassName("hvr-shutter-out-horizontal")
    for (let i of menulinks) {
        i.display = "inline-block"
        i.style.verticalAlign = "middle"
        i.transform = "perspective(1px) translateZ(0)"
        i.style.boxShadow = "0 0 1px rgba(0, 0, 0, 0)"
        i.style.position = "relative"
        i.style.transitionProperty = "color"
        i.style.transitionDuration = "0.3s"
    }
}

let changeColorborder = function () {
    let colors = ["rgba(128,1,1,0.91)", "rgba(255,242,0,0.91)", "rgba(39,255,0,0.91)", "rgba(16,0,228,0.91)"]
    let classborderlink = document.getElementsByClassName("borderlink")
    let borderNum = document.getElementById("randomnum")
    let randomColor = Math.floor(Math.random() * colors.length)
    document.documentElement.style.setProperty('--c', colors[randomColor])
    borderNum.style.borderColor = colors[randomColor]
    for (let i of classborderlink) {
        i.style.borderLeftColor = colors[randomColor]
        i.style.borderRightColor = colors[randomColor]
    }
}

let borderMenu = function () {
    let classborderlink = document.getElementsByClassName("borderlink")
    for (let i of classborderlink) {
        i.style.borderWidth = "4px"
        i.style.borderTopColor = "transparent"
        i.style.borderBottomColor = "transparent"
        i.style.borderStyle = "solid"
        i.style.color = "#e7f1e6"
    }
    setInterval(changeColorborder, 2000)
}

let borderRandom = function () {
    let borderNum = document.getElementById("randomnum")
    borderNum.style.borderWidth = "2.5px"
    borderNum.style.borderStyle = "outset"
    borderNum.style.borderColor = "transparent"
}

let runContentMenu = function () {
    borderRandom()
    borderMenu()
}

let setRandomNum = function () {
    let randomID = document.getElementById("randomnum")
    randomID.innerText = Math.floor(Math.random() * 9000 + 1000)
    checkNumber()
    validInput()
}

let validInput = function () {
    let inputID = document.getElementById("securitynum").valueOf()
    inputID.value = ""
    inputID.onkeydown = function (e) {
        if (isNaN(parseInt(String.fromCharCode(e.which))) && e.which !== 8 && e.which !== 37 && e.which !== 39) {
            e.preventDefault()
        } else {
            if (inputID.value.length === 4 && e.which !== 8 && e.which !== 37 && e.which !== 39) {
                e.preventDefault()
            }
        }
    }
}

let checkNumber = function () {

    let formID = document.getElementById("form")

    formID.setAttribute("disabled", "false")
    let usernameID = document.getElementById("username").valueOf()

    let randomID = document.getElementById("randomnum")

    let inputID = document.getElementById("securitynum").valueOf()

    let submitID = document.getElementById("submitbtn")
    usernameID.value = ""
    inputID.value = ""
    submitID.onclick = function (e) {
        userName = usernameID.value
        localStorage.setItem("username", userName)
        let randomNum = randomID.innerText
        let inputNum = inputID.value
        if (userName !== "" && userName !== " ") {
            document.getElementsByClassName("invalid-tooltip")[0].style.display = "none"
            document.getElementsByClassName("valid-tooltip")[0].style.display = "block"
            if (randomNum === inputNum) {
                document.getElementsByClassName("invalid-tooltip")[1].style.display = "none"
                formID.setAttribute("disabled", "false")
                formID.setAttribute("target", "_blank")
                formID.setAttribute("action", "Mygame.html")
                randomID.innerText = Math.floor(Math.random() * 9000 + 1000)
            } else {
                e.preventDefault()
                document.getElementsByClassName("invalid-tooltip")[1].style.display = "block"
            }
        } else {
            e.preventDefault()
            document.getElementsByClassName("invalid-tooltip")[0].style.display = "block"
            document.getElementsByClassName("valid-tooltip")[0].style.display = "none"
        }
    }
}

window.onload = function () {
    moveDivMenu()
    MainStart()
}