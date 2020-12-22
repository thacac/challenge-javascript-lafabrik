class SearchResource extends LibraryResource {

    constructor(resource) {
        super()
        this.resource=resource
    }
    // throw new Error("Not implemented")

    /**
     * @param {string} name
     * @todo Utiliser l'api de la classe parente pour appeler la méthode fetch
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     */
    async byName(name) {
        // throw new Error("Not implemented")
        return await this.fetch(`/anime?q=${name}&limit=10`)
    }

}