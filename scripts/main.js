/**
 * @todo Point d'entrée pour faire vos exercices...
 */

const searchField = document.querySelector('#search')
searchField.addEventListener('keyup', search)

const results = document.querySelector('#results')

window.onload = init

function init() {
    console.log("Coucou ! C'est ici que l'aventure commence ! Bon courage :-)")
}

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
    
    function displayResults(data)
    {
        results.innerHTML = ''
        console.log(data)

    for(let row of data){
        let linkResult = document.createElement('a')
        linkResult.classList.add('dropdown-item')
        linkResult.dataset.modal=row.mal_id
        linkResult.addEventListener('onAnimeChoosed', loadModal)
        linkResult.textContent = row.title
        results.appendChild(linkResult)
    }
}

function loadModal(data)
{
    let modal=` 
    <div class="modal fade" id="modal-detail-anime">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- Element dynamique -->
                    <h5 class="modal-title">🔥 Fate/Zero</h5>
                    <a class="btn btn-link" title="Click to see trailer" target="_blank" href="https://www.youtube.com/embed/21-1-ioCfXY?enablejsapi=1&wmode=opaque&autoplay=1">🎥 Trailer</a>
                    <!-- /Element dynamique -->
                    
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <table class="table table-condensed table-striped">
                        <tbody>
                            <!-- Element dynamique -->
                            <tr>
                                <td>Source</td>
                                <td>Light Novel</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>28 min per ep</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>
                                    <span class="badge badge-info">Action</span>
                                    <span class="badge badge-info">Supernatural</span>
                                    <span class="badge badge-info">Magic</span>
                                    <span class="badge badge-info">Fantasy</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Synopsis</td>
                                <td>
                                    With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated \"Magus Killer\" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract. Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu. Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive. [Written by MAL Rewrite]
                                </td>
                            </tr>
                            <!-- /Element dynamique -->
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`
}
