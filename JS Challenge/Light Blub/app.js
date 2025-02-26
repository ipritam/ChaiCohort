const onBtn = document.getElementById('toggleButton');
const changeStatus = document.getElementById('status');

function myFunctionOn() {
    document.getElementById("bulb").style.backgroundColor = "#f1c40f";
}
function myFunctionOff() {
    document.getElementById("bulb").style.backgroundColor = "#95a5a6";
}
// function darkMode(){
//     document.getElementById("dark-mode").style.backgroundColor = "#333"
// }
let isOn = false;
onBtn.addEventListener('click' , () => {
    isOn = !isOn
    if(isOn){
        myFunctionOn()
        onBtn.innerHTML = 'Turn Off'
        changeStatus.innerHTML = 'Status: On'
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "black"
    }else{
        myFunctionOff()
        onBtn.innerHTML = 'Turn On'
        changeStatus.innerHTML = 'Status: Off'
        document.body.style.backgroundColor = "#333"
        document.body.style.color = "white"
    }
})