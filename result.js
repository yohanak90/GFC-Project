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
    text: "If your team is outdoorsy but also loves luxury, Villa Punta de Vista is perfect for adventure and relaxation.",
    image: 'https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image_flex/uploads/+0Regular_Roundup/BucketListCorporate2017/VillaPuntoDeVista-03.jpg',
    button: 'https://www.venuereport.com/venue/villa-punto-de-vista/',
    tags:['beach','relaxing'],
}


let polurrianHotel = {
    cardTitle:'Polurrian Hotel',
    text: "Catch a contemporary Cornish retreat in a spectacular clifftop setting – Experience the best of Cornwall.",
    image: 'https://www.polurrianhotel.com/uploads/images/our-hotel/_1140/luxury-family-hotels-polurrian-bay-cornwall-hotel-3.jpg',
    button: 'https://www.polurrianhotel.com/',
    tags: ['beach', 'drinking'],
}

let viceroyAnguilla= {

    cardTitle:'Viceroy Anguilla Resort',
    text: "Treat your team to the Caribbean and check in at the Viceroy Anguilla Resort where contemporary design meets earthy accents.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO3zKRi1XhQDlTn5MTO7GmVYupaykXMRDbDHrQbTAAyz95lTS8&usqp=CAU',
    tags: ['beach', 'relaxing'],
}


let penallyAbbey = {
    cardTitle:'Penally Abbey',
    text: "A cosy hotel overlooking the magical Pembrokeshire coast.",
    image: 'https://r-cf.bstatic.com/images/hotel/max1024x768/163/163235079.jpg',
    button: 'https://www.penally-abbey.com/',
    tags: ['beach', 'relaxing']
}

let cumberlandLodge = {
        cardTitle:'Cumberland Lodge',
        text: "Set in the heart of Queen Elizabeth's grounds, this beautiful location offers to sitmulate the mind through empowering conversation.",
        image: 'https://www.cumberlandlodge.ac.uk/sites/default/files/public/styles/landscape_for_node_content/public/basic_page/CL%20Aerial%20Shot%202.jpg?itok=2MNBEtrj&c=9c0c4bc44dfd0b47f23ef25f6db4edc3',
        button: 'https://www.cumberlandlodge.ac.uk/',
        tags: ['countryside', 'relaxing']    
}

let clivedenHouse = {
    cardTitle:'Cliveden House',
    text: "This multi-award-winning retreat can incentivise guests with a wide variety of team-building activities from treasure hunts or murder mystery, to chocolate and cocktail masterclasses.",
    image: 'https://www.thesun.co.uk/wp-content/uploads/2018/11/NINTCHDBPICT000276124302.jpg',
    button: 'https://www.clivedenhouse.co.uk/',
    tags: ['countryside', 'drinking']    
}

let amangiri= {

    cardTitle:'Amangiri',
    text: " Disconnect from technology and escape to the mountains of Utah. Amangiri’s beautiful indoor-outdoor design camouflages with its peaceful and natural surroundings. ",
    image: 'https://i.pinimg.com/originals/ee/ea/53/eeea53a7ad5847384ac5a223d301d0d6.jpg',
    button: ' https://www.venuereport.com/roundups/20-breathtaking-retreats-to-reward-your-company-with/entry/8/',
    tags: ['beach', 'relaxing'],
}
      
      

let monarchBeach= {

    cardTitle:' Monarch Beach Resort',
    text: " This is the high-end hotel where AIG reportedly spent over $400,000 on an executive retreat — less than a week after the government’s $85 billion bailout of the company.",
    image: 'https://cdn4.hotelopia.com/giata/bigger/12/124908/124908a_hb_p_001.jpg',
    button: ' https://www.oyster.com/orange-county/hotels/monarch-beach-resort/',
    tags: ['beach', 'drinking'],
}
      


let cuillinHills= {

    cardTitle:'Cuillin Hills Hotel',
    text: "Treat your team to the Caribbean and check in at the Viceroy Anguilla Resort where contemporary design meets earthy accents. ",
    image: ' https://r-cf.bstatic.com/images/hotel/max1024x768/113/113771847.jpg',
    button: ' https://www.tripadvisor.co.uk/Hotel_Review-g551883-d218172-Reviews-Cuillin_Hills_Hotel-Portree_Isle_of_Skye_The_Hebrides_Scotland.html',
    tags: ['countryside', 'relaxing'],
}

let langhamDorset= {

    cardTitle:'Langham Dorset Hotel',
    text: " The Langham is a warm & friendly non-smoking family run licensed guesthouse B&B ideally situated on the seafront with panoramic views of Weymouth Bay.",
    image: ' https://www.visit-dorset.com/dmsimgs/White_grape_bunch_844640674.JPG',
    button: ' http://langham-hotel.com/p/welcome.html ',
    tags: ['countryside', 'drinking'],
}
      
     
let chudleigh = {

    cardTitle:' Chudleigh',
    text: " Established in 1963, The Chudleigh is a Guest House in Clacton-on-Sea that is full of character and offers a pleasant experience for holidaymakers and professionals alike.",
    image: ' https://thumbnails.trvl-media.com/d7P036VbFgoo8gd-cRaavcueCP8=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/3000000/2700000/2695000/2694963/02b7015f_y.jpg',
    button: ' https://chudleighhotel.com/#',
    tags: ['countryside', 'drinking'],
}



// Turn Objects into Array
const cardArr = [hiltonBrighton, polurrianHotel, penallyAbbey, cumberlandLodge, clivedenHouse, villaPunto, viceroyAnguilla, amangiri, monarchBeach, cuillinHills, langhamDorset, chudleigh];
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
};



