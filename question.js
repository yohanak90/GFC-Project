const beach = document.getElementById('beach');
const countryside = document.getElementById('countryside');
const drinking = document.getElementById('drinking');
const relaxing = document.getElementById('relaxing')

//Click event & storing information//

beach.addEventListener(`click`, function() {
    imageSelected(beach);
    beach.classList.add("clicked");
});

countryside.addEventListener(`click`, function() {
    imageSelected(countryside);
    countryside.classList.add("clicked");
});

drinking.addEventListener(`click`, function() {
    imageSelected(drinking);
    drinking.classList.add("clicked");
});

relaxing.addEventListener(`click`, function() {
    imageSelected(relaxing);
    relaxing.classList.add("clicked");
});


let selected = [];

function imageSelected(image){
    if (selected.includes(image.id) === false){
        selected.push(image.id);   
    }
    console.log(selected);
}

 // Button to go to the result page and the local storage function to collect data//
const resultbtn =document.getElementById('resultbtn');
resultbtn.addEventListener('click', function(){

    localStorage.setItem('results', selected);

    window.document.location ='./result.html';
});



