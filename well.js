function addItem(e) {
  e.preventDefault();
  var itemName = document.getElementById('itemName').value;
  var itemDesc = document.getElementById('itemDesc').value;
  var userDetails = {
    itemName: itemName,
    itemDesc: itemDesc
  };
 
  var userDetailsArr = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : [];
  userDetailsArr.push(userDetails);
  localStorage.setItem('userDetails', JSON.stringify(userDetailsArr));

  var li = document.createElement('li');
  li.className = 'list-group-item';
  var nameSpan = document.createElement('span');
  nameSpan.className = 'item-name';
  nameSpan.appendChild(document.createTextNode(itemName));
  li.appendChild(nameSpan);
  li.appendChild(document.createElement('br'));
  var descSpan = document.createElement('span');
  descSpan.className = 'item-desc';
  descSpan.appendChild(document.createTextNode(itemDesc));
  li.appendChild(descSpan);
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);
}