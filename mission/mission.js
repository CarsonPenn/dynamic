
const themeSelector = document.querySelector('#themeSelector');
const logo = document.querySelector('#logo'); 

function changeTheme() {
    // Check the current value of the select element
    const currentTheme = themeSelector.value;

    // If the value is 'dark'
    if (currentTheme === 'dark') {

        document.body.classList.add('dark');

        logo.src = 'byui-logo_dark.png'; // Replace with the actual path to the white logo
    } else {
        // Remove the dark class from the body
        document.body.classList.remove('dark');

        logo.src = 'byui-logo_blue.webp'; 
    }
}


themeSelector.addEventListener('change', changeTheme);
