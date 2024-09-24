C:\Users\ANGIE ANGULO\OneDrive\Escritorio\Prueba\MiPagina\MiPagina\Header.css
/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos para el header */
header {
    background-color: var(--primary-color);
    padding: 10px 0;
}

/* Estilos para el nav y los enlaces */
nav ul {
    list-style: none;
    display: flex; /* Para alinear horizontalmente */
    justify-content: center; /* Centrar los elementos */
    background-color: var(--primary-color);
    padding: 10px;
}

nav ul li {
    margin: 0 15px; /* Espacio entre los elementos del menú */
}

nav ul li a {
    text-decoration: none; /* Quitar el subrayado */
    color: white; /* Color del texto */
    font-size: 18px; /* Tamaño del texto */
    font-family: Arial, sans-serif;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
}

nav ul li a:hover {
    background-color: var(--secondary-color);
    border-radius: 5px; /* Bordes redondeados para el hover */
}

/* Estilos para pantallas pequeñas (responsive) */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column; /* Hacer que los elementos se apilen verticalmente */
        align-items: center;
    }

    nav ul li {
        margin: 10px 0;
    }
}
