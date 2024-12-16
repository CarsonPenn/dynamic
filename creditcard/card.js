document.getElementById('card-btn').addEventListener('click', function () {
    // Get form values
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardHolder = document.getElementById('card-holder').value.trim();
    const cardMonth = document.getElementById('card-month').value.trim();
    const cardYear = document.getElementById('card-year').value.trim();
    const cardCvc = document.getElementById('card-cvc').value.trim();

    // Elements for displaying messages
    const successMessage = document.getElementById('card-success');
    const errorMessage = document.getElementById('form-errors');
    const cardErrorText = document.getElementById('card-error');

    // Clear previous messages
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');


    // Validate inputs from chatgpt
    let error = '';
    if (!/^\d{16}$/.test(cardNumber)) {
        error = 'Invalid card number. Must be 16 digits.';
    } else if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
        error = 'Invalid card holder name. Only letters and spaces allowed.';
    } else if (!/^(0[1-9]|1[0-2])$/.test(cardMonth)) {
        error = 'Invalid expiration month. Use MM format.';
    } else if (!/^\d{2}$/.test(cardYear)) {
        error = 'Invalid expiration year. Use YY format.';
    } else if (!/^\d{3,4}$/.test(cardCvc)) {
        error = 'Invalid CVC. Must be 3 or 4 digits.';
    }

    // error message
    if (error) {
        cardErrorText.textContent = error;
        errorMessage.classList.remove('hidden');
        return;
    }

// 
    successMessage.classList.remove('hidden');
});


// thanks to w3schools for several exaples i leared from and for chatgpt helping with the error messages