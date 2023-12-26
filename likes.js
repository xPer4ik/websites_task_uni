const likeButton = document.getElementById('likeButton');
let x = 0;
likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('liked');
    if (likeButton.classList.contains('liked')) {
        x++;
        likeButton.innerText = 'Лайк ' + x;
    } else {
        likeButton.innerText = 'Лайк ' + x;
    }
});

