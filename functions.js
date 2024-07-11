
function prueba(){
    window.alert("prueba");
}

function Discount() {
    var input = document.getElementById('DiscText');
    if (input.value==='') {
        window.alert("Vacio");
    }else{
        window.alert("Valido");
    }
}

function Whatsapp(){
    window.alert("Líneas colapsadas!");
}

function Card() {
    window.alert("Los datos de la tarjeta son incorrectos o no están completos!")
}

function crearImagenIzq(ruta, txt) {
    const imagen = document.createElement('img');
    imagen.src = ruta;
    imagen.alt = txt;
    imagen.classList.add('clickable');

    const contenedor = document.getElementById("picLeft");
    contenedor.appendChild(imagen);
}

function crearImagenDer(ruta, txt){
    const imagen = document.createElement('img');
    imagen.src = ruta;
    imagen.alt = txt;
    imagen.classList.add('clickable');

    const contenedor = document.getElementById("picRight");
    contenedor.appendChild(imagen);
}

function crearTextoLeft(text1, text2){
    const texto1 = document.createElement('p');
    const texto2 = document.createElement('p');
    texto1.textContent = text1;
    texto2.textContent = text2;
    texto2.classList.add('price');

    const contenedor = document.getElementById("footLeft");
    contenedor.appendChild(texto1);
    contenedor.appendChild(texto2);
}

function crearTextoRight(text1, text2){
    const texto1 = document.createElement('p');
    const texto2 = document.createElement('p');
    texto1.textContent = text1;
    texto2.textContent = text2;
    texto2.classList.add('price');

    const contenedor = document.getElementById("footRight");
    contenedor.appendChild(texto1);
    contenedor.appendChild(texto2);
}

window.addEventListener('online', onFunction);
window.addEventListener('offline', offFunction);

function onFunction() {
    alert("Volvemos a estar en línea!");
}

function offFunction() {
    alert("Ups! Parece ser que nos quedamos sin conexión");
}

document.addEventListener('DOMContentLoaded', function() {
    var clickableImages = document.querySelectorAll('img.clickable');
    var modal = document.getElementById('infoModal');
    var modalImage = document.getElementById('modalImage');

    clickableImages.forEach(function(image) {
    image.addEventListener('click', function() {
        var imgSrc = this.getAttribute('src');

        var tittle = document.getElementById('modalTittle');
        tittle.textContent = this.getAttribute('alt');

        modalImage.src = imgSrc;

        var bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show(); // Show the modal

        var modalDialog = modal.querySelector('.modal-dialog');
        modalDialog.style.maxWidth = '500px'; // Adjust width as needed
        });
    });
});