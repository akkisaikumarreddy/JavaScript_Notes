// Create an Paragraph Element
const Paragraph = document.createElement('p')


// Adding Content to it
Paragraph.textContent = 'This text was created using only pure DOM methods!';


// Adding a class and inline styling
Paragraph.className = 'para';
Paragraph.style.color = 'white';
Paragraph.style.backgroundColor = 'crimson';
Paragraph.style.fontSize = '30px';


// Append it to the <body> element of the page Directly
document.body.appendChild(Paragraph);


// -----------------------------------------------------------------------------------------------------------------------------------------------------


// Create a button element
const btn = document.createElement('button');
btn.textContent = 'Click Me';


// Adding click event
btn.addEventListener('click', () => {
  alert('Button clicked!');
});


// Applying style to button
btn.style.backgroundColor = '#007bff';
btn.style.color = 'white';
btn.style.padding = '10px 20px';
btn.style.border = 'none';
btn.style.borderRadius = '5px';
btn.style.fontSize = '18px';
btn.style.cursor = 'pointer';


// Append it to <body> element of the page Directly
document.body.appendChild(btn);