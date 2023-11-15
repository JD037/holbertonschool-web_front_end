function createElement(data) {
    const p = document.createElement('p');
    p.textContent = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=Stack_Overflow&origin=*')
        .then(response => response.json())
        .then(data => {
            const page = data.query.pages;
            const pageId = Object.keys(page)[0];
            callback(page[pageId].extract);
        });
}

queryWikipedia(createElement);
