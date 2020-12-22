class LibraryApi {

    /**
     * @todo Instancier Axios
     * @param {string} base_url
     * @see https://jikan.docs.apiary.io/#introduction/information
     * @see https://github.com/axios/axios
     */
    constructor(base_url) {
        this.base_url = base_url
        // throw new Error("Not implemented")
    }

    /**
     * @todo Utiliser axios pour récupérer les données de la ressources
     * @param {string} resource_url => peut être par exemple '/anime/10087'
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
     */
    fetch(resource_url) {
        fetch(`${this.base_url}${resource_url}`)
            .then(response => response.json())
            .then(data => {
               return data.results
            })

        // throw new Error("Not implemented")
    }
}