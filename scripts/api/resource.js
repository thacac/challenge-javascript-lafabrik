class LibraryResource {

    /**
     * @todo Mettre api et resource dans une propriété
     * @param {base_url} base_url
     * @param {string} resource Comme 'anime', 'manga', 'person', 'search', etc...
     * @see https://jikan.docs.apiary.io/#reference/
     */
    constructor(resource) {
        this.base_url = 'https://api.jikan.moe/v3/'
        this.resource = resource
        // throw new Error("Not implemented")
    }

    /**
     * @todo Utiliser la méthode fetch de l'api. Construire resource_url avec les propriétés resource & query
     * @param {string} query => peut être par exemple '/10087', '/anime?q=FateZero'
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     */
    fetch(query) {
        return new Promise = (resolve, reject) => {
            fetch(`${this.base_url}${this.resource}${query}`)
                .then(response => response.json())
                .then(data => {
                    (data.results) ? resolve(data.results) : reject(new Error("Not implemented"))
                })
        }
        // throw new Error("Not implemented")
    }
}