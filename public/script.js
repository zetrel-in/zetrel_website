const options = {
    // root: Document.documentElement,
    rootMargin:'900px',
    threshold:0.6
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('card-animate');
        }
        else{
            entry.target.classList.remove('card-animate');
        }
    },);
},options);

const landingContent = document.getElementById('landing-content');
const elements = document.querySelectorAll('.flip-card');
elements.forEach((el) => observer.observe(el));
observer.observe(landingContent);



// nav menu toggling

let menu = document.getElementById('navbar-default');
document.getElementById('tb').addEventListener('click',event =>{
    menu.classList.toggle('hidden');
})



// gallery video play and pause on hover
function videoPause(x){
    console.log("Helo");
    x.pause();
}

function videoPlay(x){
    x.play();
}


