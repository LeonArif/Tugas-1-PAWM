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

    const cards = document.querySelectorAll('.berkom, .physics, .math');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight - rect.height / 2 && rect.bottom > 0) {
            card.classList.add('muncul');
        } else {
            card.classList.remove('muncul');
        }
    });

    const title = document.querySelector('.title');
    if (title) {
        const titleRect = title.getBoundingClientRect();
        if (titleRect.top < windowHeight - titleRect.height / 2 && titleRect.bottom > 0) {
            title.classList.add('muncul');
        } else {
            title.classList.remove('muncul');
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
    document.getElementById("go-content").addEventListener("click", function() {
        document.getElementById("content").scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelectorAll('.berkom, .physics, .math').forEach(card => {
    card.addEventListener('click', function() {
        if (card.classList.contains('berkom')) {
            window.open('berkom.html', '_blank');
        } else if (card.classList.contains('physics')) {
            window.open('physics.html', '_blank');
        } else if (card.classList.contains('math')) {
            window.open('math.html', '_blank');
        }
    });
});