document.addEventListener('DOMContentLoaded', () => {
    const cases = document.querySelectorAll('.cases');

    cases.forEach(item => {
        item.addEventListener('click', () => {
            cases.forEach(c => c.classList.remove('selected'));
            item.classList.add('selected');
        });
    });

    const hamburger = document.getElementById('hamburger-nav');
    const menu = document.getElementById('menu-nav');
    
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})  
