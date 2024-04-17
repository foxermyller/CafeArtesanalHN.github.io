document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('donation-form');
    const thankYouMessage = document.getElementById('thank-you');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto


        // Mostrar el mensaje de agradecimiento y limpiar el formulario
        showThankYouMessage();
        clearForm();
    });

    function showThankYouMessage() {
        thankYouMessage.style.display = 'block';
    }

    function clearForm() {
        // Obtener todos los elementos de entrada del formulario
        const formInputs = form.querySelectorAll('input, textarea');

        // Iterar sobre cada elemento y establecer su valor en vacío
        formInputs.forEach(input => {
            input.value = '';
        });
    }
});