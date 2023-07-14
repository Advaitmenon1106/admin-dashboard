window.onload = function(){
    document.getElementById('userIdWlc').innerHTML = localStorage.getItem("name")+' (@'+localStorage.getItem("userid")+')! <br> Here are a few cards to get you started. Click on the "New" button to add more!';
}

function deleteCard(event){
    //event.target.parentNode.parentNode.innerHTML = ''; --> under construction
    alert('This feature is under construction');
}

const newCardButton = document.getElementById('newCard');
const gridArea = document.getElementsByClassName('gridArea')[0];
const del = document.getElementsByClassName('delete')

for (i = 0; i<del.length; i++){
    del[i].addEventListener('click', deleteCard);
}

newCard.addEventListener('mousedown', ()=>{
    newCardButton.style.boxShadow = '1px 1px 1px 1px #1992d4';
    let newCardArea = document.createElement('div');
    newCardArea.className = 'cards';
    gridArea.appendChild(newCardArea);

    let headingInput = document.createElement('div');
    headingInput.className = 'heading';
    newCardArea.appendChild(headingInput)
    headingInput.appendChild(document.createElement('input'));

    let cardBody = document.createElement('div');
    cardBody.className = 'bodyOfCard';
    newCardArea.appendChild(cardBody);
    cardBody.appendChild(document.createElement('textarea'))

    let cardOptions = document.createElement('div');
    cardOptions.className = 'cardOptions';
    newCardArea.appendChild(cardOptions);

    /*let img = document.createElement('img');
    img.src = 'delete-outline.svg';
    cardOptions.appendChild(img);*/
    cardOptions.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg> <svg xmlns="http://www.w3.org/2000/svg" class="delete" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>share-variant-outline</title><path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" /></svg>'

})

newCard.addEventListener('mouseup', ()=>{
    newCardButton.style.boxShadow = '2px 2px 2px 2px #1992d4';
})
