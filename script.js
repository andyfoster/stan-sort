const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const largestStans = [
  'Pakistan',
  'Afghanistan',
  'Uzbekistan',
  'Kazakhstan',
  'Tajikistan',
  'Kyrgyzstan',
  'Turkmenistan',
];

// Store list
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...largestStans].forEach((country, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);
    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${country}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);

    draggableList.appendChild(listItem);
  });
}
