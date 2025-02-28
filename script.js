//Animación de texto
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const gradientWord = '<span class="gradient-bg">Chill</span>'; // Mantiene el gradiente fijo
    const emoji = ' ☕'; // Emoji fijo
    const fullText = "I do Code and"; // Texto que se anima
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Velocidad de escritura
    const deletingSpeed = 100; // Velocidad de borrado
    const pauseTime = 2000; // Pausa después de escribir
    const restartTime = 3000; // Pausa antes de reescribir

    function updateText() {
        if (!isDeleting) {
            textElement.innerHTML = fullText.slice(0, index) + ' ' + gradientWord + emoji;
            index++;
            if (index > fullText.length) {
                isDeleting = true;
                setTimeout(updateText, pauseTime);
                return;
            }
        } else {
            index--;
            if (index < 0) {
                index = 0;
                isDeleting = false;
                setTimeout(updateText, restartTime);
                return;
            }
            textElement.innerHTML = fullText.slice(0, index) + ' ' + gradientWord + emoji;
        }
        setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
    }

    setTimeout(updateText, 1000); // Inicia con una pequeña pausa
});

//Animación de carrusel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalImages = document.querySelectorAll('.carousel-track img').length;

function updateCarousel() {
    track.style.transform = `translateX(${-index * 300}px)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});


 function validateEmail() {
        const emailInput = document.getElementById("email").value;
        const errorMessage = document.getElementById("error-message");
        
        // Expresión regular para validar un email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(emailInput)) {
            errorMessage.textContent = "❌ Please enter a valid email address.";
            errorMessage.style.display = "block";
            return false; // Evita que el formulario se envíe
        }

        errorMessage.style.display = "none";
        return true; // Permite el envío si el email es válido
    }

    //Validación de formulario
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".contact-form");
        const emailInput = document.getElementById("email");
        const errorMessage = document.createElement("p");
    
        errorMessage.id = "error-message";
        errorMessage.style.color = "red";
        errorMessage.style.display = "none";
        form.insertBefore(errorMessage, form.lastElementChild);
    
        function validateEmail() {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
            if (!emailRegex.test(emailInput.value)) {
                errorMessage.textContent = "Please enter a valid email address.";
                errorMessage.style.display = "block";
                return false;
            }
    
            errorMessage.style.display = "none";
            return true;
        }
    
        form.addEventListener("submit", function (event) {
            if (!validateEmail()) {
                event.preventDefault(); // Evita el envío si el email no es válido
            }
        });
    });
    