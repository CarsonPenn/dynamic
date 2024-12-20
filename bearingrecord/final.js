import post from './posts.js';

// Toggle Navigation
document.getElementById('toggle-nav').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
});

// fixing the date to show in  mountain time zone
const getToday = () => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver', // Mountain Time Zone
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    // Format to MM/DD/YYYY and reformat to YYYY-MM-DD
    const parts = formatter.formatToParts(now);
    const year = parts.find(part => part.type === 'year').value;
    const month = parts.find(part => part.type === 'month').value;
    const day = parts.find(part => part.type === 'day').value;

    return `${year}-${month}-${day}`;
};


// Filter articles by today's date
const getTodaysArticles = articles => {
    const today = getToday();
    console.log("Filtering for today's articles:", today);
    return articles.filter(article => article.publishDate === today);
};

// Generate HTML for a single article
const articleTemplate = article => `
    <article class="article-item">
        <img class="article-img" src="${article.image}" alt="Image related to ${article.name}" />
        <div>
            <header>
                <h2>${article.name}</h2>
                <p class="article-date">Published: ${article.publishDate} | Date: ${article.date}</p>
            </header>
            <p class="article-description">${article.description}</p>
            <footer>
                <p class="article-source">Source: <a href="${article.referenceLink}" target="_blank">${article.source}</a></p>
            </footer>
        </div>
    </article>`;

// Render today's articles
const renderArticles = () => {
    const container = document.querySelector('#article-container');
    const todaysArticles = getTodaysArticles(post);
    container.innerHTML = todaysArticles.length 
        ? todaysArticles.map(articleTemplate).join('') 
        : '<p>No articles available for today.</p>';
};

console.log(getToday()); // Check the output of today's date



// Render articles on page load
renderArticles();
