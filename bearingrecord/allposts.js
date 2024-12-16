import posts from './posts.js';

const postsContainer = document.getElementById('posts-container');
const noPostsMessage = document.getElementById('no-posts');

function renderPosts() {
    if (posts.length === 0) {
        noPostsMessage.style.display = 'block';
        return;
    }

    noPostsMessage.style.display = 'none';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.name}" />
            <div class="post-content">
                <h2>${post.name}</h2>
                <p>Published: ${post.publishDate}</p>
                <p>${post.description}</p>
                <a href="${post.referenceLink}" target="_blank">Read More</a>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Render all posts on page load
renderPosts();