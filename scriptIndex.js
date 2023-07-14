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

function popUp(){
    featureBox.innerHTML = ''
    featureBox.innerHTML = 'This website is made for the purposes of fulfilling the basic requirements of The Odin Project, i.e, to make a design of a dashboard-like feature.\n Having said this, the only working feature (for now) in the next page you\'ll see is the is the "New" button that allows you to make new to-do cards in the dashboard.\n You can, however, check out the hover effects for the sidebar text and some card-related options. \n Speaking of the cards, you can type any text in it, however, it won\'t be saved and will disappear once you refresh the next page.\n Thank you for reading this, and now you may proceed to the next page by clicking on the "Submit" button.'
    featureBox.style.height = 'auto';
    featureBox.style.width = 'auto';
    featureBox.style.transition = 'all 2s';
}

const fullNameField = document.getElementById('fullName');
const useridField = document.getElementById('userid');
const submitButton = document.getElementById('submit');
const featureBox = document.getElementById('features');
submitButton.addEventListener('click', submission);


featureBox.addEventListener('mouseenter', popUp)
featureBox.addEventListener('mouseleave', ()=>{
    featureBox.innerHTML = '';
    featureBox.innerHTML+='Hover on me before you click submit!'
})