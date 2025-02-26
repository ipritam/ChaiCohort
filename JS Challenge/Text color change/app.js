function red(){
    document.body.style.backgroundColor = "Red"
}
function green(){
    document.body.style.backgroundColor = "Green"
}
function blue(){
    document.body.style.backgroundColor = "Blue"
}
function purple(){
    document.body.style.backgroundColor = "Purple"
}

function resetBg(){
    document.body.style.backgroundColor = "White"
}

const redBtn = document.getElementById('redButton')
redBtn.addEventListener('click',() => {
    red()
})

const greenBtn = document.getElementById('greenButton')
greenBtn.addEventListener('click',() => {
    green()
})
const blueBtn = document.getElementById('blueButton')
blueBtn.addEventListener('click',() => {
    blue()
})
const purpleBtn = document.getElementById('purpleButton')
purpleBtn.addEventListener('click',() => {
    purple()
})
const reset = document.getElementById('resetButton')
reset.addEventListener('click',() => {
    resetBg()
})