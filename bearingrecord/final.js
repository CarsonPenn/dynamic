import post from './posts.js';

// Toggle Navigation
document.getElementById('toggle-nav').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
});

// Get today's date in 'YYYY-MM-DD' format
const getToday = () => {
    const now = new Date();
    return now.toISOString().split('T')[0]; // ISO string is in 'YYYY-MM-DD' format
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

// Render articles on page load
renderArticles();
