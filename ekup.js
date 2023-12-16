let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

function loadShow() {
  let stt = 0;

  // Use 'none' as a string
  items[active].style.transform = 'none';
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;

  for (var i = active + 1; i < items.length; i++) {
    stt++;
    // Use template literals for dynamic values
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    // Use template literals for dynamic values
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

// Correct syntax for loadShow function invocation
loadShow();

next.onclick = function () {
  // Correct the condition to avoid going beyond the array length
  active = active + 1 < items.length ? active + 1 : 0;
  loadShow();
};

prev.onclick = function () {
  // Correct the condition to avoid going below 0
  active = active - 1 >= 0 ? active - 1 : items.length - 1;
  loadShow();
};
