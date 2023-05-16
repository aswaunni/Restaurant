import bev1_i from './bev1.jpg';
import bev2_i from './bev2.jpg';
import bev3_i from './bev3.jpeg';
import snack1_i from './snack1.webp';
import snack2_i from './snack2.webp';
import snack3_i from './snack3.webp';

function loadMenuPage()
{
    let h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    let beverages = document.createElement('div');
    beverages.classList.add('items');
    let beverages_h = document.createElement('h2')
    beverages_h.classList.add('beverages_h');
    beverages_h.textContent = 'Beverages';

    let bev1 = document.createElement('div');
    let bev1_n = document.createElement('h3');
    bev1_n.textContent = 'Orange Juice';
    let img1 = new Image();
    img1.src = bev1_i;
    bev1.appendChild(bev1_n);
    bev1.appendChild(img1);

    let bev2 = document.createElement('div');
    let bev2_n = document.createElement('h3');
    bev2_n.textContent = 'Water';
    let img2 = new Image();
    img2.src = bev2_i;
    bev2.appendChild(bev2_n);
    bev2.appendChild(img2);

    let bev3 = document.createElement('div');
    let bev3_n = document.createElement('h3');
    bev3_n.textContent = 'Coffee';
    let img3 = new Image();
    img3.src = bev3_i;
    bev3.appendChild(bev3_n);
    bev3.appendChild(img3);

    beverages.appendChild(beverages_h);
    beverages.appendChild(bev1);
    beverages.appendChild(bev2);
    beverages.appendChild(bev3);

    let snacks = document.createElement('div');
    snacks.classList.add('items');
    let snacks_h = document.createElement('h2')
    snacks_h.classList.add('snacks_h');
    snacks_h.textContent = 'Snacks';

    let snack1 = document.createElement('div');
    let snack1_n = document.createElement('h3');
    snack1_n.textContent = 'Orange Juice';
    let img4 = new Image();
    img4.src = snack1_i;
    snack1.appendChild(snack1_n);
    snack1.appendChild(img4);

    let snack2 = document.createElement('div');
    let snack2_n = document.createElement('h3');
    snack2_n.textContent = 'Water';
    let img5 = new Image();
    img5.src = snack2_i;
    snack2.appendChild(snack2_n);
    snack2.appendChild(img5);

    let snack3 = document.createElement('div');
    let snack3_n = document.createElement('h3');
    snack3_n.textContent = 'Coffee';
    let img6 = new Image();
    img6.src = snack3_i;
    snack3.appendChild(snack3_n);
    snack3.appendChild(img6);

    snacks.appendChild(snacks_h);
    snacks.appendChild(snack1);
    snacks.appendChild(snack2);
    snacks.appendChild(snack3);

    let page = document.querySelector('.page');
    page.innerHTML = '';

    page.appendChild(h1);
    page.appendChild(beverages);
    page.appendChild(snacks);

}

export default loadMenuPage;