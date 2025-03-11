const items = document.querySelector('.items'); // Get the container
let isDragging = false;
let startX;
let startY;
let currentX;
let currentY;
let offsetX = 0;
let offsetY = 0;

// Handle mousedown event (start dragging)
items.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;

  // Add active class to change cursor style
  items.classList.add('active');
});

// Handle mousemove event (dragging)
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // Calculate new position based on mouse movement
  currentX = e.clientX - startX;
  currentY = e.clientY - startY;

  // Keep the element within the boundaries of the window
  const containerRect = items.getBoundingClientRect();
  const parentRect = items.parentElement.getBoundingClientRect();

  // Boundary conditions
  if (containerRect.left + currentX >= parentRect.left &&
      containerRect.right + currentX <= parentRect.right) {
    offsetX = currentX;
  }

  if (containerRect.top + currentY >= parentRect.top &&
      containerRect.bottom + currentY <= parentRect.bottom) {
    offsetY = currentY;
  }

  // Apply the new position using transform
  items.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Handle mouseup event (stop dragging)
document.addEventListener('mouseup', () => {
  isDragging = false;

  // Remove active class to reset cursor style
  items.classList.remove('active');
});
