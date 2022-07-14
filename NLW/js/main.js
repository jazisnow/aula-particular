window.addEventListener('scroll', onScroll)
onScroll()
 
function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    
    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(about)
    activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2;

    //verificar se a seção passou da linha
    //quais dados vou precisar?

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
 
    const sectionEndsAt =sectionTop + sectionHeight;

    const sectionEndsPassedTargetLine = sectionEndsAt <= targetLine ;

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndsPassedTargetLine;

    const menuElement = document.querySelector (`.menu a[href*=${section.getAttribute("id")}]`)

    menuElement.classList.remove("active")
    if(sectionBoundaries){
        menuElement.classList.add("active")
    }
}

function showNavOnScroll(){
    if (scrollY>0){
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }  
}

function showBackToTopButtonOnScroll(){
    if (scrollY>550){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }  
}


function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
}).reveal(`#home,
#home img,
#home .stat,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);