let database = [];

function getRecentSearches() {
    return database.slice(0, 10); // Show the last 10 searches
}

function addRecentSearch(query) {
    database.push(query);
    if (database.length > 10) {
        database.shift(); // Keep only the last 10 searches
    }
}

module.exports = { getRecentSearches, addRecentSearch };
