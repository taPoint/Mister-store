document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".reviews__slider");
  const slides = document.querySelectorAll(".reviews__slide");
  const prevBtn = document.querySelector(".reviews__arrow--prev");
  const nextBtn = document.querySelector(".reviews__arrow--next");
  let currentIndex = 0;
  let isAnimating = false;

  // Initialize slider
  function initSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next");

      if (index === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.add(index < currentIndex ? "prev" : "next");
      }
    });
  }

  // Update slider position
  function updateSlider(direction) {
    if (isAnimating) return;
    isAnimating = true;

    // Calculate new index
    if (direction === "prev") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else {
      currentIndex = (currentIndex + 1) % slides.length;
    }

    // Update classes
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next");

      if (index === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.add(index < currentIndex ? "prev" : "next");
      }
    });

    // Reset animation lock
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }

  // Event listeners
  prevBtn.addEventListener("click", () => updateSlider("prev"));
  nextBtn.addEventListener("click", () => updateSlider("next"));

  // Initialize
  initSlider();

  // Optional: Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") updateSlider("prev");
    if (e.key === "ArrowRight") updateSlider("next");
  });

  // Optional: Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  slider.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) updateSlider("next");
      if (touchEndX > touchStartX + 50) updateSlider("prev");
    },
    { passive: true }
  );
});

// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      mobileToggle.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    // Close menu when clicking on menu links
    const menuLinks = document.querySelectorAll(".header__menu-link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        mobileToggle.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
        nav.classList.remove("active");
        mobileToggle.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        nav.classList.remove("active");
        mobileToggle.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  }
});
