bButton = document.getElementById('bButton')
block5 = document.getElementById('block5');
flag = false
bButton.addEventListener('click', function() {
    if(flag){
        bButton.innerText = 'Нравится';
    }
    else{
        bButton.innerText = 'Выключить';
    }
    flag = !flag
    
})
block5.addEventListener('mousemove', function(e) {
    //console.log(e.clientX, e.clientY);
    if (flag) {
        // console.log(e.clientX, e.clientY,  -e.clientY + block5.getBoundingClientRect().top + block5.offsetHeight / 2);
        heart = document.createElement("img");
        heart.src = './pictures/bell.png';
        heart.style.position = 'absolute';
        heart.style.width = '30px';
        heart.style.top = (e.clientY - block5.getBoundingClientRect().bottom + block5.offsetHeight -15) + 'px';
        heart.style.left = (e.clientX - block5.getBoundingClientRect().right + block5.offsetWidth - 15) + 'px';
        heart.style.zIndex = -1;
        block5.appendChild(heart);
    }
})