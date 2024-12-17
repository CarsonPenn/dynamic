// Toggle menu for mobile view
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);



// This was created using chat gpt, i was mad struggling with this


menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
});

function handleResize() {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove('hide');
    } else {
        navLinks.classList.add('hide');
    }
}

handleResize();
window.addEventListener("resize", handleResize);

// Image viewer functionality
function viewerTemplate(pic, alt) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const target = event.target;
    if (target.tagName === 'IMG') {
        const src = target.src.replace('-sm', '-full');
        const alt = target.alt;

        // Insert the viewer template into the body
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(src, alt));

        // Add event listener to close the viewer
        const closeBtn = document.querySelector('.close-viewer');
        closeBtn.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

// Add event listener to the gallery for image clicks
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
