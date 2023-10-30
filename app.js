const container1 = document.querySelector(".container-1")
const container2 = document.querySelector(".container-2")
const subBtn = document.querySelector(".subBtn")
const okBtn = document.querySelector(".okBtn")

function subHandler() {
    container2.classList.add('show')
}

function okHandler() {
    container2.classList.remove('show')
}

// subBtn.addEventListener('click', () => {
//     container2.classList.add('show')
// })

// okBtn.addEventListener('click', () => {
//     container2.classList.remove('show')
// })