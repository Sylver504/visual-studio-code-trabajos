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

// HAMBURGER MENU: attach handler after DOM ready
function attachHamburgerHandler() {
  const btn = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  if (!btn || !navbar) return;

  btn.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    if (navLinks) navLinks.classList.toggle('show', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navbar.classList.remove('open');
        navLinks.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Make dropdown menus toggleable on mobile
function attachDropdownHandlers() {
  const dropdownToggles = document.querySelectorAll('.dropdown');
  if (!dropdownToggles.length) return;

  dropdownToggles.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    const menu = drop.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    // Ensure desktop hover still works; use click to toggle on small screens
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth > 850) return; // let hover handle desktop
      e.preventDefault();
      const isOpen = drop.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    attachHamburgerHandler();
    attachDropdownHandlers();
  });
} else {
  attachHamburgerHandler();
  attachDropdownHandlers();
}

// Close navbar, nav-links and any open dropdowns
function closeMenu() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const btn = document.querySelector('.hamburger');

  if (navLinks) navLinks.classList.remove('show');
  if (navbar) navbar.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');

  document.querySelectorAll('.dropdown.open').forEach(d => {
    d.classList.remove('open');
    const toggle = d.querySelector('.dropdown-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
}

// Close menus when clicking outside or when window is resized (desktop/mobile switch)
function attachAutoCloseHandlers() {
  // click outside
  document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (!navbar.contains(e.target)) {
      closeMenu();
    }
  });

  // on resize, ensure mobile/desktop state resets
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => closeMenu(), 200);
  });

  // mouseleave auto-close for desktop hovered dropdowns
  document.querySelectorAll('.dropdown').forEach(drop => {
    let leaveTimer = null;
    drop.addEventListener('mouseenter', () => {
      if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
    });
    drop.addEventListener('mouseleave', () => {
      // close after short delay to avoid accidental close while moving
      leaveTimer = setTimeout(() => {
        drop.classList.remove('open');
        const toggle = drop.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }, 250);
    });
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachAutoCloseHandlers);
else attachAutoCloseHandlers();

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachHamburgerHandler);
else attachHamburgerHandler();

function cargarSeccion(nombre) {
  const contenedor = document.getElementById('contenedor-dinamico');
  if (!contenedor) return;
  contenedor.style.opacity = '0';
  setTimeout(() => {
    contenedor.innerHTML = secciones[nombre] || secciones['inicio'];
    contenedor.style.opacity = '1';
    // Ajustar scroll para enfoque en contenido dinámico
    window.scrollTo({ top: contenedor.offsetTop - 120, behavior: 'smooth' });
    // Cerrar menú y submenús al cambiar de sección (móvil/desktop)
    closeMenu();
  }, 250);
}

// Export for debugging (optional)
window.__secciones = secciones;
