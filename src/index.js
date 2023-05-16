import loadHomePage from "./homepage,js";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";
import "./style.css";

const content = document.querySelector('#content');

const createPageLayout = () => {
  let header = document.querySelector('.header');

  let but1 = document.createElement('button');
  but1.textContent = 'Home';
  but1.addEventListener('click', loadHomePage);

  let but2 = document.createElement('button');
  but2.textContent = 'Menu';
  but2.addEventListener('click', loadMenuPage);

  let but3 = document.createElement('button');
  but3.textContent = 'Contact';
  but3.addEventListener('click', loadContactPage);

  header.appendChild(but1);
  header.appendChild(but2);
  header.appendChild(but3);

  let page = document.createElement('div');
  page.classList.add('page');

  content.appendChild(page);
};

createPageLayout();
loadHomePage();