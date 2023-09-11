document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("jitterable");

    // Check if the "disableAnimations" cookie exists
    const jitterable = getCookie("jitterable");

    // Set the initial state of the checkbox based on the cookie
    if (jitterable === "true") {
        checkbox.checked = true;
    }

    // Function to toggle animations
    function toggleAnimations() {
        document.querySelector("html").classList.toggle("jitter");

        // Update the "jitterable" cookie based on the checkbox state
        setCookie("jitterable", checkbox.checked.toString());
    }

    // Add an event listener to the checkbox
    checkbox.addEventListener("change", toggleAnimations);

    // Function to set a cookie
    function setCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
    }

    // Function to get a cookie
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }
});
