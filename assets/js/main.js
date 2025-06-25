document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero .slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    let current = 0;
    let timer = null;

    function showSlide(index) {
        slides[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        showSlide(current - 1);
        restart();
    });
    nextBtn.addEventListener('click', () => {
        showSlide(current + 1);
        restart();
    });

    function start() {
        timer = setInterval(() => {
            showSlide(current + 1);
        }, 5000);
    }

    function restart() {
        clearInterval(timer);
        start();
    }
    start();

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    console.log('HRI 사이트 로드 완료');
});
