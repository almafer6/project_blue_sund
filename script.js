document.addEventListener('DOMContentLoaded', () => {


    // ---Contraseña---
    const MI_PASSWORD = "huevos1"; 


    // --- Contador de aniversario ---
    const fechaInicio = new Date(2024, 10, 16); // 16 de Noviembre, 2024
    const diasEl = document.getElementById('contador-dias');
    const horasEl = document.getElementById('contador-horas');
    const minutosEl = document.getElementById('contador-minutos');
    const segundosEl = document.getElementById('contador-segundos');

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        diasEl.textContent = dias;
        horasEl.textContent = horas;
        minutosEl.textContent = minutos;
        segundosEl.textContent = segundos;
    }
    actualizarContador(); 
    setInterval(actualizarContador, 1000);


    // =========================================================
    // --- Carrusel Fotos ---
    // =========================================================
    
    const fotosAlbum = [
        { 
            src: "imagenes/foto1.jpg", 
            desc: "💖☕" 
        },
        { 
            src: "imagenes/foto2.jpg", 
            desc: "💖😍" 
        },
        { 
            src: "imagenes/foto3.jpg", 
            desc: "💖🫂" 
        },
        { 
            src: "imagenes/foto4.jpg", 
            desc: "💖💕" 
        },
        { 
            src: "imagenes/foto5.jpg", 
            desc: "Con nuestro Remito💖🐈" 
        },
        { 
            src: "imagenes/foto6.jpg", 
            desc: "Con nuestro Loki💖🐈‍⬛" 
        },
        { 
            src: "imagenes/foto7.jpg", 
            desc: "Con nuestra Yuki💖🐈" 
        },
        { 
            src: "imagenes/foto8.jpg", 
            desc: "💖🎈🎂" 
        },
        { 
            src: "imagenes/foto9.jpg", 
            desc: "💖⛲" 
        },
        { 
            src: "imagenes/foto10.jpg", 
            desc: "💖🏞️" 
        },
        { 
            src: "imagenes/foto11.jpg", 
            desc: "💖🎤👹" 
        },
        { 
            src: "imagenes/foto12.jpg", 
            desc: "💖🎉" 
        },
        { 
            src: "imagenes/foto13.jpg", 
            desc: "💖🌱" 
        },
        { 
            src: "imagenes/foto14.jpg", 
            desc: "💖🏀" 
        },
        { 
            src: "imagenes/foto15.jpg", 
            desc: "💖🪼🪼" 
        },
        { 
            src: "imagenes/foto16.jpg", 
            desc: "💖🧙🧙‍♀️🎈🎂" 
        },
        { 
            src: "imagenes/foto17.jpg", 
            desc: "💖😚" 
        }
    ];

    let fotoActualIndex = 0; // Para saber qué foto estamos viendo

    // Obtenemos los elementos del carrusel
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const imgCarrusel = document.getElementById('foto-carrusel');
    const descCarrusel = document.getElementById('foto-descripcion');

    // Función para mostrar una foto específica
    function mostrarFoto(index) {
        const foto = fotosAlbum[index];
        imgCarrusel.src = foto.src;
        descCarrusel.textContent = foto.desc;
    }

    // Lógica del botón "Siguiente"
    btnNext.addEventListener('click', () => {
        fotoActualIndex++; // Aumenta el índice
        // Si se pasa del final, regresa al inicio (índice 0)
        if (fotoActualIndex >= fotosAlbum.length) {
            fotoActualIndex = 0;
        }
        mostrarFoto(fotoActualIndex);
    });

    // Lógica del botón "Anterior"
    btnPrev.addEventListener('click', () => {
        fotoActualIndex--; // Disminuye el índice
        // Si se pasa del inicio, va al final (última foto)
        if (fotoActualIndex < 0) {
            fotoActualIndex = fotosAlbum.length - 1;
        }
        mostrarFoto(fotoActualIndex);
    });

    // --- Momentos o recuerdos ---
    
    // ¡¡AQUÍ PONES TUS RECUERDOS!!
    const recuerdos = [
        "Nuestra primera cita en el circo con esa suerte que nos caracteriza jiji. 💖",
        "Despídete bien... Mañoso😚",
        "¿Cuál gracias?🤭",
        "Nuestras citas tomando cafecito.☕😋",
        "Tu cumple🎈🎂",
        "Nuestro viajecito en mi cumple🥹💕",
        "Nuestras salidas al cine 🍿🎞️",
        "Nuestras risas😄❤️",
        "Nuestros abrazos🫂❤️",
        "Nuestros besos😚😚",
        "Nuestras llamadas para mimir📞😴",
        "Cuando mimimos juntitos💕",
        "Cuando jugamos a ver quién se libera primero del otro💪👀",
        "Nuestras salidas a comer🍗🍔🍕🌮🍱🍴❤️",
        "Cuando voy a verte jugar🏈😍",
        "Tu compañia en mis momentos importantes💕🎈",
        "Nuestras citas haciendo cafecito☕😋",
        "Nuestras pláticas❤️‍🩹🤓",
        "Cuando se nos conecta la neurona😆",
        "Cuando estamos con nuestros bebés🐈🐈‍⬛❤️"
    ];
    
    const elementoRecuerdo = document.getElementById('frase-recuerdo');
    const btnRecuerdoNuevo = document.getElementById('btn-frase-nueva');

// 1. Una función para barajar (revolver) el array
    // (Este es el famoso algoritmo Fisher-Yates)
    function barajarArray(array) {
        let copia = [...array]; // Hacemos una copia para no dañar el original
        for (let i = copia.length - 1; i > 0; i--) {
            // Elige un índice aleatorio antes del actual
            const j = Math.floor(Math.random() * (i + 1));
            // Intercambia los elementos
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    }

    // 2. Creamos dos variables nuevas:
    // Una para guardar la lista ya barajada...
    let recuerdosBarajados = barajarArray(recuerdos);
    // Y otra para saber en qué recuerdo vamos
    let indiceRecuerdoActual = 0;

    // 3. Re-escribimos la función 'generarRecuerdo'
    function generarRecuerdo() {
        // Mostramos el recuerdo actual de la lista barajada
        elementoRecuerdo.textContent = recuerdosBarajados[indiceRecuerdoActual];
        
        // Avanzamos al siguiente índice para la próxima vez
        indiceRecuerdoActual++;

        // 4. PREGUNTA CLAVE: ¿Llegamos al final de la lista?
        if (indiceRecuerdoActual >= recuerdosBarajados.length) {
            // ¡Sí! Se acabaron.
            // Los volvemos a barajar para el siguiente ciclo
            recuerdosBarajados = barajarArray(recuerdos);
            // Y reseteamos el contador a 0
            indiceRecuerdoActual = 0;
        }
    }
    
    // 5. El botón sigue llamando a la misma función de siempre
    btnRecuerdoNuevo.addEventListener('click', generarRecuerdo);

    // FIN DE LA LÓGICA NUEVA ---


    // --- MÓDULO 4: LÓGICA DE LOS MODALES (Abrir y Cerrar) ---

    
    const modalAlbum = document.getElementById('album-modal');
    const modalMomentos = document.getElementById('momentos-modal');
    const modalMensaje = document.getElementById('mensaje-modal');
    const btnAbrirAlbum = document.getElementById('open-album-btn');
    const btnAbrirMomentos = document.getElementById('open-momentos-btn');
    const btnAbrirMensaje = document.getElementById('open-mensaje-btn');
    const btnCerrarAlbum = document.getElementById('close-album');
    const btnCerrarMomentos = document.getElementById('close-momentos');
    const btnCerrarMensaje = document.getElementById('close-mensaje');

    const modalPassword = document.getElementById('password-modal');
    const btnCerrarPassword = document.getElementById('close-password');
    const btnConfirmarPassword = document.getElementById('btn-confirmar-pass');
    const inputPassword = document.getElementById('password-input');
    const errorPassword = document.getElementById('password-error');


    // ABRIR 
    btnAbrirAlbum.onclick = () => {
        fotoActualIndex = 0; 
        mostrarFoto(0); 
        modalAlbum.classList.add('modal-visible');
    }
    btnAbrirMomentos.onclick = () => {
        generarRecuerdo();
        modalMomentos.classList.add('modal-visible');
    }
    btnAbrirMensaje.onclick = () => {
        modalPassword.classList.add('modal-visible');
    }

    // CERRARx
    btnCerrarAlbum.onclick = () => { modalAlbum.classList.remove('modal-visible'); }
    btnCerrarMomentos.onclick = () => { modalMomentos.classList.remove('modal-visible'); }
    btnCerrarMensaje.onclick = () => { modalMensaje.classList.remove('modal-visible'); }
    btnCerrarPassword.onclick = () => { modalPassword.classList.remove('modal-visible'); }

    // CERRARout
    window.onclick = (event) => {
        if (event.target == modalAlbum) { modalAlbum.classList.remove('modal-visible'); } // <-- MODIFICADO
        if (event.target == modalMomentos) { modalMomentos.classList.remove('modal-visible'); } // <-- MODIFICADO
        if (event.target == modalMensaje) { modalMensaje.classList.remove('modal-visible'); } // <-- MODIFICADO
        if (event.target == modalPassword) { modalPassword.classList.remove('modal-visible'); }
    }




    // --- LÓGICA NUEVA: CONFIRMAR CONTRASEÑA ---
    btnConfirmarPassword.onclick = () => {
        let intento = inputPassword.value;
        
        // Comparamos el intento (en minúsculas) con tu contraseña
        if (intento.toLowerCase() === MI_PASSWORD.toLowerCase()) {
            // ¡CORRECTO!
            // 1. Cierra el modal de contraseña
            modalPassword.classList.remove('modal-visible');
            // 2. ABRE el modal de mensaje
            modalMensaje.classList.add('modal-visible');
            
            // 3. Limpia el input y el error (por si acaso)
            inputPassword.value = "";
            errorPassword.textContent = "";
            
        } else {
            // ¡INCORRECTO!
            // 1. Muestra un error
            errorPassword.textContent = "¡Contraseña incorrecta! Intenta de nuevo.";
            // 2. ¡Haz que tiemble!
            modalPassword.querySelector('.modal-content').classList.add('shake');
            
            // 3. Limpia el campo de texto
            inputPassword.value = "";
            
            // 4. Quita la animación de temblor después de que termine
            setTimeout(() => {
                modalPassword.querySelector('.modal-content').classList.remove('shake');
            }, 500); // 500ms = 0.5s (lo que dura la animación)
        }
    }
    // --- FIN DE LÓGICA DE CONTRASEÑA ---


    // ===============================================
// --- MÓDULO 5: ANIMACIÓN DE CORAZONES EN HOVER ---
// ===============================================

// 1. Buscamos la tarjeta del contador
const cardContador = document.querySelector('.card.contador');

// 2. Creamos la función que genera un corazón
function crearCorazon() {
    const corazon = document.createElement('span'); // Crea un <span></span>
    corazon.classList.add('corazon-flotante');     // Le pone la clase CSS
    
    corazon.innerText = '❤'; // ¡Aquí puedes usar '❤', '💖', '💕' o '✨'!
    
    // Le damos una posición horizontal al azar dentro de la tarjeta
    corazon.style.left = Math.random() * 100 + '%';
    
    // Añade el corazón a la tarjeta
    cardContador.appendChild(corazon);
    
    // Borra el corazón después de 2 segundos (cuando termina la animación)
    // para que no se llene de miles de corazones
    setTimeout(() => {
        corazon.remove();
    }, 2000);
}

// 3. Le decimos que ejecute la función CADA VEZ que el mouse se mueva
//    encima de la tarjeta del contador.
cardContador.addEventListener('mouseover', crearCorazon);

    

});
