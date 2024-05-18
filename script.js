document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.getElementById('openFormButton');
    const closeFormButton = document.getElementById('closeFormButton');
    const formModal = document.getElementById('formModal');
    const overlay = document.getElementById('overlay');

    openFormButton.addEventListener('click', function() {
        formModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeFormButton.addEventListener('click', function() {
        formModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function() {
        formModal.style.display = 'none';
        overlay.style.display = 'none';
    });
});

