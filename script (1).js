// const cards = document.querySelectorAll('.card1');

// cards.forEach((card) => {
//     card.addEventListener('mousemove', (e) => {
//         var xOffset = e.clientX - card.getBoundingClientRect().left - card.offsetWidth / 2;
//         var yOffset = e.clientY - card.getBoundingClientRect().top - card.offsetHeight / 2;
//         const xAxis = yOffset / 6; 
//         const yAxis = -xOffset / 6;
//         card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg) translateY(-5px)`;
//     });

//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
//     });
// });
const videoContainer = document.getElementById('video-container');
const videoOverlay = document.getElementById('video-overlay');

videoContainer.addEventListener('mousemove', (event) => {
    const { left, right } = videoContainer.getBoundingClientRect();
    const x = event.clientX;

    if (x > left && x < right) {
        videoOverlay.style.opacity = 1;
    } else {
        videoOverlay.style.opacity = 0;
    }
});

videoContainer.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=zVGcMItvKls&t=22s';
});