/**
 * @todo Point d'entrée pour faire vos exercices...
 */

const searchField = document.querySelector('#search')
searchField.addEventListener('keyup', search)

const results = document.querySelector('#results')

// const onAnimeChoosed = new Event('onAnimeChoosed');

window.onload = init

function init() {
    console.log("Coucou ! C'est ici que l'aventure commence ! Bon courage :-)")
}

/**
 * Search anime from API base on search field content
 * @param {event} e 
 * @returns {Callback} display result list
 */
function search(e) {
    e.preventDefault()
    let search = e.target.value
    if (search.length >= 3) {
        fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=6`)
            .then(response => response.json())
            .then(data => {
                displayResults(data.results)
            })
    }
}

/**
 * Display links from search result
 * @param {json} data 
 */
function displayResults(data) {
    results.innerHTML = ''
    for (let row of data) {
        let linkResult = document.createElement('a')
        linkResult.classList.add('dropdown-item')
        linkResult.dataset.animedetails = JSON.stringify(row)
        // linkResult.addEventListener('onAnimeChoosed', loadCard)
        // linkResult.addEventListener('click', dispatchEvent(onAnimeChoosed))
        linkResult.addEventListener('click', loadCard)
        linkResult.textContent = row.title
        results.appendChild(linkResult)
    }
}

/**
 * Add card on click 
 * @param {event} e 
 */
function loadCard(e) {
    addCard(e.target.dataset.animedetails)
    document.querySelectorAll('.info').forEach(btn => addEventListener('click', loadModal))
}

/**
 * Card dynamic template update
 * @param {json} animedata 
 */
function addCard(animedata) {
    let list = document.querySelector('#anime-list')
    anime = JSON.parse(animedata)

    if ("content" in document.createElement("template")) {

        let card = document.querySelector('#cardChoice')
        let clone = document.importNode(card.content, true);

        clone.querySelector('img').alt = anime.title
        clone.querySelector('img').src = anime.image_url
        clone.querySelector('p.h6 > span:first-child').textContent = anime.title
        clone.querySelector('p.h6 > span:last-child').textContent = anime.score
        clone.querySelector('button').dataset.details = anime.mal_id
        clone.querySelector('small').textContent = `${anime.episodes} épisode${(anime.episodes > 1) ? 's' : ''}`

        list.appendChild(clone)

    } else {
        // Une autre méthode pour ajouter les lignes
        // car l'élément HTML n'est pas pris en charge.
    }

}

/**
 * Fetch details from anime id
 * @param {string} id from search results
 */
function getAnimeDetails(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.jikan.moe/v3/anime/${id}`)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
    })
}

/**
 * @param {event} e
 */
async function loadModal(e) {
    e.preventDefault()

    let details = await getAnimeDetails(e.target.dataset.details)
    let listGenres = ''
    for (let genre of details.genres) {
        listGenres += `<span class="badge badge-info">${genre.name}</span>`
    }

    document.querySelector('#modal-title').textContent = details.title
    document.querySelector('#link-trailer').href = details.trailer_url

    if ("content" in document.createElement("template")) {

        // On prépare une ligne pour le tableau
        let template = document.querySelector("#animeDetails");

        // On clone la ligne et on l'insère dans le tableau
        let tbody = document.querySelector("tbody");

        let clone = document.importNode(template.content, true);

        clone.querySelector('#source').textContent = details.source
        clone.querySelector('#duration').textContent = details.duration
        clone.querySelector('#listGenres').innerHTML = listGenres
        clone.querySelector('#synopsis').innerHTML = details.synopsis

        tbody.innerHTML = '';
        tbody.appendChild(clone);

    } else {
        // Une autre méthode pour ajouter les lignes
        // car l'élément HTML n'est pas pris en charge.
    }

    $('#modal-detail-anime').modal('toggle')
}
