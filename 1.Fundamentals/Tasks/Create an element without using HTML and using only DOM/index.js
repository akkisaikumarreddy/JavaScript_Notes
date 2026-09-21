// Create an Paragraph Element
const Paragraph = document.createElement('p')

// Add Content to it
Paragraph.textContent = 'This text was created using only pure DOM methods!';

// Add a class and inline styling
Paragraph.className = 'para';
Paragraph.style.color = 'white';
Paragraph.style.backgroundColor = 'crimson';
Paragraph.style.fontSize = '30px';

// Append it to the <body> element of the page
document.body.appendChild(Paragraph);


// -----------------------------------------------------------------------------------------------------------------------------------------------------


// Create a button element
const btn = document.createElement('button');

// Label and ID for Button
btn.textContent = 'Click Me';
btn.id = 'my-button';

// Attach click event
btn.addEventListener('click', () => {
    alert('Button Clicked!');
});

// Select container and append button
const container = document.getElementById('container');
container.appendChild(btn);