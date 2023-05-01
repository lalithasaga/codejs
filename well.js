const item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor = 'green';

const listItem = document.querySelector('.list-group-item:nth-child(3)');
listItem.style.display = "none";

const item = document.querySelectorAll('.list-group-item');
item[1].style.color = 'green';

const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
 odd[i].style.backgroundColor = 'green';
}