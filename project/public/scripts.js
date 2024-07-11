document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var passw = document.getElementById('password').value;

    if (email === "" || passw === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return;
    }

    var formData = {
        Email: email,
        Password: passw
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('contact-form').reset();
        window.location.href = 'http://127.0.0.1:5500/inicio.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar los datos.');
    });
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}