
const btn = document.getElementById('submit-btn');
btn.addEventListener('click' , () => {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    if (height == '' || weight == '') {
        alert('Please put the values');
        return
    }

    height = height / 100    // this gives the value of height in m
    
    let BMI = Math.round(weight / (height * height));
    // console.log(BMI);

    document.querySelector('.result-number').innerHTML = BMI
    
})