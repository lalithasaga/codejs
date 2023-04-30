var ul=document.querySelector('ul');
var li=document.createElement('li');
ul.append(li);

li.setAttribute('class','title');
li.innerText='hello';
li.style.color='red';
li.style.fontSize='2rem';


var li2=document.getElementsByTagName('li');
li2[1].style.color='blue';
var li3=document.getElementsByClassName('list-group-item');
li3[2].style.color='red';



