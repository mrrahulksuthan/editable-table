const table = document.getElementById('editable-table');
const tbody = table.querySelector('tbody');
const addButton = document.getElementById('add-row-btn');

addButton.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const idCell = document.createElement('td');
  const nameCell = document.createElement('td');
  const emailCell = document.createElement('td');
  const phoneCell = document.createElement('td');
  const actionCell = document.createElement('td');
  const id = tbody.children.length + 1;
  
  idCell.textContent = id;
  nameCell.innerHTML = `<input type="text" name="name[]">`;
  emailCell.innerHTML = `<input type="text" name="email[]">`;
  phoneCell.innerHTML = `<input type="text" name="phone[]">`;
  actionCell.innerHTML = `<button class="delete-btn">Delete</button>`;
  
  newRow.appendChild(idCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(emailCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(actionCell);
  
  tbody.appendChild(newRow);
});
