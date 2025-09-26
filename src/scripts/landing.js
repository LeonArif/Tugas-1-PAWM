document.addEventListener('scroll', function() {
    const home = document.querySelector('.home');
    const homeRect = home.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    let scrolled = Math.max(0, -homeRect.top);
    let totalHeight = home.offsetHeight;
    let progress = Math.min(1.4, scrolled / totalHeight);
    let opacity = progress * 1.2;

    home.style.setProperty('--home-overlay-opacity', opacity);
});

document.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    const contentRect = content.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    let visibleHeight = windowHeight - contentRect.top;
    let totalHeight = content.offsetHeight;

    visibleHeight = Math.max(0, Math.min(visibleHeight, totalHeight));
    let progress = visibleHeight / totalHeight;
    let opacity = Math.min(1.2, progress * 1.4);

    content.style.setProperty('--content-overlay-opacity', opacity);
});

document.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    const contentTulisan = document.querySelector('.content-tulisan');
    const contentRect = content.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (contentRect.top < windowHeight && contentRect.bottom > 0) {
        contentTulisan.classList.add('muncul');
    } else {
        contentTulisan.classList.remove('muncul');
    }

    // const language = document.querySelectorAll('.language');
    // language.forEach(language => {
    //     const languageRect = language.getBoundingClientRect();
    //     if (languageRect.top >= 0 && languageRect.bottom <= windowHeight) {
    //         language.classList.add('muncul');
    //     } else {
    //         language.classList.remove('muncul');
    //     }
    // });

    const carousel = document.querySelector('.carousel-box');
    if (carousel) {
        const carouselRect = carousel.getBoundingClientRect();
        if (carouselRect.top < windowHeight - carouselRect.height / 2 && carouselRect.bottom > 0) {
            carousel.classList.add('muncul');
        } else {
            carousel.classList.remove('muncul');
        }
    }
    
    const title = document.querySelector('.title');
    if (title) {
        const titleRect = title.getBoundingClientRect();
        if (titleRect.top < windowHeight - titleRect.height / 2 && titleRect.bottom > 0) {
            title.classList.add('muncul');
        } else {
            title.classList.remove('muncul');
        }
    }
    
    const geser = document.querySelector('.geser');
    if (geser) {
        const geserRect = geser.getBoundingClientRect();
        if (geserRect.top < windowHeight - geserRect.height / 2 + 100 && geserRect.bottom > 0) {
            geser.classList.add('muncul');
        } else {
            geser.classList.remove('muncul');
        }
    }

    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const subtitleRect = subtitle.getBoundingClientRect();
        if (subtitleRect.top < windowHeight - subtitleRect.height / 2 && subtitleRect.bottom > 0) {
            subtitle.classList.add('muncul');
        } else {
            subtitle.classList.remove('muncul');
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".go-content").forEach(function(el) {
        el.addEventListener("click", function() {
            const content = document.getElementById("content");
            const y = content.getBoundingClientRect().top + window.pageYOffset;
            const extraOffset = 70; 
            window.scrollTo({ top: y + extraOffset, behavior: "smooth" });
        });
    });
});
const slides = document.querySelectorAll('.carousel-box .language');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const carouselBox = document.querySelector('.carousel-box');
let current = 0;
const total = slides.length;
const ANIMATION_DURATION = 400; // ms, sesuaikan dgn transition CSS

let isAnimating = false;

// Update slide posisi
function updateClasses() {
  slides.forEach((slide, i) => {
    slide.classList.remove('left', 'active', 'right', 'hidden', 'muncul');
    const leftIdx = (current - 1 + total) % total;
    const rightIdx = (current + 1) % total;
    if (i === leftIdx) {
      slide.classList.add('left');
    } else if (i === current) {
      slide.classList.add('active', 'muncul');
    } else if (i === rightIdx) {
      slide.classList.add('right');
    } else {
      slide.classList.add('hidden');
    }
  });
}

// Disable semua interaksi saat animasi
function setAnimating(state) {
  isAnimating = state;
  if (state) {
    carouselBox.classList.add('animating');
    nextBtn.disabled = true;
    prevBtn.disabled = true;
  } else {
    carouselBox.classList.remove('animating');
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}

// Next button
nextBtn.onclick = function() {
  if (isAnimating) return;
  setAnimating(true);
  current = (current + 1) % total;
  updateClasses();
  setTimeout(() => setAnimating(false), ANIMATION_DURATION);
};

// Prev button
prevBtn.onclick = function() {
  if (isAnimating) return;
  setAnimating(true);
  current = (current - 1 + total) % total;
  updateClasses();
  setTimeout(() => setAnimating(false), ANIMATION_DURATION);
};

// (Opsional) Cegah hover pada slide selama animasi (dari CSS class)
carouselBox.addEventListener('mouseenter', (e) => {
  if (isAnimating) {
    e.stopPropagation();
    e.preventDefault();
  }
}, true);

// Inisialisasi
updateClasses();

document.querySelectorAll('.language').forEach(function(el) {
    el.style.cursor = el.classList.contains('active') ? "pointer" : "default";
    el.addEventListener('click', function() {
        if (el.classList.contains('active')) {
            const url = el.getAttribute('data-link');
            if (url) window.open(url, '_blank');
        }
    });
});

// Optional: Update cursor dynamically if class changes
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target.classList.contains('language')) {
            mutation.target.style.cursor = mutation.target.classList.contains('active') ? "pointer" : "default";
        }
    });
});
document.querySelectorAll('.language').forEach(function(el) {
    observer.observe(el, { attributes: true });
});