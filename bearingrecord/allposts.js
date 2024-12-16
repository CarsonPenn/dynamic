import post from './posts.js';

// Toggle Navigation
document.getElementById('toggle-nav').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// Function to get today's date in 'YYYY-MM-DD' format, adjusted for local timezone
function getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to filter articles where the publishDate is before today
function getPastArticles(articles) {
    const today = getToday();
    const filtered = articles.filter(article => article.publishDate < today);
    return filtered;
}

// Function to generate HTML for a single article
function articleTemplate(article) {
    return `<article class="article-item">
        <img class="article-img" src="${article.image}" alt="Image related to ${article.name}" />
        <div>
            <header>
                <h2>${article.name}</h2>
                <p class="article-date">Published: ${article.publishDate}   |    Date: ${article.date}</p>
            </header>
            <p class="article-description">${article.description}</p>
            <footer>
                <p class="article-source">Source: <a href="${article.referenceLink}" target="_blank">${article.source}</a></p>
            </footer>
        </div>
    </article>`;
}

// Function to render past articles
function renderArticles() {
    const pastArticles = getPastArticles(post);
    const container = document.querySelector('#article-container');
    if (pastArticles.length > 0) {
        container.innerHTML = pastArticles.map(article => articleTemplate(article)).join('');
    } else {
        container.innerHTML = '<p>No past posts available.</p>';
    }
}

// Render articles on page load
renderArticles();
