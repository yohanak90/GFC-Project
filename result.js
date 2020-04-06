// Code that gets result tags from the other page//
let result = localStorage.getItem('results');
 console.log(result);

// Converting result string into Array

resultArr = result.split(",");
console.log(resultArr);


//Code for the cards//
let hiltonBrighton = {
    cardTitle:'Hilton Brighton',
    text: "Set on the vibrant Brighton seafront, Hilton Brighton Metropole perfectly captures the character of this much-loved city while retaining Victorian elegance and charm.",
    image: 'https://www3.hilton.com/resources/media/hi/BSHMETW/en_US/img/shared/full_page_image_gallery/main/HL_extnight1_1270x560_FitToBoxSmallDimension_Center.jpg',
    button: 'https://www3.hilton.com/en/hotels/united-kingdom/hilton-brighton-metropole-BSHMETW/index.html',
    tags:['beach','drinking'],
}

let villaPunto = {
    cardTitle:'Villa Punto de Vista',
    text: "If your team is outdoorsy but also loves luxury, Villa Punta de Vista and it’s 270-degree panoramic bay views is the perfect spot. Treat the company to this 10-bedroom, 2.5 acre rain-forest estate overlooking the Manuel Antonio Bay for adventure and relaxation.",
    image: 'https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image_flex/uploads/+0Regular_Roundup/BucketListCorporate2017/VillaPuntoDeVista-03.jpg',
    button: 'https://www.venuereport.com/venue/villa-punto-de-vista/',
    tags:['beach','relaxing'],
}


let polurrianHotel = {
    cardTitle:'Polurrian Hotel',
    text: "Catch a contemporary Cornish retreat in a spectacular clifftop setting – Experience the best of Cornwall",
    image: 'https://www.polurrianhotel.com/uploads/images/our-hotel/_1140/luxury-family-hotels-polurrian-bay-cornwall-hotel-3.jpg',
    button: 'https://www.polurrianhotel.com/',
    tags: ['beach', 'drinking']
}

let viceroyAnguilla= {

    cardTitle:'Viceroy Anguilla Resort',
    text: "Treat your team to the Caribbean and check in at the Viceroy Anguilla Resort where contemporary design meets earthy accents. Outside of the luxurious resort, the 3,200 feet of beach is going to be the real winner.",
    image: 'https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2014/08/Aerial-View-of-Sunset-Pool-Deck-II.jpg',
    button: 'https://www.venuereport.com/venue/viceroy-anguilla-resort/',
    tags: ['beach', 'drinking']
}


let penallyAbbey = {
    cardTitle:'Penally Abbey',
    text: "A cosy hotel overlooking the magical Pembrokeshire coast",
    image: 'https://r-cf.bstatic.com/images/hotel/max1024x768/163/163235079.jpg',
    button: 'https://www.penally-abbey.com/',
    tags: ['beach', 'relaxing']
}

let cumberlandLodge = {
        cardTitle:'Cumberland Lodge',
        text: "Set in the heart of Queen Elizabeth's grounds, this beautiful location offers to sitmulate the mind through empowering conversation",
        image: 'https://www.cumberlandlodge.ac.uk/sites/default/files/public/styles/landscape_for_node_content/public/basic_page/CL%20Aerial%20Shot%202.jpg?itok=2MNBEtrj&c=9c0c4bc44dfd0b47f23ef25f6db4edc3',
        button: 'https://www.cumberlandlodge.ac.uk/',
        tags: ['countryside', 'relaxing']    
}

let clivedenHouse = {
    cardTitle:'Cliveden House',
    text: "Multi-award winning hotel sitting across hundreds of acres of idyllic National Trust parkland",
    image: 'https://i.pinimg.com/originals/5a/43/9e/5a439eb12cd79afe85a95586731829da.jpg',
    button: 'https://www.clivedenhouse.co.uk/',
    tags: ['countryside', 'drinking']    
}

// Turn Objects into Array
const cardArr = [hiltonBrighton, polurrianHotel, penallyAbbey, cumberlandLodge, clivedenHouse, villaPunto, viceroyAnguilla];
let cardsHere = document.getElementById('cardsHere')


//Code to get the card infos//

function createCard(display){
    let newDiv = document.createElement('div');
    let str = `<div class="card" style="width: 18rem;">
 <img class="card-img-top" src="${display["image"]}" alt="Card image cap">
 <div class="card-body">
   <h5 class="card-title">${display["cardTitle"]}</h5>
   <p class="card-text">${display["text"]}</p>
   <a href="${display["button"]}" class="btn btn-primary">Go to page!</a>
 </div>
</div>` 

    newDiv.innerHTML=str;
    return newDiv;
};

// Function to check for array equality
function arrCompare(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    } 
    var length = arr1.length
    for (var i = 0; i < length; i++){
        if (arr1.includes(arr2[i]) === false){
            return false;
        }
    }; 
    return true
};



//Loop to add cards to DOM
console.log(result.length)
for (i of cardArr){
    
    if ((resultArr.length === 0) || (resultArr.length === 4) || (result.length === 0)){
        cardsHere.appendChild(createCard(i));
    } else {
        if (arrCompare(resultArr, i['tags']) === true){
            console.log(i);
            cardsHere.appendChild(createCard(i));
        }; 
    }

    // if(resultArr === i['tags']){
    //     console.log(i);
    //     cardsHere.appendChild(createCard(i));
    // }; 
};



