var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', function(e) {
  removeOrEditItem(e);
});
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  var itemName = document.getElementById('itemName').value;
  var itemDesc = document.getElementById('itemDesc').value;
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

function removeOrEditItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  } else if (e.target.classList.contains('edit')) {}
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item) {
    var itemName = item.querySelector('.item-name').textContent.toLowerCase();
    var itemDesc = item.querySelector('.item-desc').textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1 || itemDesc.indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}