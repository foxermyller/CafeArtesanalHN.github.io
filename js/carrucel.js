document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.eventos .card');
    let currentCardIndex = 0;
    setInterval(changeSlide, 5000); // Cambia de diapositiva cada 3 segundos

    function changeSlide() {
        cards[currentCardIndex].classList.remove('active');
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        cards[currentCardIndex].classList.add('active');
    }
});
