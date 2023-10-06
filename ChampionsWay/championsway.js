function showGetInTouchSales() {
    document.getElementById("popupFormSales").style.display = "block";
  }

function closeFormSales() {
    document.getElementById("popupFormSales").style.display = "none";
  }

// Cookies script

  // Function to set a cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to handle the "Accept" button click
function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365); // Set a cookie to remember the consent
    document.getElementById('cookie-banner').style.display = 'none'; // Hide the banner
}

// Check if the user has previously accepted cookies
const consentCookie = document.cookie.split('; ').find(row => row.startsWith('cookieConsent='));
if (!consentCookie) {
    document.getElementById('cookie-banner').style.display = 'block'; // Show the banner if no consent cookie is found
}

// Attach an event listener to the "Accept" button
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
