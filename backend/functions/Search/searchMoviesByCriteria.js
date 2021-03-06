const listMovies = require('../Movies/listMovies');

module.exports.handle = async event => {
    const searchCriterias = event;
    const moviesList = JSON.parse((await listMovies.handle()).body).Movies;
    const moviesListFiltered = await moviesList.filter(movie => {
        return !searchCriterias.map(criteria => {
            return movie[criteria] == 1
        }).includes(false)
    });

    return moviesListFiltered
}