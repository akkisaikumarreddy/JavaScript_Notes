const container = document.getElementById('container');

// ==========================================
// 1. USING document.createElement()
// ==========================================
// Must build the element from scratch step-by-step
const createdBox = document.createElement('div');
createdBox.className = 'box';
createdBox.style.padding = '10px';
createdBox.style.border = '2px solid green';
createdBox.style.marginBottom = '10px';

const createdHeading = document.createElement('h2');
createdHeading.textContent = 'Created Box (Scratch)';

const createdText = document.createElement('p');
createdText.textContent = 'This was built manually with createElement and textContent.';

// Assemble created elements
createdBox.appendChild(createdHeading);
createdBox.appendChild(createdText);

// Append created element to container
container.appendChild(createdBox);


// ==========================================
// 2. USING node.cloneNode(true)
// ==========================================
// Select the existing original element
const originalBox = document.getElementById('original-box');

// Duplicate the existing element (true = deep copy including children)
const clonedBox = originalBox.cloneNode(true);

// Update its ID and text to distinguish it from the original
clonedBox.id = 'cloned-box';
clonedBox.style.borderColor = 'orange';
clonedBox.querySelector('h2').textContent = 'Cloned Box (Duplicate)';
clonedBox.querySelector('p').textContent = 'This inherited the layout and children from the original!';

// Append cloned element to container
container.appendChild(clonedBox);