function submission(){
    if (useridField.value.length == 0 || fullNameField.value.length == 0){
        console.log('hi');
        return false;
    }
    else{
        localStorage.setItem('name', fullNameField.value);
        localStorage.setItem('userid', useridField.value);
    }
}

const fullNameField = document.getElementById('fullName');
const useridField = document.getElementById('userid');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', submission);