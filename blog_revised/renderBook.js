import { book } from './bookData.js'; // Import the array of books

function renderBooks() {
    const displayPost = document.getElementById('displayPost');

    // Generate HTML for all books
    const booksHTML = book.map(bookItem => `
        <div class="item">
            <div class="metaBook">
                <h5>${bookItem.date}</h5>
                <p>${bookItem.ages}</p>
                <p>${bookItem.genre}</p>
                <p>${bookItem.stars}</p>
            </div>
            <div class="mainBook">
                <h3>${bookItem.title}</h3>
                <img id="heroImg" src="${bookItem.imgSrc}" alt="${bookItem.imgAlt}">
                <p>${bookItem.description}</p>
                <p><a href="details.html">Read More...</a></p>
            </div>
        </div>
    `).join(''); // Join all book HTML into a single string

    displayPost.innerHTML = booksHTML; // Insert the books HTML into the section
}

// Call the function to render books on page load
renderBooks();
