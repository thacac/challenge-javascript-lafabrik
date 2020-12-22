/**
 * @todo Point d'entrée pour faire vos exercices...
 */

const searchField = document.querySelector('#search')
searchField.addEventListener('keyup', search)

window.onload = init

function init() {
    console.log("Coucou ! C'est ici que l'aventure commence ! Bon courage :-)")
}

function search(e) {
    e.preventDefault()
    let search = e.target.value
    if (search.length >= 3) {
        fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }
}
