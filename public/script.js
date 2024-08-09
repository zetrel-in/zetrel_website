const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('card-animate');
        }
        else{
            entry.target.classList.remove('card-animate');
        }
    });
});


const elements = document.querySelectorAll('.flip-card');
elements.forEach((el) => observer.observe(el));