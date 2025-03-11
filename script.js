// Your code here.
const items = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isDown = true;
  items.classList.add('active');

  // Get the initial mouse position and scroll position
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

items.addEventListener('mouseleave', () => {
  isDown = false;
  items.classList.remove('active');
});

items.addEventListener('mouseup', () => {
  isDown = false;
  items.classList.remove('active');
});

items.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop if mouse button is not pressed
  e.preventDefault();

  // Calculate new position based on mouse movement
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startX) * 2; // Adjust sensitivity by multiplying

  // Update scroll position
  items.scrollLeft = scrollLeft - walk;
});
