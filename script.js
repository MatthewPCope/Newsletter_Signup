document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById("main")
    const successMessage = document.getElementById("modal")
    const subscribeBtn = document.getElementById("subscribe-btn")
    const email_alert = document.getElementById("valid-email-alert")
    const dismissBtn = document.getElementById("dismiss-btn")
    const emailInput = document.getElementById("email_input")
    const emailDisplay = document.querySelector("#modal p strong")

    function validateEmail(text) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(text);
    }

    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value;

        if (validateEmail(email)) {
            emailDisplay.textContent = email;
            subscribeForm.classList.add("hidden");
            successMessage.classList.remove("hidden");
            email_alert.classList.add("hidden");
            emailInput.classList.remove("alert");
        } else {
            email_alert.classList.remove("hidden");
            emailInput.classList.add("alert");
        }
    });

    dismissBtn.addEventListener('click', () => {
        successMessage.classList.add("hidden");
        subscribeForm.classList.remove("hidden");
        emailInput.value = '';
    });

})