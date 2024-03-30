function setSubmissionTime() {
    var submissionTimeInput = document.getElementById('submission_time');
    submissionTimeInput.value = Date.now();
}
window.onload = setSubmissionTime;