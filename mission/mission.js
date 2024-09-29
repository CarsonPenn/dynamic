// Select the dropdown element and logo from the HTML
const themeSelector = document.querySelector('#themeSelector');
const logo = document.querySelector('#logo'); // Select the logo image

function changeTheme() {
    // Check the current value of the select element
    const currentTheme = themeSelector.value;

    // If the value is 'dark'
    if (currentTheme === 'dark') {
        // Add the dark class to the body
        document.body.classList.add('dark');
        // Change the source of the logo img to point to the white logo
        logo.src = 'path/to/white-logo.png'; // Replace with the actual path to the white logo
    } else {
        // Remove the dark class from the body
        document.body.classList.remove('dark');
        // Change the source of the logo img to point to the blue logo
        logo.src = 'byui-logo_blue.webp'; // Assuming this is the blue logo
    }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);
