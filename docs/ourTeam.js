let teams = document.querySelectorAll('.img-div');
console.log(teams);



const mediaQuery = window.matchMedia('(hover:none)');

if(mediaQuery.matches){
    teams.forEach(element => {
        element.addEventListener("click",() => {
            element.lastElementChild.classList.toggle("hovered");
            if (element.lastElementChild.classList.contains("hovered")){
                element.lastElementChild.style.transform="translateY(80%)";
            }else{
                element.lastElementChild.style.transform="translateY(60%)";
            }
        })
    });
}