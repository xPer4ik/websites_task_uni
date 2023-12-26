
var contents = document.getElementById("contents");
var l1temp = document.getElementsByClassName("l1")[0];
var l2temp = document.getElementsByClassName("l2")[0];
var randAmount = 1 + Math.random() * 5;
for(let i = 0; i < randAmount; i++){
  if (Math.random() <= 0.5){
    var temp = l1temp.cloneNode(true);
    contents.appendChild(temp);
  }
  else{
    var temp = l2temp.cloneNode(true);
    contents.appendChild(temp);
  }
}

document.getElementById('contents').addEventListener('click', function (event) {
  var targetElement = event.target;
  while (targetElement && targetElement.tagName !== 'A') {
      targetElement = targetElement.parentNode;
  }

  if (targetElement && targetElement.tagName === 'A') {
      var isConfirmed = window.confirm('Вы соглашаетесь перейти на неизвестную ссылку?');
      if (!isConfirmed) {
          event.preventDefault();
      }
  }
});

var allPics = ["armchair3.jpg", "sofa2.jpg", "sofa3.jpg", "bed2.jpg", "bed3.jpg", "bed.jpg"];
var mainPic = document.getElementById("mainImg");
function changePic(id){
  mainPic.src = allPics[id];
}

document.getElementById('selectableList').addEventListener('click', function(event) {
  var listItem = event.target;

  var isCtrlPressed = event.ctrlKey || event.metaKey;

  var listItems = this.getElementsByTagName('li');
  if (!isCtrlPressed){
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove('selected');
    }
  }

  if (listItem.tagName === 'LI') {
    if (listItem.classList.contains("selected"))
      listItem.classList.remove('selected');
    else
      listItem.classList.add('selected');
  }

  event.preventDefault();
});

document.getElementById('selectableList').addEventListener('selectstart', function(e) {
  e.preventDefault();
  return false;
});



var sliderBar = document.getElementById('sliderBar');
  var slider = document.getElementById('slider');
  let isDragging = false;

  slider.addEventListener('mousedown', () => {
    isDragging = true;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      var sliderBarRect = sliderBar.getBoundingClientRect();
      let newPosition = e.clientX - sliderBarRect.left;

      newPosition = Math.max(0, Math.min(newPosition, sliderBarRect.width - slider.offsetWidth));

      slider.style.left = newPosition + "px";
    }
  });

  document.addEventListener('mouseleave', () => {
    if (isDragging) {
      var sliderBarRect = sliderBar.getBoundingClientRect();
      slider.style.left = (sliderBarRect.width - slider.offsetWidth) + "px";
      isDragging = false;
    }
  });


  let totalCost = 0;

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.dataset.price);
  }
  
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(ev) {
    ev.preventDefault();
    const price = parseInt(ev.dataTransfer.getData("text"));
    totalCost += price;
  
    const totalCostElement = document.getElementById("total-cost");
    totalCostElement.textContent = "Сумма:" + totalCost;
  
    const draggedProduct = document.createElement("p");
    draggedProduct.textContent = "Овощ за - " + price;
    draggedProduct.style.marginBottom = "0px";
  
    document.getElementById("cart").appendChild(draggedProduct);  // Append the dragged product to the drop target
  }
  





  // aminations
  const containerDVD = document.getElementById('container2');
  const floatingBox = document.getElementById('floatingBox');
  const speed = 10; // Adjust the speed as needed
  let directionX = 1; // 1 for right, -1 for left
  function updatePosition() {
    const containerRect = containerDVD.getBoundingClientRect();
    const boxRect = floatingBox.getBoundingClientRect();
    const maxX = containerRect.width;

    if (boxRect.left <= 0 || boxRect.right >= maxX) {
      directionX *= -1;
    }
    const newX = boxRect.left + speed * directionX;
    floatingBox.style.left = `${newX}px`;
    requestAnimationFrame(updatePosition);
  }

  // Start the animation
  updatePosition();

  // JavaScript для перемещения мяча
const ball = document.getElementById('ball');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveBall() {
  const screenWidth = window.innerWidth;
  const newX = getRandomInt(0, screenWidth - ball.offsetWidth);
  ball.style.left = `${newX}px`;
}

// Перемещаем мяч при загрузке страницы и каждые 5 секунд
moveBall();
setInterval(moveBall, 5000);