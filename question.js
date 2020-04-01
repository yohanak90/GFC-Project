const beach = document.getElementById('beach');
const countryside = document.getElementById('countryside');
const drinking = document.getElementById('drinking');
const relaxing = document.getElementById('relaxing')

//Click event & storing information//

beach.addEventListener(`click`, function() {
    imageSelected(beach);
});

countryside.addEventListener(`click`, function() {
    imageSelected(countryside);
});

drinking.addEventListener(`click`, function() {
    imageSelected(drinking);
});

relaxing.addEventListener(`click`, function() {
    imageSelected(relaxing);
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



