// task 1
var centeredElement = document.getElementById('centeredElement');
var centeredImage = document.getElementById('centeredImage');

function centerElement() {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    centeredElement.style.left = centerX + 'px';
    centeredElement.style.top = centerY + 'px';

    centeredImage.style.marginLeft = -centeredImage.width / 2 + 'px';
    centeredImage.style.marginTop = -centeredImage.height / 2 + 'px';
}
document.addEventListener('click', function (event) {
    var clickX = event.clientX;
    var clickY = event.clientY;
    console.log('x:' + clickX + ', y:' + clickY);
});
window.addEventListener('resize', centerElement);
centerElement();



// task 2
function createNotification(message) {
  const container = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = message;
  const closeButton = document.createElement('span');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', function () {
      container.removeChild(notification);
  });
  notification.appendChild(closeButton);
  container.appendChild(notification);
}
setInterval(createNotification, 2000, 'Ошибка')




// task 3
var armTemp = document.getElementsByClassName("arm")[0];
var containerRocket = document.getElementById("spaceshipContainer");
var arms = [];
var speeds = [];
var dX = [];
var amount = 250;
var maxSpeed = 0.5;
var maxScale = 70;
for(let i = 0; i < amount; i++){
  var clone = armTemp.cloneNode(true);
  arms.push(clone);
  dX.push(0);
  var a = Math.random();
  speeds.push(a * maxSpeed);
  arms[i].style.opacity = a + 0.1;
  arms[i].style.zIndex = Math.round(speeds[i] * 100);
  arms[i].style.width = lerp(0, maxScale, a) + "px";
  arms[i].style.left = Math.random() * (window.innerWidth - 100) + "px";
  arms[i].style.top = Math.random() * (window.innerHeight - 100) + "px";
  containerRocket.appendChild(clone);
  arms[i].style.transition = 'transform 0.5s ease'; // Добавляем анимацию поворота
  arms[i].style.transform = 'translate(' + dX[i] + 'px, ' + (-dX[i]) + 'px)';
}
armTemp.style.display = "none";
function lerp( a, b, alpha ) {
  return a + alpha * ( b - a );
 }
document.addEventListener('wheel', function(event) {
  var scrolled = event.deltaY;
  for(let i = 0; i < amount; i++){
    dX[i] += (scrolled * speeds[i]);
    arms[i].style.transform = 'rotate(' + 90*i + 'deg) translate(' + dX[i] + 'px, ' + (-dX[i]) + 'px)';
  }
});





// task 4
var scrolls = [220, 640, 810];
var alltetxs = document.getElementsByClassName("text");
document.addEventListener('wheel', function(event) {
  for(let i = 0; i < scrolls.length; i++){
    if (window.scrollY >= scrolls[i] && !alltetxs[i].classList.contains("appearAnim"))
      {
        alltetxs[i].classList.remove("disappearAnim");
        alltetxs[i].classList.add("appearAnim");
      }
    else if (window.scrollY < scrolls[i] && alltetxs[i].classList.contains("appearAnim"))
      {
        alltetxs[i].classList.add("disappearAnim");
        alltetxs[i].classList.remove("appearAnim");
      }

  }
});

// task_for scrollY
document.addEventListener('DOMContentLoaded', function () {
  var parallaxContainer = document.getElementById('parallax-container');
  var content = document.querySelector('.content');
  window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      var translateY = scrolled * 1.4;
      parallaxContainer.style.backgroundPositionY = translateY + 'px';
      content.style.transform = 'translate3d(0, ' + translateY + 'px, 0)';
      var fontSize = 16 + scrolled * 0.02; // Настройте коэффициент по вашему усмотрению
    content.style.fontSize = fontSize + 'px';
  });
});