const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    feedbackElement.innerHTML = `Hello ${userName}!<br>
    Thank you for reserving with us!<br>
    We sent you an email with your information!`;
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
    formElement.reset()
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        feedbackElement.style.display = "none";
    }, 30000);
});