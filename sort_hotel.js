let listHotel = {
    title: ['Amara Resort & SPA','Desert quail inn', 'Villas at poco diablo','Mt - Glacier Lodge', 'Kalispell', 'Country Inn & Suites','Tropical Beach Resorts'],
    typeHotel: ['Гостиница', 'Мотель', 'Апартаменты','Гостиница', 'Мотель', 'Апартаменты', 'Гостиница'],
    cost: [2900, 2500, 1100, 1000, 1500, 2400, 1900],
    linkDetails: ['https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed'],
    linkReservation: ['https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed','https://vk.com/feed'],
    ratingPoint: ['8,5','7,6','9,0','5,6','7,9','8,1','7,4'],
    ratingStars:['★★★★','★★★','★★','★★★★★','★★★','★★★','★★★★'],
    imgHotel: ['./img/amara.png','./img/villas.png','./img/dester 22.png','./img/amara.png','./img/dester 22.png', './img/amara.png', './img/villas.png'],
    thereIsWiFi: [true,true,false,true,false,true,true,false],
    thereIsParking: [true,false,true,true,true,true,false,false],
    thereIsSwimmingPoll: [false,false,true,true,false,true,true,true]
};

let constructorHotel = {
    type: ['section', 'div', 'div', 'div', 'img', 'div', 'h1', 'div', 'span', 'span', 'span', 'div', 'div', 'a', 'div', 'a', 'div', 'div', 'span', 'div'],
    classElement: ['section_constructor_hotel', 'position', 'hotel_information', 'image_hotel', 'corect1', 'boking_a_hotel', 'corect', 'cost', 'type_of_hotel', 'cost_of_hotel', 'value_cost', 'reservation', {value: ['detailed_this_hotel', 'position_center']}, 'corect2', {value: ['reservation_this_hotel', 'position_center']}, 'corect3', 'rating_hotel', 'rating_stars', 'rating_point', 'point']
};

const sectionPushHotel = document.querySelector('.list_of_hotel');
const show = document.querySelector('.button_show');
let firstLoad = true;

function createListSortHotel (
    {
      title: [...restTitle], 
      typeHotel: [...restTypeHotel],
      cost: [...restCost], 
      linkDetails: [...restLinkDetails], 
      linkReservation: [...restLinkReservation], 
      ratingPoint: [...restRatingPoint], 
      ratingStars: [...restRatingStars], 
      imgHotel: [...restImgHotel],
      thereIsWiFi: [...restWiFi],
      thereIsParking: [...restParking],
      thereIsSwimmingPoll: [...restSwimmingPoll]
    }
      ) {
        
    let numberID = 0;
    let hotelID;

    let currentCost = document.querySelector('.start_value');
    let checkedPool = document.querySelector('input[id=poll]');
    let checkedParking = document.querySelector('input[id=parking]');
    let checkedWiFi = document.querySelector('input[id=wi_fi]');
    let checkedHotel = document.querySelector('input[id=hotel]');
    let checkedMotel = document.querySelector('input[id=motel]');
    let checkedApartamets = document.querySelector('input[id=apartaments]');


    for (var g = 0; g < restTitle.length; g++) {
            numberID += 1;
            hotelID = 'hotel_' + numberID;

       if(!firstLoad) {
            if(checkedPool.checked) {
                if(!restSwimmingPoll[g] && (restCost[g] <= currentCost.innerHTML)){
                    continue
                }
            }
            if(checkedParking.checked) {
                if(!restParking[g] && (restCost[g] <= currentCost.innerHTML)){
                    continue
                };
            }

            if(checkedWiFi.checked) {
                if(!restWiFi[g] && (restCost[g] <= currentCost.innerHTML)){
                    continue
                };
            }

            if(checkedHotel.checked) {
                if((restTypeHotel[g] === 'Гостиница') && (restCost[g] <= currentCost.innerHTML)){
                    createSectionHotel(constructorHotel);
                }
            }

            if(checkedMotel.checked) {
                if((restTypeHotel[g] === 'Мотель') && (restCost[g] <= currentCost.innerHTML)){
                    createSectionHotel(constructorHotel);
                }
            }

            if(checkedApartamets.checked) {
                if((restTypeHotel[g] === 'Апартаменты') && (restCost[g] <= currentCost.innerHTML)){
                    createSectionHotel(constructorHotel);
                }
            }

            if(checkedApartamets.checked || checkedMotel.checked || checkedHotel.checked) {
                continue
            }

            if(!(restCost[g] <= currentCost.innerHTML)) {
                continue
            }
        }

            createSectionHotel(constructorHotel);
        }
            firstLoad = false;
            function createSectionHotel({type: [...restType], classElement: [...restClass]}) {
            
                let currentItem;

                for(var i = 0; i < restType.length; i++) {
                    let element = document.createElement(restType[i]);
                    
                    if(typeof(restClass[i]) === "object") {
                        for(var j = 0; j < restClass[i].value.length; j++) {
                        element.classList.add(restClass[i].value[j]);
                        }
                    }else {
                        element.classList.add(restClass[i])
                    };

                    if(i == 0) {
                        element.setAttribute('id', hotelID);
                        sectionPushHotel.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID}`);
                    }
                    if(i == 1) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);
                    }
            
                    if(i == 2) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);   
                    }
            
                    if(i == 3) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);   
                    }
            
                    if(i == 4) {
                        element.setAttribute('src', restImgHotel[g]);
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[2]}`);  
                    }
            
                    if(i == 5) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);  
                    }
            
                    if(i == 6) {
                        element.innerHTML = restTitle[g];
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[5]}`);    
                    }
            
                    if(i == 7) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);   
                    }
            
                    if(i == 8) {
                        element.innerHTML = restTypeHotel[g];
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[7]}`);  
                    }
            
                    if(i == 9) {
                        element.innerHTML = 'от ';
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);  
                    }
            
                    if(i == 10) {
                        element.innerHTML = restCost[g] + ' р.';
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[5]}`); 
                    }
            
                    if(i == 11) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);  
                    }
            
                    if(i == 12) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i].value[0]}`);  
                    }
            
                    if(i == 13) {
                        element.innerHTML = 'Подробнее';
                        element.setAttribute('href', restLinkDetails[g]);
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[11]}`);  
                    }
            
                    if(i == 14) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i].value[0]}`);   
                    }
            
                    
                    if(i == 15) {
                        element.innerHTML = 'Забронировать';
                        element.setAttribute('href', restLinkReservation[g]);
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[1]}`); 
                    }
            
                    if(i == 16) {
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`); 
                    }
            
                    if(i == 17) {
                        element.innerHTML = restRatingStars[g]; 
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i-1]}`);      
                    }
            
                    if(i == 18) {
                        element.innerHTML = 'Рейтинг:';
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);  
                    }
            
                    if(i == 19) {
                        element.innerHTML = restRatingPoint[g];
                        currentItem.appendChild(element);
                        currentItem = sectionPushHotel.querySelector(`#${hotelID} .${restClass[i]}`);  
                    }   
                }
        }
}

createListSortHotel(listHotel);

let totalValueHotel = document.querySelector('.sum_found_suggestions');
totalValueHotel.innerHTML = sectionPushHotel.children.length;


show.addEventListener('click', updateListHotel);
show.addEventListener('touch', updateListHotel);


function updateListHotel() {
    while(sectionPushHotel.firstChild) {
        sectionPushHotel.removeChild(sectionPushHotel.firstChild);
    }
    createListSortHotel(listHotel);
    totalValueHotel.innerHTML = sectionPushHotel.children.length;
}


const checkSortCost = document.querySelector('input[id=cost]');
const checkSortType = document.querySelector('input[id=type]');
const checkSortRating = document.querySelector('input[id=rating]');
 
let sortByPrice = document.querySelector('input[id=cost] + label');
let sortByRating = document.querySelector('input[id=rating] + label');

let sortUp = document.querySelector('.arrow_up');
let sortDown = document.querySelector('.arrow_down');

sortByPrice.addEventListener('click', () => {sort('first_click_cost')});
sortByPrice.addEventListener('touch', () => {sort('first_click_cost')});

sortByRating.addEventListener('click', () => {sort('first_click_rating')});
sortByRating.addEventListener('touch', () => {sort('first_click_rating')});

sortUp.addEventListener('click', () => {
    arrowDown.classList.remove('arrow_down_activ');
    arrowUp.classList.add('arrow_up_activ');
    sort(false)
});

sortUp.addEventListener('touch', () => {
    arrowDown.classList.remove('arrow_down_activ');
    arrowUp.classList.add('arrow_up_activ');
    sort(false)
});

sortDown.addEventListener('click', () => {
    arrowUp.classList.remove('arrow_up_activ');
    arrowDown.classList.add('arrow_down_activ');
    sort(false)
});
sortDown.addEventListener('touch', () => {
    arrowUp.classList.remove('arrow_up_activ');
    arrowDown.classList.add('arrow_down_activ');
    sort(false)
});

let arrowUp = document.querySelector('.arrow_up');
let arrowDown = document.querySelector('.arrow_down');



function sort(firstclick) {
    let listSorting = new Map();
    let resultSorting = [];
    let countSort = 1;
    let result;
    let direction;
    
    if(arrowUp.classList.contains('arrow_up_activ')) {direction = true};
    if(arrowDown.classList.contains('arrow_up_activ')) {direction = false};

    for(var i = 0; i < sectionPushHotel.children.length; i++) {
    
        if(checkSortCost.checked || firstclick === 'first_click_cost') {
            result = sectionPushHotel.children[i].querySelector('.value_cost').innerHTML;
        };
        if(checkSortRating.checked || firstclick ==='first_click_rating') {
            result = sectionPushHotel.children[i].querySelector('.point').innerHTML;
        };

        listSorting.set(result, sectionPushHotel.children[i]);
    }

    for (val of listSorting.keys()) {
        resultSorting.push(val);
    }

    console.log(arrowUp.classList.contains('arrow_up_activ'));

    if(direction) {
        resultSorting.sort();
    }

    if(!direction){
        resultSorting.sort().reverse();
    }

    for(var r = 0; r < resultSorting.length; r++) {
        listSorting.get(resultSorting[r]).style.order = countSort;
        countSort += 1;
    }

}











