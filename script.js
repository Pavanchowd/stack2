function addToStack() {
    const stack = document.querySelector('.stack');
    const newElement = document.createElement('div');
    newElement.classList.add('stack-element', 'add-animation');
    newElement.textContent = `Element ${stack.childElementCount + 1}`;
    stack.appendChild(newElement);
  
    // Remove animation class after the animation completes
    setTimeout(() => {
      newElement.classList.remove('add-animation');
    }, 500);
  }