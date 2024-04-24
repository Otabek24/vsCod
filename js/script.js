const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minutNum = document.querySelector('.minutes');


// console.log(new Date());
// new Date()  - komputerdagi hozirgi vaqtni ko'rsatadi
// getHours() - komputerdagi soatni olib beradi
// getMinutes() - komputerdagi minutni olib beradi
// getSeconds() - komputerdagi secundni olib beradi

function clock() {

    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();
    sec.style.transform = `rotate(${seconds * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);


    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
    minutNum.innerHTML = minutes < 10 ? '0' + minutes : minutes
}
clock()


const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', (e) => {
        e.preventDefault()
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }
        tabsContentItem[i].classList.add('active')
        tabsItem[i].classList.add('active')

    })
}
// Uy ish:
const btn = document.querySelector(".stopwatch__btn")
btn.addEventListener("click", () => {
    function button() {
        if (btn.innerHTML == "start") {
            btn.innerHTML = "STOP"
        } else if (btn.innerHTML == "STOP") {
            btn.innerHTML = "CLEAR"
        } else {
            btn.innerHTML = "start"
        }
    }
    button()
})

const btnSeconds = document.querySelector(".stopwatch__seconds")
const btnMinutes = document.querySelector(".stopwatch__minutes")
const btnHours = document.querySelector(".stopwatch__hours")
function buttonTime() {
    if (btn.innerHTML == "STOP") {
        btnSeconds.innerHTML++
    } else if (btn.innerHTML == "CLEAR") {
        btnSeconds.innerHTML = 100
        btnMinutes.innerHTML = 0
        btnHours.innerHTML = 0
    } else {
        
    }
    buttonTime()
}