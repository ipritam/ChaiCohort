document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const jobInput = document.getElementById('jobInput');
    const ageInput = document.getElementById('ageInput');
    const bioInput = document.getElementById('bioInput');

    const nameInPreview = document.getElementById('nameDisplay');
    const jobInPreview = document.getElementById('jobDisplay');
    const ageInPreview = document.getElementById('ageDisplay')
    const bioInPreview = document.getElementById('bioDisplay')
    function display(){
        nameInPreview.textContent = nameInput.value || 'Not Provided'
        jobInPreview.textContent = jobInput.value || 'Not Provided'
        ageInPreview.textContent = ageInput.value || 'Not Provided'
        bioInPreview.textContent = bioInput.value || 'Not Provided'
    }


[nameInput, jobInput, ageInput, bioInput].forEach(input => {
    input.addEventListener('input', display);
});

display()

})