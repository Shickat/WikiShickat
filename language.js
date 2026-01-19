// Sistema de Multiidioma para Wiki Shickat

const translations = {
  es: {
    filterByLanguage: 'Filtrar por idioma:',
    filterByCategory: 'Filtrar por categoría:',
    telegramRequirements: 'Para unirte al grupo, necesitas cumplir con estos requisitos:',
    requirement1: 'Tener una foto de perfil visible',
    requirement2: 'Tener un nombre de usuario (@usuario) público',
    requirement3: 'Ambos deben estar visibles para todos los miembros',
    joinButton: 'Solicitar Entrar',
    filterNoData: 'No hay resultados disponibles con los filtros aplicados.',
    filterNoDataButton: 'Limpiar filtros',
    tooltipListado: 'Listado',
    tooltipOficial: 'Oficial',
    tooltipVPN: 'VPN',
    tooltipF1: 'Fórmula 1',
    tooltipVODs: 'Repeticiones',
    tooltipEventos: 'Eventos',
    downloadApp: 'DESCARGA LA APP',
    downloadLink: 'Descarga aqui (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: 'Lleva la wiki sin abrir el navegador y recibe contenido actualizado.',
    appModalCodeLabel: 'Código Downloader:',
    appModalVersion: 'Versión v1',
    appModalDownload: 'Descargar',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'BUSCADORES ACESTREAM',
      'ONLINE': 'EN LINEA',
      'PROGRAMACION': 'PROGRAMACIÓN',
      'REPETICIONES': 'REPETICIONES',
      'MYLINKPASTE CODIGOS': 'CÓDIGOS MYLINKPASTE',
      'FAVORITOS': 'FAVORITOS'
    }
  },
  en: {
    filterByLanguage: 'Filter by language:',
    filterByCategory: 'Filter by category:',
    telegramRequirements: 'To join the group, you need to meet these requirements:',
    requirement1: 'Have a visible profile picture',
    requirement2: 'Have a public username (@username)',
    requirement3: 'Both must be visible to all members',
    joinButton: 'Request to Join',
    filterNoData: 'No results available with applied filters.',
    filterNoDataButton: 'Clear filters',
    tooltipListado: 'Playlist',
    tooltipOficial: 'Official',
    tooltipVPN: 'VPN',
    tooltipF1: 'Formula 1',
    tooltipVODs: 'Replays',
    tooltipEventos: 'Events',
    downloadApp: 'DOWNLOAD THE APP',
    downloadLink: 'Download here (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: 'Use the wiki without opening the browser and get updated content.',
    appModalCodeLabel: 'Downloader Code:',
    appModalVersion: 'Version v1',
    appModalDownload: 'Download',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'ACESTREAM SEARCH',
      'ONLINE': 'ONLINE',
      'PROGRAMACION': 'PROGRAMMING',
      'REPETICIONES': 'REPLAYS',
      'MYLINKPASTE CODIGOS': 'MYLINKPASTE CODES',
      'FAVORITOS': 'FAVORITES'
    }
  },
  fr: {
    filterByLanguage: 'Filtrer par langue:',
    filterByCategory: 'Filtrer par catégorie:',
    telegramRequirements: 'Pour rejoindre le groupe, vous devez respecter ces conditions:',
    requirement1: 'Avoir une photo de profil visible',
    requirement2: 'Avoir un nom d\'utilisateur (@username) public',
    requirement3: 'Les deux doivent être visibles pour tous les membres',
    joinButton: 'Demander à Rejoindre',
    filterNoData: 'Aucun résultat disponible avec les filtres appliqués.',
    filterNoDataButton: 'Effacer les filtres',
    tooltipListado: 'Playlist',
    tooltipOficial: 'Officiel',
    tooltipVPN: 'VPN',
    tooltipF1: 'Formule 1',
    tooltipVODs: 'Rediffusions',
    tooltipEventos: 'Événements',
    downloadApp: 'TÉLÉCHARGER L\'APPLICATION',
    downloadLink: 'Télécharger ici (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: 'Utilisez la wiki sans ouvrir le navigateur et recevez du contenu mis à jour.',
    appModalCodeLabel: 'Code de téléchargement:',
    appModalVersion: 'Version v1',
    appModalDownload: 'Télécharger',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'RECHERCHE ACESTREAM',
      'ONLINE': 'EN LIGNE',
      'PROGRAMACION': 'PROGRAMMATION',
      'REPETICIONES': 'REPLAYS',
      'MYLINKPASTE CODIGOS': 'CODES MYLINKPASTE',
      'FAVORITOS': 'FAVORIS'
    }
  },
  pt: {
    filterByLanguage: 'Filtrar por idioma:',
    filterByCategory: 'Filtrar por categoria:',
    telegramRequirements: 'Para se juntar ao grupo, você precisa cumprir estes requisitos:',
    requirement1: 'Ter uma foto de perfil visível',
    requirement2: 'Ter um nome de usuário público (@usuario)',
    requirement3: 'Ambos devem estar visíveis para todos os membros',
    joinButton: 'Solicitar Entrada',
    filterNoData: 'Nenhum resultado disponível com os filtros aplicados.',
    filterNoDataButton: 'Limpar filtros',
    tooltipListado: 'Playlist',
    tooltipOficial: 'Oficial',
    tooltipVPN: 'VPN',
    tooltipF1: 'Fórmula 1',
    tooltipVODs: 'Repetições',
    tooltipEventos: 'Eventos',
    downloadApp: 'BAIXE O APP',
    downloadLink: 'Baixar aqui (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: 'Leve a wiki sem abrir o navegador e receba conteúdo atualizado.',
    appModalCodeLabel: 'Código do Downloader:',
    appModalVersion: 'Versão v1',
    appModalDownload: 'Baixar',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'PESQUISADORES ACESTREAM',
      'ONLINE': 'ONLINE',
      'PROGRAMACION': 'PROGRAMAÇÃO',
      'REPETICIONES': 'REPLAYS',
      'MYLINKPASTE CODIGOS': 'CÓDIGOS MYLINKPASTE',
      'FAVORITOS': 'FAVORITOS'
    }
  },
  de: {
    filterByLanguage: 'Nach Sprache filtern:',
    filterByCategory: 'Nach Kategorie filtern:',
    telegramRequirements: 'Um der Gruppe beizutreten, müssen Sie diese Anforderungen erfüllen:',
    requirement1: 'Ein sichtbares Profilbild haben',
    requirement2: 'Einen öffentlichen Benutzernamen (@Benutzername) haben',
    requirement3: 'Beide müssen für alle Mitglieder sichtbar sein',
    joinButton: 'Beitrittsanfrage senden',
    filterNoData: 'Keine Ergebnisse mit den angewendeten Filtern verfügbar.',
    filterNoDataButton: 'Filter zurücksetzen',
    tooltipListado: 'Playlist',
    tooltipOficial: 'Offiziell',
    tooltipVPN: 'VPN',
    tooltipF1: 'Formel 1',
    tooltipVODs: 'Wiederholungen',
    tooltipEventos: 'Ereignisse',
    downloadApp: 'APP HERUNTERLADEN',
    downloadLink: 'Hier herunterladen (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: 'Nutze die Wiki ohne den Browser zu öffnen und erhalte aktualisierte Inhalte.',
    appModalCodeLabel: 'Downloader-Code:',
    appModalVersion: 'Version v1',
    appModalDownload: 'Herunterladen',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'ACESTREAM-SUCHEN',
      'ONLINE': 'ONLINE',
      'PROGRAMACION': 'PROGRAMMIERUNG',
      'REPETICIONES': 'WIEDERHOLUNGEN',
      'MYLINKPASTE CODIGOS': 'MYLINKPASTE-CODES',
      'FAVORITOS': 'FAVORITEN'
    }
  },
  ru: {
    filterByLanguage: 'Фильтр по языку:',
    filterByCategory: 'Фильтр по категории:',
    telegramRequirements: 'Чтобы присоединиться к группе, вы должны соответствовать этим требованиям:',
    requirement1: 'Иметь видимую фотографию профиля',
    requirement2: 'Иметь публичное имя пользователя (@username)',
    requirement3: 'Оба должны быть видны всем членам',
    joinButton: 'Запросить Вступление',
    filterNoData: 'Нет доступных результатов с примененными фильтрами.',
    filterNoDataButton: 'Очистить фильтры',
    tooltipListado: 'Плейлист',
    tooltipOficial: 'Официальный',
    tooltipVPN: 'VPN',
    tooltipF1: 'Формула 1',
    tooltipVODs: 'Повторы',
    tooltipEventos: 'События',
    downloadApp: 'СКАЧАТЬ ПРИЛОЖЕНИЕ',
    downloadLink: 'Скачать здесь (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: 'Пользуйтесь вики без открытия браузера и получайте обновлённый контент.',
    appModalCodeLabel: 'Код загрузчика:',
    appModalVersion: 'Версия v1',
    appModalDownload: 'Скачать',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'ПОИСК ACESTREAM',
      'ONLINE': 'ОНЛАЙН',
      'PROGRAMACION': 'ПРОГРАММИРОВАНИЕ',
      'REPETICIONES': 'ПОВТОРЕНИЯ',
      'MYLINKPASTE CODIGOS': 'КОДЫ MYLINKPASTE',
      'FAVORITOS': 'ИЗБРАННОЕ'
    }
  },
  zh: {
    filterByLanguage: '按语言过滤:',
    filterByCategory: '按类别过滤:',
    telegramRequirements: '要加入群组，您需要满足以下要求:',
    requirement1: '拥有可见的个人资料图片',
    requirement2: '拥有公开的用户名 (@username)',
    requirement3: '两者对所有成员可见',
    joinButton: '请求加入',
    filterNoData: '应用过滤器后没有可用结果。',
    filterNoDataButton: '清除过滤器',
    tooltipListado: '播放列表',
    tooltipOficial: '官方',
    tooltipVPN: 'VPN',
    tooltipF1: '一级方程式',
    tooltipVODs: '重播',
    tooltipEventos: '赛事',
    downloadApp: '下载应用',
    downloadLink: '点击这里下载 (APK Mylinkpaste v4.1)',
    appModalTitle: 'WIKI SHICKAT APP',
    appModalDesc: '无需打开浏览器即可使用维基，并获取更新内容。',
    appModalCodeLabel: '下载器代码:',
    appModalVersion: '版本 v1',
    appModalDownload: '下载',
    categories: {
      'ACESTREAM': 'ACESTREAM',
      'BUSCADORES ACESTREAM': 'ACESTREAM 搜索',
      'ONLINE': '在线',
      'PROGRAMACION': '编程',
      'REPETICIONES': '重播',
      'MYLINKPASTE CODIGOS': 'MYLINKPASTE 代码',
      'FAVORITOS': '收藏夹'
    }
  }
};

class LanguageManager {
  constructor() {
    this.currentLanguage = this.loadLanguage();
    this.init();
  }

  loadLanguage() {
    const saved = localStorage.getItem('wikiShickatLanguage');
    return saved || 'es';
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('wikiShickatLanguage', lang);
      this.updateUI();
    }
  }

  getTranslation(key, category = null) {
    const trans = translations[this.currentLanguage];
    
    if (category && trans.categories && trans.categories[category]) {
      return trans.categories[category];
    }
    
    return trans[key] || key;
  }

  init() {
    this.createLanguageSelector();
    this.updateUI();
  }

  createLanguageSelector() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;

    // Crear contenedor para el selector de idioma
    const langSelector = document.createElement('div');
    langSelector.className = 'language-selector';
    langSelector.innerHTML = `
      <button class="language-toggle" title="Cambiar idioma">
        <img src="Flags/Spain.svg" alt="Language" class="language-flag">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="language-dropdown">
        <button class="language-option" data-lang="es">
          <img src="Flags/Spain.svg" alt="Español" class="flag-option">
          <span>Español</span>
        </button>
        <button class="language-option" data-lang="en">
          <img src="Flags/USA.svg" alt="English" class="flag-option">
          <span>English</span>
        </button>
        <button class="language-option" data-lang="fr">
          <img src="Flags/France.svg" alt="Français" class="flag-option">
          <span>Français</span>
        </button>
        <button class="language-option" data-lang="pt">
          <img src="Flags/Portugal.svg" alt="Português" class="flag-option">
          <span>Português</span>
        </button>
        <button class="language-option" data-lang="de">
          <img src="Flags/Germany.svg" alt="Deutsch" class="flag-option">
          <span>Deutsch</span>
        </button>
        <button class="language-option" data-lang="ru">
          <img src="Flags/Russia.svg" alt="Русский" class="flag-option">
          <span>Русский</span>
        </button>
        <button class="language-option" data-lang="zh">
          <img src="Flags/China.svg" alt="中文" class="flag-option">
          <span>中文</span>
        </button>
      </div>
    `;

    // Insertar antes del theme-toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.parentElement.insertBefore(langSelector, themeToggle);
    } else {
      headerActions.appendChild(langSelector);
    }

    this.attachLanguageSelectorEvents();
  }

  attachLanguageSelectorEvents() {
    const toggle = document.querySelector('.language-toggle');
    const dropdown = document.querySelector('.language-dropdown');
    const options = document.querySelectorAll('.language-option');

    if (!toggle || !dropdown) return;

    // Mapeo de idiomas a banderas
    const languageFlags = {
      'es': 'Flags/Spain.svg',
      'en': 'Flags/USA.svg',
      'fr': 'Flags/France.svg',
      'pt': 'Flags/Portugal.svg',
      'de': 'Flags/Germany.svg',
      'ru': 'Flags/Russia.svg',
      'zh': 'Flags/China.svg'
    };

    // Abrir/cerrar dropdown
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Cerrar dropdown al hacer click afuera
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector')) {
        dropdown.classList.remove('show');
      }
    });

    // Seleccionar idioma
    options.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        this.setLanguage(lang);
        dropdown.classList.remove('show');
        
        // Actualizar bandera del botón principal
        const flag = toggle.querySelector('.language-flag');
        const newFlagSrc = languageFlags[lang] || 'Flags/Spain.svg';
        flag.src = newFlagSrc;
      });
    });

    // Establecer bandera inicial
    const flag = toggle.querySelector('.language-flag');
    const initialFlagSrc = languageFlags[this.currentLanguage] || 'Flags/Spain.svg';
    flag.src = initialFlagSrc;
  }

  updateUI() {
    this.updateFilterLabels();
    this.updateCategoryTitles();
    this.updateCategoryLabels();
    this.updateTooltips();
    this.updateFilterNoDataModal();
    this.updateTelegramModal();
    this.updateDownloadTexts();
    this.updateAppModal();
  }

  updateFilterLabels() {
    // Actualizar etiqueta de filtro por idioma
    const langLabel = document.querySelector('#filter-wrapper label');
    if (langLabel) {
      langLabel.textContent = this.getTranslation('filterByLanguage');
    }

    // Actualizar etiqueta de filtro por categoría
    const catLabel = document.querySelector('#category-filter-wrapper label');
    if (catLabel) {
      catLabel.textContent = this.getTranslation('filterByCategory');
    }
  }

  updateTooltips() {
    // Mapeo de tooltips a claves de traducción (claves originales en inglés)
    const tooltipMap = {
      'Listado': 'tooltipListado',
      'Oficial': 'tooltipOficial',
      'VPN': 'tooltipVPN',
      'Formula 1': 'tooltipF1',
      'Fórmula 1': 'tooltipF1',  // También aceptar con acento
      'VODs': 'tooltipVODs',
      'Eventos': 'tooltipEventos'
    };

    // Actualizar todos los elementos con atributo data-tooltip
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      // Si no tiene data-tooltip-key guardado, guardarlo ahora
      if (!element.getAttribute('data-tooltip-key')) {
        const currentTooltip = element.getAttribute('data-tooltip');
        const translationKey = tooltipMap[currentTooltip];
        if (translationKey) {
          element.setAttribute('data-tooltip-key', translationKey);
        }
      }
      
      // Obtener la clave de traducción
      const translationKey = element.getAttribute('data-tooltip-key');
      if (translationKey) {
        // Obtener la traducción actual
        const translatedTooltip = this.getTranslation(translationKey);
        // Actualizar el atributo data-tooltip con la traducción
        element.setAttribute('data-tooltip', translatedTooltip);
      }
    });
  }

  updateCategoryTitles() {
    // Actualizar títulos de categorías (h2)
    document.querySelectorAll('.category-title').forEach(titleElement => {
      // Si no existe data-original, guardarlo
      if (!titleElement.getAttribute('data-original')) {
        titleElement.setAttribute('data-original', titleElement.textContent.trim());
      }
      
      const originalText = titleElement.getAttribute('data-original');
      const translatedText = this.getTranslation('categories', originalText) || originalText;
      titleElement.textContent = translatedText;
    });
  }

  updateCategoryLabels() {
    // Actualizar labels de radio buttons de categorías
    document.querySelectorAll('.category-checkbox-group').forEach(group => {
      const radio = group.querySelector('input[type="radio"]');
      const label = group.querySelector('label');
      
      if (radio && label) {
        // Obtener el valor original del atributo data-original
        const originalValue = radio.getAttribute('data-original') || radio.value;
        const translatedText = this.getTranslation('categories', originalValue) || originalValue;
        label.textContent = translatedText;
      }
    });
  }

  updateFilterNoDataModal() {
    // Actualizar mensaje de "No hay datos" en el filtro
    const noDataText = document.querySelector('.no-results-text');
    if (noDataText) {
      noDataText.textContent = this.getTranslation('filterNoData');
    }

    // Actualizar botón de limpiar filtros
    const modalBtn = document.querySelector('.clear-filters-btn');
    if (modalBtn) {
      modalBtn.textContent = this.getTranslation('filterNoDataButton');
    }
  }

  updateTelegramModal() {
    // Limitar las actualizaciones al modal de Telegram si existe la lista de requisitos
    const listElem = document.querySelector('.requisitos-list');
    if (!listElem) return;

    const container = listElem.closest('.modal-content') || document;

    const requisitosText = container.querySelector('.requisitos-text');
    if (requisitosText) {
      requisitosText.textContent = this.getTranslation('telegramRequirements');
    }

    const requisitos = listElem.querySelectorAll('li');
    if (requisitos.length >= 3) {
      requisitos[0].textContent = this.getTranslation('requirement1');
      requisitos[1].textContent = this.getTranslation('requirement2');
      requisitos[2].textContent = this.getTranslation('requirement3');
    }

    const modalBtn = container.querySelector('.modal-btn');
    if (modalBtn) {
      modalBtn.textContent = this.getTranslation('joinButton');
    }
  }

  updateDownloadTexts() {
    // Actualizar título de descarga de APP
    const downloadTitle = document.querySelector('[data-translate-key="downloadApp"]');
    if (downloadTitle) {
      downloadTitle.textContent = this.getTranslation('downloadApp');
    }

    // Actualizar enlace de descarga
    const downloadLink = document.querySelector('[data-translate-key="downloadLink"]');
    if (downloadLink) {
      downloadLink.textContent = this.getTranslation('downloadLink');
    }
  }

  updateAppModal() {
    const appModal = document.getElementById('app-modal');
    if (!appModal) return;

    const title = appModal.querySelector('.requisitos-text');
    if (title) {
      title.textContent = this.getTranslation('appModalTitle');
    }

    const subtexts = appModal.querySelectorAll('.requisitos-subtext');
    if (subtexts[0]) {
      subtexts[0].textContent = this.getTranslation('appModalDesc');
    }
    if (subtexts[1]) {
      const codeValue = subtexts[1].querySelector('i') ? subtexts[1].querySelector('i').textContent.trim() : '';
      subtexts[1].innerHTML = `${this.getTranslation('appModalCodeLabel')} <i>${codeValue}</i>`;
    }
    if (subtexts[2]) {
      subtexts[2].textContent = this.getTranslation('appModalVersion');
    }

    const downloadBtn = appModal.querySelector('.modal-btn');
    if (downloadBtn) {
      downloadBtn.textContent = this.getTranslation('appModalDownload');
    }
  }
}

// Inicializar el gestor de idiomas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  window.languageManager = new LanguageManager();
});
