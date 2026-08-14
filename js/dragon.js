const eggCounts = {
    water: 0,
    fire: 0,
    electric: 0,
};
const MAX_EGG_COUNTS = {
    water: 1,
    fire: 1,
    electric: 1,
};

function dragonClicked(dragonType) {
    if (eggCounts[dragonType] < MAX_EGG_COUNTS[dragonType]) {
        // get the nest
        const nest = document.getElementById('nest')
        
        // create an egg image
        const eggImg = document.createElement('img')
        let eggFile = 'img/' + dragonType + '_egg.png'
        eggImg.src = eggFile
        eggImg.className = 'egg-image ' + dragonType
        // add the egg image to the nest
        nest.appendChild(eggImg)
        eggCounts[dragonType]++;

    }
    console.log('dragon clicked, type was ' + dragonType + ' egg counts are: ', eggCounts)
}

function hideElement(elementId) {
    const myElement = document.getElementById(elementId)
    myElement.classList.add('hidden')
}

function showHiddenElement(elementId) {
    const myElement = document.getElementById(elementId)
    myElement.classList.remove('hidden')
}

function showRandomDragon() {
    
}