"use strict";
window.onload = () => {
    const popClose = document.getElementById('closewin');
    const overlay = document.getElementById('overlay');
    let openModalButton = document.getElementById('openwin');

    if (openModalButton) {
        openModalButton.addEventListener('click', () => {
            let modal = document.querySelector(openModalButton.dataset.modalTarget);
            openModal(modal);
        });
    }
    popClose.addEventListener('click', ()  => {
        const modals = document.querySelectorAll('.window.active');
        modals.forEach(modal => {
            closeModal(modal);
        });
    });
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.window.active');
        modals.forEach(modal => {
            closeModal(modal);
        });
    });


    let openModal = (modal) => {
        if (modal === null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    };
    let closeModal = (modal) => {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    };
}






