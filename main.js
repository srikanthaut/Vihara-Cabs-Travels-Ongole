// Function to open a specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close a specific modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal if the user clicks outside the modal content area
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}