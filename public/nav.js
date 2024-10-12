function getPage(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    return page;
}



// nav menu toggling
let menu = document.getElementById('navbar-default');
document.getElementById('tb').addEventListener('click',event =>{
    menu.classList.toggle('hidden');
})


//for active nav link
if (getPage() === "team.html"){
    document.getElementById('team').classList.add('active-nav');
}else{
    document.getElementById('home').classList.add('active-nav');
}
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLinkEle => {
    navLinkEle.addEventListener('click', () =>{
        document.querySelector('.active-nav')?.classList.remove('active-nav');
        navLinkEle.classList.add('active-nav');
    });
});