function goBack() {
    window.history.back();
}

const params = new URLSearchParams(window.location.search);
const error = params.get('error');

const errorCode = document.getElementById('error-code');
const errorMessage = document.getElementById('error-message');
const errorDescription = document.getElementById('error-description');

if (error === '404') {
    errorCode.textContent = '404';
    errorMessage.textContent = 'Page Not Found';
    errorDescription.textContent = 'Sorry, the page you are looking for does not exist.';
} else if (error === '500') {
    errorCode.textContent = '500';
    errorMessage.textContent = 'Server Error';
    errorDescription.textContent = 'Sorry, something went wrong on our end. Please try again later.';
} else {
    errorCode.textContent = 'Error';
    errorMessage.textContent = 'Unknown Error';
    errorDescription.textContent = 'An unexpected error occurred.';
}
