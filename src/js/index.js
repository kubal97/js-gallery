/*-----Getting JSON and display-----*/

let requestURL = 'http://www.splashbase.co/api/v1/images/search?query=tree';
let content = document.querySelector(".gallery");
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let images = request.response;
    showImages(images);

    let all = document.getElementsByClassName("image");
    for(let i=10; i<all.length; i++){
        all[i].style.display = "none";
    }

    for(let j=0; j<all.length; j+=9){
        let random = Math.floor((Math.random()*2));
        if(document.documentElement.clientWidth <= 768) {
            all[j+random].style.height = "90vw";
        }
        else all[j+random].style.width = "calc(40% + 20px)";
    }
};

function showImages(jsonObj){
    let image = jsonObj['images'];

    for(let i=0;i<image.length; i++) {
        let img = document.createElement('img');
        let gallery = document.createElement("IMG");
        let category = textContent = image[i].site;
        gallery.setAttribute("src", img.textContent = image[i].url);


        document.body.appendChild(gallery);
        content.appendChild(gallery);

        category.textContent = 'Category: ' + image[i].site;

        if (category === 'unsplash'){
            gallery.setAttribute("class", "image");
            gallery.setAttribute("id", "unsplash");
        }
        else if(category === 'littlevisuals'){
            gallery.setAttribute("class", "image");
            gallery.setAttribute("id", "littlevisuals");
        }
        else if(category === 'travelcoffeebook'){
            gallery.setAttribute("class", "image");
            gallery.setAttribute("id", "travelcoffeebook");
        }
        else if(category === 'jaymantri'){
            gallery.setAttribute("class", "image");
            gallery.setAttribute("id", "jaymantri");
        }
    }
}

/*----------------------*/

/*---Preloading images---*/

let more = document.querySelector(".more");

window.addEventListener("load", function () {
    setInterval(loading, 1500);
    more.style.display = "flex";
});
function loading() {
    let loader = document.getElementById("loader");
    loader.style.height = "0";
    loader.style.width = "0";
    loader.style.visibility = "hidden";
}

/*-----------------------*/


/*-------Filtering------*/

function filter(category) {

    let i,all;

    all = document.getElementsByClassName("image");
    let more = document.getElementsByClassName("more");
    more[0].style.display = "flex";


    if(category === "all") {
        for (let i = 10; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (let i = 0; i < 10; i++) {
            all[i].style.display = "flex";
        }
    }
    else {
        more[0].style.display = "none";
        for (i = 0; i < all.length; i++) {
            if (all[i].id === category) {
                all[i].style.display = "flex";
            }
            else all[i].style.display = "none";
        }
    }

    let buttons = document.getElementsByClassName("btn-click");
    let current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    buttons[category].classList.add("active");
}

/*----------------------*/

/*---Show more button---*/

function showMore() {
    let all = document.getElementsByClassName("image");
    for(let i=0; i<all.length; i++){
        all[i].style.display = "flex";
    }

    let more = document.getElementsByClassName("more");
    more[0].style.display = "none";
}

/*----------------------*/