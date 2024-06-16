document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg',
        'img/img6.jpg',
        'img/img7.jpg'
    ];

    const slideContainer = document.querySelector('.slide');
    images.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image;
        if (index === 0) li.classList.add('active');
        li.appendChild(img);
        slideContainer.appendChild(li);
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide li');

    function showImage(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    document.querySelector('.icon-prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.icon-next').addEventListener('click', () => changeImage(1));
    
    // Mostrar la primera imagen
    showImage(currentIndex);
});