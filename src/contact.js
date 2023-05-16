function loadContactPage()
{
    let h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    let manager = document.createElement('div');
    manager.classList.add('manager');
    let manager_h = document.createElement('h2')
    manager_h.classList.add('manager_h');
    manager_h.textContent = 'Manager';
    let manager_d = document.createElement('h3');
    manager_d.classList.add('manager_d');
    manager_d.innerHTML = '555-555-5555<br>perfectlyRealEmail@notFake.com';
    manager.appendChild(manager_h);
    manager.appendChild(manager_d);

    let page = document.querySelector('.page');
    page.innerHTML = '';

    page.appendChild(h1);
    page.appendChild(manager);
}

export default loadContactPage;