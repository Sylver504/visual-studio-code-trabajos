const secciones = {
  inicio: `
<section class="about-section">
  <div class="about-container">
    <div class="about-left">
      <span class="about-tag">NUESTRO INSTITUTO</span>
      <h2>Excelencia académica con <span class="purple-text">visión de futuro</span></h2>
      <p>El Instituto Oficial Polivalente Tiburcio Carías Andino es una institución pública de educación media ubicada en Las Vegas, Santa Bárbara, Honduras.</p>
      <button class="btn-more" onclick="cargarSeccion('historia')">MÁS SOBRE NOSOTROS ➔</button>
    </div>
    <div class="about-center">
      <div class="image-card">
        <img src="foto1.png" alt="Instalaciones">
      </div>
    </div>
    <div class="about-right">
      <div class="info-item">
        <div class="info-icon">📘</div>
        <div class="info-text"><h3>Educación Integral</h3><p>Formamos estudiantes con sólidos conocimientos académicos y valores humanos.</p></div>
      </div>
    </div>
  </div>
  <div class="hero-footer">
    <h3>Las Vegas, Santa Bárbara, Honduras</h3>
  </div>
</section>`,

  historia: `
<section class="about-container">
  <div class="about-center">
    <h2>NUESTRA HISTORIA</h2>
    <p>Breve historia del instituto y sus logros.</p>
  </div>
</section>`,

  mision: `
<section class="about-container">
  <div class="about-center">
    <h2>MISIÓN Y VISIÓN</h2>
    <p>Descripción de misión y visión institucional.</p>
  </div>
</section>`,

  valores: `
<section class="about-container">
  <div class="about-center">
    <h2>VALORES INSTITUCIONALES</h2>
    <p>Respeto, responsabilidad, honestidad y más.</p>
  </div>
</section>`,

  autoridades: `
<section class="about-container">
  <div class="about-center">
    <h2>AUTORIDADES</h2>
    <p>Información sobre el equipo directivo.</p>
  </div>
</section>`,

  'ofertas-academicas': `
<section class="about-container">
  <div class="about-center">
    <h1>OFERTA ACADÉMICA</h1>
    <p>Modalidades y bachilleratos disponibles.</p>
  </div>
</section>`,

  galeria: `
<section class="about-container">
  <div class="about-center">
    <h1>GALERÍA INSTITUCIONAL</h1>
    <div class="galeria-grid">
      <div class="image-card"><img src="foto1.png" alt="foto"></div>
      <div class="image-card"><img src="foto2.png" alt="foto"></div>
    </div>
  </div>
</section>`,

  noticias: `
<section class="about-container">
  <div class="about-center">
    <h1>Noticias y Avisos</h1>
    <div class="card"><h3>Inicio de Clases 2026</h3><p>Información sobre el inicio del año académico.</p></div>
    <div class="card"><h3>Feria Científica</h3><p>Participación de estudiantes en proyectos innovadores.</p></div>
  </div>
</section>`
};

// Botón "top" — adjuntar handler tras carga del DOM
function attachTopBtnHandler() {
  const topBtn = document.getElementById('topBtn');
  if (!topBtn) return;
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mostrar el botón solo al bajar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) topBtn.style.opacity = '1';
    else topBtn.style.opacity = '0';
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachTopBtnHandler);
else attachTopBtnHandler();

function cargarSeccion(nombre) {
  const contenedor = document.getElementById('contenedor-dinamico');
  if (!contenedor) return;
  contenedor.style.opacity = '0';
  setTimeout(() => {
    contenedor.innerHTML = secciones[nombre] || secciones['inicio'];
    contenedor.style.opacity = '1';
    // Ajustar scroll para enfoque en contenido dinámico
    window.scrollTo({ top: contenedor.offsetTop - 120, behavior: 'smooth' });
  }, 250);
}

// Export for debugging (optional)
window.__secciones = secciones;
