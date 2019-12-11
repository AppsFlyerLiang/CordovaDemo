document.getElementById("af_add_to_cart").addEventListener("click", af_add_to_cart, false);
document.getElementById("af_purchase").addEventListener("click", af_purchase, false);

function trackEvent(eventName, eventValues) {
    alert('Event Tracked: '+eventName);
    window.plugins.appsFlyer.trackEvent(eventName, eventValues);
}

function af_purchase() {
    eventName = "af_purchase";
    eventValues = { "af_content_id": "id123", "af_currency": "USD", "af_revenue": "2" };
    trackEvent(eventName, eventValues);
}
function af_add_to_cart() {
    trackEvent("af_add_to_cart");
}
