// ========== СИСТЕМА АНИМАЦИЙ ДЛЯ САЙТА MISTER ==========

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация системы анимаций
  initializeAnimations();

  // Создаем observer для отслеживания элементов
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          // Прекращаем наблюдение после анимации
          animationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Запускаем наблюдение за всеми анимируемыми элементами
  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-in-down, .fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale, " +
      ".hero-title, .hero-subtitle, .hero-description, .hero-buttons, " +
      ".section-title, .section-subtitle, .about-card, .category-card, " +
      ".advantage-item, .product-card, .gallery-item, .review-slide, " +
      ".contact-info, .form-group, .bonus-glow, .wave-effect"
  );

  animatedElements.forEach((el) => {
    animationObserver.observe(el);
  });
});

function initializeAnimations() {
  // Применяем анимации к различным секциям
  setupHeroAnimations();
  setupAboutAnimations();
  setupCategoriesAnimations();
  setupAdvantagesAnimations();
  setupReviewsAnimations();
  setupGalleryAnimations();
  setupProductsAnimations();
  setupContactsAnimations();
  setupBonusAnimations();
}

function setupHeroAnimations() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Главный заголовок
  const mainTitle = hero.querySelector(".hero__main-title");
  if (mainTitle) {
    mainTitle.classList.add("hero-title");
  }

  // Подзаголовок
  const subtitle = hero.querySelector(".hero__subtitle");
  if (subtitle) {
    subtitle.classList.add("hero-subtitle");
  }

  // Описание
  const description = hero.querySelector(".hero__description");
  if (description) {
    description.classList.add("hero-description");
  }

  // Кнопки
  const buttons = hero.querySelector(".hero__buttons");
  if (buttons) {
    buttons.classList.add("hero-buttons");
  }
}

function setupAboutAnimations() {
  const about = document.querySelector(".about");
  if (!about) return;

  // Заголовок секции
  const title = about.querySelector(".about__title");
  if (title) {
    title.classList.add("fade-in-down");
  }

  // Подзаголовок
  const subtitle = about.querySelector(".about__subtitle");
  if (subtitle) {
    subtitle.classList.add("fade-in", "delay-1");
  }

  // Описание
  const description = about.querySelector(".about__description");
  if (description) {
    description.classList.add("fade-in", "delay-2");
  }

  // Карточки
  const cards = about.querySelectorAll(".about__card");
  cards.forEach((card, index) => {
    card.classList.add("fade-in-card", `delay-${Math.min(index + 3, 8)}`);
  });
}

function setupCategoriesAnimations() {
  const categories = document.querySelector(".categories");
  if (!categories) return;

  // Заголовок
  const title = categories.querySelector(".categories__title");
  if (title) {
    title.classList.add("fade-in-down");
  }

  // Описание
  const description = categories.querySelector(".about__description");
  if (description) {
    description.classList.add("fade-in", "delay-1");
  }

  // Карточки категорий
  const cards = categories.querySelectorAll(".categories__card");
  cards.forEach((card, index) => {
    card.classList.add("category-card", `delay-${Math.min(index + 2, 8)}`);
  });
}

function setupAdvantagesAnimations() {
  const advantages = document.querySelector(".advantages");
  if (!advantages) return;

  // Заголовки
  const subtitle = advantages.querySelector(".advantages__subtitle");
  const title = advantages.querySelector(".advantages__title");
  const description = advantages.querySelector(".advantages__description");

  if (subtitle) subtitle.classList.add("fade-in");
  if (title) title.classList.add("fade-in-down", "delay-1");
  if (description) description.classList.add("fade-in", "delay-2");

  // Элементы преимуществ
  const items = advantages.querySelectorAll(".advantages__item");
  items.forEach((item, index) => {
    item.classList.add("advantage-item", `delay-${Math.min(index + 3, 8)}`);
  });
}

function setupReviewsAnimations() {
  const reviews = document.querySelector(".reviews");
  if (!reviews) return;

  // Заголовок и подзаголовок
  const title = reviews.querySelector(".reviews__title");
  const subtitle = reviews.querySelector(".reviews__subtitle");

  if (title) title.classList.add("fade-in-down");
  if (subtitle) subtitle.classList.add("fade-in", "delay-1");

  // Слайды отзывов
  const slides = reviews.querySelectorAll(".reviews__slide");
  slides.forEach((slide, index) => {
    slide.classList.add("review-slide", `delay-${Math.min(index + 2, 8)}`);
  });

  // Элементы управления
  const controls = reviews.querySelector(".reviews__controls");
  if (controls) {
    controls.classList.add("fade-in-scale", "delay-4");
  }
}

function setupGalleryAnimations() {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  // Заголовки
  const title = gallery.querySelector(".gallery__title");
  const subtitle = gallery.querySelector(".gallery__subtitle");

  if (title) title.classList.add("fade-in-down");
  if (subtitle) subtitle.classList.add("fade-in", "delay-1");

  // Элементы галереи
  const items = gallery.querySelectorAll(".gallery__item");
  items.forEach((item, index) => {
    item.classList.add("gallery-item", `delay-${Math.min(index + 2, 8)}`);
  });
}

function setupProductsAnimations() {
  const products = document.querySelector(".products");
  if (!products) return;

  // Заголовки
  const title = products.querySelector(".products__title");
  const subtitle = products.querySelector(".products__subtitle");

  if (title) title.classList.add("fade-in-down");
  if (subtitle) subtitle.classList.add("fade-in", "delay-1");

  // Карточки товаров
  const cards = products.querySelectorAll(".products__card");
  cards.forEach((card, index) => {
    card.classList.add("product-card", `delay-${Math.min(index + 2, 8)}`);
  });

  // Ссылка "Посмотреть все"
  const moreLink = products.querySelector(".products__more");
  if (moreLink) {
    moreLink.classList.add("fade-in-scale", "delay-6");
  }
}

function setupContactsAnimations() {
  const contacts = document.querySelector(".contacts");
  if (!contacts) return;

  // Заголовки
  const title = contacts.querySelector(".contacts__title");
  const subtitle = contacts.querySelector(".contacts__subtitle");

  if (title) title.classList.add("fade-in-left");
  if (subtitle) subtitle.classList.add("fade-in-left", "delay-1");

  // Контактная информация
  const addressItems = contacts.querySelectorAll(".contacts__address-text");
  addressItems.forEach((item, index) => {
    item.classList.add("fade-in-left", `delay-${Math.min(index + 2, 8)}`);
  });

  // Форма
  const formGroups = contacts.querySelectorAll(".feedback-form__group");
  formGroups.forEach((group, index) => {
    group.classList.add("form-group", `delay-${Math.min(index + 1, 8)}`);
  });

  const submitBtn = contacts.querySelector(".feedback-form__submit");
  if (submitBtn) {
    submitBtn.classList.add("fade-in-right", "delay-5");
  }

  // Карта
  const map = contacts.querySelector(".contacts__map");
  if (map) {
    map.classList.add("fade-in-scale", "delay-3");
  }
}

function setupBonusAnimations() {
  const bonus = document.querySelector(".bonus");
  if (!bonus) return;

  // Заголовок
  const title = bonus.querySelector(".bonus__title");
  if (title) {
    title.classList.add("fade-in-down");
  }

  // Описание
  const description = bonus.querySelector(".bonus__description");
  if (description) {
    description.classList.add("fade-in", "delay-1");
  }

  // Кнопки
  const actions = bonus.querySelector(".bonus__actions");
  if (actions) {
    actions.classList.add("fade-in-scale", "delay-2");
  }
}

// ========== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ==========

// Функция для добавления анимации к конкретному элементу
window.addAnimation = function (element, animationType = "fade-in", delay = 0) {
  if (!element) return;

  element.classList.add(animationType);
  if (delay > 0) {
    element.classList.add(`delay-${Math.min(delay, 8)}`);
  }

  // Создаем observer для этого элемента
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
};

// Функция для запуска анимации всех элементов (для тестирования)
window.triggerAllAnimations = function () {
  const elements = document.querySelectorAll(
    ".fade-in, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale, .fade-in-card, " +
      ".hero-title, .hero-subtitle, .hero-description, .hero-buttons, " +
      ".category-card, .product-card, .gallery-item, .review-slide, .advantage-item, .form-group, .fade-in-glow"
  );

  elements.forEach((el) => {
    el.classList.add("animate-in");
  });
};

// Функция для сброса всех анимаций (для тестирования)
window.resetAllAnimations = function () {
  const elements = document.querySelectorAll(
    ".fade-in, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale, .fade-in-card, " +
      ".hero-title, .hero-subtitle, .hero-description, .hero-buttons, " +
      ".category-card, .product-card, .gallery-item, .review-slide, .advantage-item, .form-group, .fade-in-glow"
  );

  elements.forEach((el) => {
    el.classList.remove("animate-in");
  });
};

// Эффект параллакса для hero секции (опционально)
function setupParallaxEffect() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    if (hero.offsetTop + hero.offsetHeight > scrolled) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Раскомментируйте для включения параллакса
// setupParallaxEffect();
