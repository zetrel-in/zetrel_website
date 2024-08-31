const options = {
    root: null,
    rootMargin:'900px',
    threshold:0.5
};

const generalOptions = {
    threshold: 0.6
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('card-animate');
        }
        else{
            entry.target.classList.remove('card-animate');
        }
    });
},options);

const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('fade-content');
        }else{
            entry.target.classList.remove('fade-content');
        }
    })
},generalOptions);



const subDomainObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('sub-domain-fade');
        }else{
            entry.target.classList.remove('sub-domain-fade');
        }
    })
})

const elements = document.querySelectorAll('.flip-card');
elements.forEach((el) => observer.observe(el));

const landingContent = document.getElementById('landing-content');
generalObserver.observe(landingContent);

const subDomainCard = document.querySelectorAll('.sub-domain-card');
subDomainCard.forEach((el) => subDomainObserver.observe(el));


//for active nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLinkEle => {
    navLinkEle.addEventListener('click', () =>{
        document.querySelector('.active-nav')?.classList.remove('active-nav');
        navLinkEle.classList.add('active-nav');
    });
});



// nav menu toggling
let menu = document.getElementById('navbar-default');
document.getElementById('tb').addEventListener('click',event =>{
    menu.classList.toggle('hidden');
})



// gallery video play and pause on hover
function videoPause(x){
    x.pause();
}

function videoPlay(x){
    x.play();
}


