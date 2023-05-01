const headerTitle = document.querySelector("#header-title");
const helloText = document.createTextNode("Hello ");
headerTitle.parentElement.insertBefore(helloText, headerTitle.parentElement.firstElementChild);
const itemsList = document.querySelector("#items");
const helloText2 = document.createTextNode("Hello ");
itemsList.insertBefore(helloText2, itemsList.firstElementChild);
