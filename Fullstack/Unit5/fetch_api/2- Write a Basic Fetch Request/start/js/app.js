const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(Error('Something went wrong'))
}

Promise.all([
    fetchData('https://dog.ceo/api/breeds/image/random')
]).then(data => {
    const randomImage = data[0].message;
    generateImage(randomImage);
})

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(response => {
        const breeds = response.message;
        const keys = Object.keys(breeds);
        const subBreeds = Object.values(breeds);
        console.log(keys);
        console.log(subBreeds);
        return keys; 
    })
    .then(generateOptions)
    .catch(Error('Something went wrong'));


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.status));
    }
}

function generateOptions(data) {
    const options = data.map(item => `<option value="${item}">${item}</option>`).join('');
    select.innerHTML = options
}

function generateImage(data) {
    const html = `
    <img src="${data}" alt>
    <p>Click to view images of ${select.value}</p>
    `;
    card.innerHTML = html;
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more ${breed}s`;
        })
        .catch(Error('Something went wrong'));
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
form.addEventListener('submit', postData);


// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, comment})
    }

    fetch('https://jsonplaceholder.typicode.com/comments', config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(Error('Something went wrong'));
}






/*
{
    "message": {
        "affenpinscher":[],
        "african":[],
        "airedale":[],
        "akita":[],
        "appenzeller":[],
        "basenji":[],
        "beagle":[],
        "bluetick":[],
        "borzoi":[],
        "bouvier":[],
        "boxer":[],
        "brabancon":[],
        "briard":[],
        "bulldog":["boston","english","french"],
        "bullterrier":["staffordshire"],
        "cairn":[],
        "cattledog":["australian"],
        "chihuahua":[],
        "chow":[],
        "clumber":[],
        "cockapoo":[],
        "collie":["border"],
        "coonhound":[],
        "corgi":["cardigan"],
        "cotondetulear":[],
        "dachshund":[],
        "dalmatian":[],
        "dane":["great"],
        "deerhound":["scottish"],
        "dhole":[],
        "dingo":[],
        "doberman":[],
        "elkhound":["norwegian"],
        "entlebucher":[],
        "eskimo":[],
        "frise":["bichon"],
        "germanshepherd":[],
        "greyhound":["italian"],
        "groenendael":[],
        "hound":["afghan","basset","blood","english","ibizan","walker"],
        "husky":[],
        "keeshond":[],
        "kelpie":[],
        "komondor":[],
        "kuvasz":[],
        "labrador":[],
        "leonberg":[],
        "lhasa":[],
        "malamute":[],
        "malinois":[],
        "maltese":[],
        "mastiff":["bull","english","tibetan"],
        "mexicanhairless":[],
        "mix":[],
        "mountain":["bernese","swiss"],
        "newfoundland":[],
        "otterhound":[],
        "papillon":[],
        "pekinese":[],
        "pembroke":[],
        "pinscher":["miniature"],
        "pointer":["german","germanlonghair"],
        "pomeranian":[],
        "poodle":["miniature","standard","toy"],
        "pug":[],
        "puggle":[],
        "pyrenees":[],
        "redbone":[],
        "retriever":["chesapeake","curly","flatcoated","golden"],
        "ridgeback":["rhodesian"],
        "rottweiler":[],
        "saluki":[],
        "samoyed":[],
        "schipperke":[],
        "schnauzer":["giant","miniature"],
        "setter":["english","gordon","irish"],
        "sheepdog":["english","shetland"],
        "shiba":[],
        "shihtzu":[],
        "spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],
        "springer":["english"],
        "stbernard":[],
        "terrier":["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],
        "vizsla":[],
        "weimaraner":[],
        "whippet":[],
        "wolfhound":["irish"]
    },
    "status":"success"
}

*/