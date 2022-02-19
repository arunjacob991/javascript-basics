const body = document.body;

body.append("Hellloiiiii", "hoi hoiii");

const div = document.createElement('div');
div.innerText = "div text";
div.textContent = "div text2";
div.innerHTML = '<strong>strong text<strong>'

body.appendChild(div);

const strongText = document.createElement('strong');

strongText.innerText = "new strong text";

body.append(strongText);

const remove = document.querySelector(".remove");

remove.remove();

const attr = document.querySelector(".attributes");

console.log(attr.getAttribute('title'));
console.log(attr.id);

attr.setAttribute('id', 'new id...')
attr.id = "another new id";

attr.removeAttribute('id');

const listClass = document.querySelector('.classes');

listClass.classList.add("new-class");
listClass.classList.remove("new-class");
listClass.classList.toggle("cls3");

const cssStyleDemo = document.querySelector('.css');

cssStyleDemo.style.backgroundColor = "lightblue";