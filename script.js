document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    searchJAV(searchInput, 1);
});

async function searchJAV(query, page) {
    const resultsDiv = document.getElementById('results');
    const paginationDiv = document.getElementById('pagination');
    resultsDiv.innerHTML = '';
    paginationDiv.innerHTML = '';

    try {
        const response = await fetch(`/api/search?query=${query}&page=${page}`);
        const data = await response.json();

        if (data.results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }

        data.results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <img src="${item.poster}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.downloadLink}" target="_blank">Download</a>
            `;
            resultsDiv.appendChild(resultItem);
        });

        if (data.totalPages > 1) {
            for (let i = 1; i <= data.totalPages; i++) {
                const button = document.createElement('button');
                button.className = 'pagination-button';
                button.textContent = i;
                button.addEventListener('click', () => searchJAV(query, i));
                if (i === data.page) {
                    button.classList.add('active');
                }
                paginationDiv.appendChild(button);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
    }
}

async function loadRecentSearches() {
    const recentSearchesList = document.getElementById('recentSearchesList');
    recentSearchesList.innerHTML = '';

    try {
        const response = await fetch('/api/recent-searches');
        const data = await response.json();

        data.forEach(search => {
            const li = document.createElement('li');
            li.textContent = search;
            recentSearchesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching recent searches:', error);
    }
}

loadRecentSearches();
