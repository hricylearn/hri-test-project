document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero .slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    let current = 0;

    function showSlide(index) {
        slides[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
    }

    prevBtn.addEventListener('click', () => showSlide(current - 1));
    nextBtn.addEventListener('click', () => showSlide(current + 1));

    setInterval(() => {
        showSlide(current + 1);
    }, 5000);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    console.log('HRI 사이트 로드 완료');
});
