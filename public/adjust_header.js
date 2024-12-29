function adjustMainMargin(){
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const headerHeight = header.offsetHeight;
    main.style.marginTop = headerHeight + 'px';
}


//Run on page load and windw resize
window.addEventListener('load',adjustMainMargin);
window.addEventListener('resize',adjustMainMargin);