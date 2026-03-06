//Funcion de ingresar datos
function ingresarDatos() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let genero = document.getElementById("genero").value;

    if (nombre === "" || apellido === "" || genero === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }


    let saludo = "";

    if (genero === "masculino") {
        saludo = "Bienvenido ";
    } else {
        saludo = "Bienvenida ";
    }

    document.getElementById("mensaje").innerText = saludo + nombre + " " + apellido;

    // ocultar "ingresar datos"
    document.getElementById("login").style.display = "none";

    // mostrar blog
    document.getElementById("blog").style.display = "block";

    // mostrar mensaje de bienvenida
    mensaje.style.display = "block";

    // desaparecer despues de 4s
    setTimeout(function () {
        mensaje.style.display = "none";
    }, 2000);
}


//Funcion de mostrar codigo
// se activa a el hacer click en el boton "Ver Código"
function mostrarCodigo(button) {

    // Busca el div de código que está inmediatamente después del botón
    let contenedorCodigo = button.nextElementSibling;

    // Si esta oculto, lo  muestra y cambia el texto del boton
    if(contenedorCodigo.classList.contains("d-none")) {
        contenedorCodigo.classList.remove("d-none");
        button.innerText = "Ocultar Código";
    }else {

        //si esta visible, lo oculta y  restaura el texto
        contenedorCodigo.classList.add("d-none");
        button.innerText = "Ver Código";
    }   
}

// Animaciones al hacer scroll (intersection observer)
// Hace que las tarjetas aparezcan suavemente de aabajo hacia arriba
document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimados = document.querySelectorAll(".reveal");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    elementosAnimados.forEach((elemento) => {
        observador.observe(elemento);
    });
});
