const secciones = {
    inicio: `
        <section class="about-section">
            <div class="about-container">
                <h2>NUESTRO INSTITUTO</h2>
                <p>Bienvenido al Instituto Polivalente Tiburcio Carías Andino.</p>
                <button class="btn-more" onclick="cargarSeccion('historia')">MÁS SOBRE NOSOTROS ➔</button>
            </div>
        </section>`,
    historia: `
        <section class="about-section">
            <div class="about-container">
                <h2>Nuestra Historia</h2>
                <p>El instituto fue fundado para servir a la comunidad de Las Vegas...</p>
                <button class="btn-more" onclick="cargarSeccion('inicio')">⬅ REGRESAR AL INICIO</button>
            </div>
        </section>`
};

function cargarSeccion(nombre) {
    const contenedor = document.getElementById('contenedor-dinamico');
    contenedor.style.opacity = '0';
    setTimeout(() => {
        contenedor.innerHTML = secciones[nombre] || secciones['inicio'];
        contenedor.style.opacity = '1';
    }, 300);
}