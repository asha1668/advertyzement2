// Get the draggable items
const items = document.querySelectorAll('.item');

// Add event listeners for drag and drop events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragleave', dragLeave);
  item.addEventListener('drop', drop);
  item.addEventListener('dragend', dragEnd);
});

let dragItem = null;

// Function to handle drag start event
function dragStart(event) {
  dragItem = event.target;
  event.dataTransfer.setData('text/plain', '');
  event.target.classList.add('dragging');
}

// Function to handle drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drag enter event
function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add('hovered');
}

// Function to handle drag leave event
function dragLeave(event) {
  event.target.classList.remove('hovered');
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();
  event.target.classList.remove('hovered');
  event.target.parentNode.insertBefore(dragItem, event.target.nextSibling);
}

// Function to handle drag end event
function dragEnd(event) {
  event.target.classList.remove('dragging');
  dragItem = null;
}
