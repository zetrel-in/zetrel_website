const options = {
    // root: Document.documentElement,
    root: null,
    rootMargin:'900px',
    threshold:0.5
};

const generalOptions = {
    threshold: 0.7
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
            console.log("Occured here");
            entry.target.classList.add('fade-content');
        }else{
            console.log("fade removed");
            entry.target.classList.remove('fade-content');
        }
    })
},generalOptions);

const elements = document.querySelectorAll('.flip-card');
elements.forEach((el) => observer.observe(el));

const landingContent = document.getElementById('landing-content');
generalObserver.observe(landingContent);

const subDomainCard = document.querySelectorAll('.sub-domain-card');
subDomainCard.forEach((el) => generalObserver.observe(el));



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


