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


// If the 'cookieConsent' cookie is present and contains 'accepted'
if (consentCookie && consentCookie.includes('accepted')) {
    // Load the Facebook Pixel code
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
}