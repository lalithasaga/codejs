var allUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

function addItem(e) {
  e.preventDefault();
  var itemName = document.getElementById('itemName').value;
  var itemDesc = document.getElementById('itemDesc').value;
  var userDetails = {
    itemName: itemName,
    itemDesc: itemDesc
  };
 
  // Append new user details to the existing list of user details
  allUserDetails.push(userDetails);

  // Save all user details to local storage
  localStorage.setItem('userDetails', JSON.stringify(allUserDetails));

  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.id = allUserDetails.length - 1; // Set the ID of the list item
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
  
  // Add an event listener to the delete button to remove the item
  deleteBtn.addEventListener('click', function() {
    var index = parseInt(li.id);
    allUserDetails.splice(index, 1);
    localStorage.setItem('userDetails', JSON.stringify(allUserDetails));
    li.remove();
  });
  
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);
}