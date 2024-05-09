document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');

    images.forEach(image => {
        image.addEventListener('click',() => {
            const description = image.dataset.description;
            showModal(description);
        });
    });

    document.querySelector('.close').addEventListener('click',() => {
        closeModal();
    });

    window.addEventListener('click' , (event) =>{
        if(event.target === modal){
            closeModal();
        }
    });

    function showModal(description) {
        modalDescription.textContent = description;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }
});
