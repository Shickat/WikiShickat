// --- Copiar al portapapeles ---
function copiarAlPortapapeles(texto, btn) {
      navigator.clipboard.writeText(texto).then(() => {
        mostrarNotificacion('¡Enlace copiado al portapapeles!');
      });
    }
function mostrarNotificacion(msg) {
  const notif = document.getElementById('notification');
  notif.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${msg}`;
  notif.classList.add('show');
  setTimeout(() => {
    notif.classList.remove('show');
  }, 1800);
}

// --- Buscador de canales ---
function normalizarTexto(txt) {
  return txt
    .toLowerCase()
    .replace(/\s+/g, '') // quita espacios
    .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // quita acentos
}

const buscador = document.getElementById('buscador');
const formBtn = document.querySelector('.form-btn');
const languageCheckboxesContainer = document.getElementById('language-checkboxes');
const categoryCheckboxesContainer = document.getElementById('category-checkboxes');

function obtenerCategoriasUnicas() {
  const categorias = [];
  document.querySelectorAll('.category-title').forEach(title => {
    // Usar data-original si existe (valor del HTML sin traducir), sino usar textContent
    const texto = (title.getAttribute('data-original') || title.textContent).trim();
    if (texto && !categorias.includes(texto)) {
      categorias.push(texto);
    }
  });
  return categorias;
}

function aplicarFiltros() {
  const texto = normalizarTexto(buscador.value || '');
  
  // Obtener idiomas seleccionados
  const checkboxesSeleccionados = document.querySelectorAll('.language-checkbox-group input[type="checkbox"]:checked');
  const idiomasSeleccionados = Array.from(checkboxesSeleccionados).map(cb => cb.value);

  // Obtener categoría seleccionada
  const categoriaSeleccionada = document.querySelector('.category-checkbox-group input[type="radio"]:checked');
  const categoriaSeleccionadaValor = categoriaSeleccionada ? categoriaSeleccionada.value : null;

  document.querySelectorAll('.canal-card').forEach(card => {
    const titulo = normalizarTexto(card.querySelector('.canal-nombre').textContent || '');
    const cardLangs = (card.getAttribute('data-lang') || '').split(',').map(s => s.trim());

    const pasaTexto = texto === '' ? true : titulo.includes(texto);
    
    // Si no hay idiomas seleccionados, mostrar todo; si hay, verificar si alguno coincide
    const pasaIdioma = idiomasSeleccionados.length === 0 ? true : cardLangs.some(lang => idiomasSeleccionados.includes(lang));

    card.style.display = (pasaTexto && pasaIdioma) ? '' : 'none';
  });

  // Filtrar por categoría
  document.querySelectorAll('.category-section').forEach(section => {
    const titleElement = section.querySelector('.category-title');
    // Usar data-original para comparación (para que funcione con idiomas traducidos)
    const titulo = titleElement.getAttribute('data-original') || titleElement.textContent.trim();
    
    if (categoriaSeleccionadaValor === null || titulo === categoriaSeleccionadaValor) {
      // Mostrar u ocultar según el filtro de texto e idioma
      const tarjetasVisibles = Array.from(section.querySelectorAll('.canal-card')).filter(card => card.style.display !== 'none');
      section.style.display = tarjetasVisibles.length > 0 ? '' : 'none';
    } else {
      section.style.display = 'none';
    }
  });

  // Manejo seguro del formBtn (si existe)
  if (formBtn) {
    if (texto.length > 0) formBtn.style.display = 'none'; else formBtn.style.display = '';
  }
  
  // Mostrar mensaje si no hay resultados visibles (comprobando visibilidad real)
  function isElementVisible(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
  const totalVisibles = Array.from(document.querySelectorAll('.canal-card')).filter(c => isElementVisible(c)).length;
  const noResultsEl = document.getElementById('no-results');
  if (noResultsEl) {
    if (totalVisibles === 0) {
      noResultsEl.style.display = 'block';
    } else {
      noResultsEl.style.display = 'none';
    }
  }
}

buscador && buscador.addEventListener('input', aplicarFiltros);

// --- POBLAR CHECKBOXES DE IDIOMAS Y PERSISTENCIA ---
function obtenerIdiomasUnicos() {
  const counts = {};
  document.querySelectorAll('.canal-card').forEach(card => {
    const langs = (card.getAttribute('data-lang') || '').split(',').map(s => s.trim()).filter(Boolean);
    langs.forEach(l => {
      if (!l) return;
      counts[l] = (counts[l] || 0) + 1;
    });
  });
  // Ordenar por frecuencia descendente, luego por código ascendente para consistencia
  return Object.keys(counts).sort((a, b) => {
    const diff = (counts[b] || 0) - (counts[a] || 0);
    return diff !== 0 ? diff : a.localeCompare(b);
  });
}

function llenarFiltroIdiomas() {
  if (!languageCheckboxesContainer) return;
  const idiomas = obtenerIdiomasUnicos();
  
  // Mapeo de códigos de idioma a rutas de archivos SVG
  const languageFlags = {
    'es': 'Flags/Spain.svg',
    'en': 'Flags/USA.svg',
    'uk': 'Flags/UK.svg',
    'fr': 'Flags/France.svg',
    'de': 'Flags/Germany.svg',
    'ru': 'Flags/Russia.svg',
    'pl': 'Flags/Poland.svg',
    'zh': 'Flags/China.svg',
    'pt': 'Flags/Portugal.svg',
    'tr': 'Flags/Turkey.svg',
    'ua': 'Flags/Ukraine.svg',
    'nl': 'Flags/Netherlands.svg',
    'it': 'Flags/Italy.svg',
    'ja': 'Flags/Japan.svg',
    'br': 'Flags/Brazil.svg',
    'in': 'Flags/India.svg',
    'ar': 'Flags/SaudiArabia.svg',
    'sr': 'Flags/Serbia.svg',
    'he': 'Flags/Israel.svg',
    
  };
  
  // Crear checkboxes
  idiomas.forEach(code => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'language-checkbox-group';
    groupDiv.title = code.toUpperCase();
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `lang-${code}`;
    input.value = code;
    input.className = 'lang-checkbox';
    
    const label = document.createElement('label');
    label.htmlFor = `lang-${code}`;
    
    const img = document.createElement('img');
    const flagPath = languageFlags[code] || 'Flags/Default.svg';
    img.src = flagPath;
    img.alt = code.toUpperCase();
    img.className = 'flag-icon';
    label.appendChild(img);
    
    groupDiv.appendChild(input);
    groupDiv.appendChild(label);
    languageCheckboxesContainer.appendChild(groupDiv);
  });

  // Restaurar selección guardada
  const saved = localStorage.getItem('langFiltersSelected');
  if (saved) {
    const savedLangs = JSON.parse(saved);
    savedLangs.forEach(lang => {
      const checkbox = document.getElementById(`lang-${lang}`);
      if (checkbox) checkbox.checked = true;
    });
  }

  // Guardar cuando cambian los checkboxes
  document.querySelectorAll('.lang-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const selected = Array.from(document.querySelectorAll('.lang-checkbox:checked')).map(cb => cb.value);
      localStorage.setItem('langFiltersSelected', JSON.stringify(selected));
      aplicarFiltros();
    });
  });
}

function llenarFiltroCategoriasUnicas() {
  if (!categoryCheckboxesContainer) return;
  const categorias = obtenerCategoriasUnicas();
  
  // Crear radios para cada categoría
  categorias.forEach(categoria => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'category-checkbox-group';
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'category-filter';
    input.id = `cat-${categoria}`;
    input.value = categoria;
    input.setAttribute('data-original', categoria);
    input.className = 'category-radio';
    
    const label = document.createElement('label');
    label.htmlFor = `cat-${categoria}`;
    label.textContent = categoria;
    
    groupDiv.appendChild(input);
    groupDiv.appendChild(label);
    categoryCheckboxesContainer.appendChild(groupDiv);
  });

  // Restaurar selección guardada
  const saved = localStorage.getItem('categoryFilterSelected');
  if (saved) {
    const radioButton = document.getElementById(`cat-${saved}`);
    if (radioButton) radioButton.checked = true;
  }

  // Variable para rastrear cuál radio está seleccionado actualmente
  let previouslyChecked = document.querySelector('.category-radio:checked');

  // Guardar cuando cambia el radio button
  document.querySelectorAll('.category-radio').forEach(radio => {
    // Detectar cuando hace click en un radio ya seleccionado
    radio.addEventListener('mousedown', function(e) {
      if (this.checked) {
        previouslyChecked = this;
      }
    });

    radio.addEventListener('change', function() {
      if (this.checked) {
        localStorage.setItem('categoryFilterSelected', this.value);
      }
      aplicarFiltros();
    });

    // Permitir deseleccionar al hacer click nuevamente
    radio.addEventListener('click', function(e) {
      if (previouslyChecked === this && this.checked) {
        // Si ya estaba seleccionado y hace click nuevamente, deseleccionar
        this.checked = false;
        localStorage.removeItem('categoryFilterSelected');
        previouslyChecked = null;
        aplicarFiltros();
      } else {
        previouslyChecked = this;
      }
    });
  });

  // Si el gestor de idiomas ya existe, forzar la traducción de las etiquetas de categorías
  if (window.languageManager && typeof window.languageManager.updateCategoryLabels === 'function') {
    window.languageManager.updateCategoryLabels();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  llenarFiltroIdiomas();
  llenarFiltroCategoriasUnicas();
  aplicarFiltros();
  // Botón para limpiar filtros (si existe en DOM)
  const clearBtn = document.getElementById('clear-filters-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      // Limpiar buscador
      if (buscador) buscador.value = '';
      // Limpiar idiomas
      document.querySelectorAll('.lang-checkbox').forEach(cb => cb.checked = false);
      localStorage.removeItem('langFiltersSelected');
      // Limpiar categoría
      document.querySelectorAll('.category-radio').forEach(r => r.checked = false);
      localStorage.removeItem('categoryFilterSelected');
      aplicarFiltros();
    });
  }
});

// --- Cambiar tema ---
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'light') {
    root.classList.add('light-theme');
    root.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark-theme');
    root.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');

themeToggle.addEventListener('click', function() {
  const isLight = root.classList.contains('light-theme');
  setTheme(isLight ? 'dark' : 'light');
  themeToggle.classList.toggle('active', !isLight);
});

if (root.classList.contains('light-theme')) {
  themeToggle.classList.add('active');
}

// --- Cambia logo aleatoriamente ---
function ponerLogoAleatorio() {
  const total = 41;
  const num = Math.floor(Math.random() * total) + 1;
  const ruta = `Logos/logo${num}.jpg`;
  document.getElementById('logo-img').src = ruta;
}

window.addEventListener('DOMContentLoaded', ponerLogoAleatorio);

// --- Telegram ---
function abrirModalTelegram() {
  document.getElementById('telegram-modal').classList.add('show');
}

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('telegram-modal');
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
  });
  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.classList.remove('show');
    }
  });
});