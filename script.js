

document.querySelectorAll('.item').forEach(item => {
    let offsetX, offsetY, isDragging = false;

    item.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Get initial mouse position relative to the cube
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;

        // Add dragging class for styling
        item.classList.add('dragging');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // Get the bounding box of the container
        const container = document.querySelector('.items').getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        // Calculate new position
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Boundary constraints
        if (newX < container.left) newX = container.left;
        if (newX + itemRect.width > container.right) newX = container.right - itemRect.width;
        if (newY < container.top) newY = container.top;
        if (newY + itemRect.height > container.bottom) newY = container.bottom - itemRect.height;

        // Apply new position
        item.style.position = 'absolute';
        item.style.left = `${newX}px`;
        item.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            item.classList.remove('dragging');
        }
    });
});