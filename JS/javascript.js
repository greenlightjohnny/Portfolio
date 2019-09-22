const background = document.querySelector('.backgroundImage');
const windowW = window.innerWidth / 5;
const windowH = window.innerHeight / 5;


function changeP(e) {
    
    const mouseX = e.clientX / windowW;
    const mouseY = e.clientY / windowH;
    
    background.style.transform = `translate3D(-${mouseX}%, -${mouseY}%, 0)`
};


background.addEventListener('mousemove', changeP)


/////// Fade in on scroll //////////


let elements = document.querySelectorAll('.hidden');




function checkHeight() {
    
    let testt = document.querySelector('.fix');
    console.log(testt);
    console.log(window.scrollY + window.innerHeight);
    console.log(testt.offsetHeight);
    console.log(testt.offsetTop);

    elements.forEach(i => {
        const slideInAt = (window.scrollY + window.innerHeight) - i.offsetHeight;
       
        const imageBottom = i.offsetTop + i.offsetHeight;
        
        const isHalfShow = slideInAt > i.offsetTop;
       
        const isNotPast = window.scrollY < imageBottom;
        

        if(isHalfShow && isNotPast) {
            i.classList.add('fade-in-element');
            i.classList.remove('hidden');
        } else {
            i.classList.remove('fade-in-element');
            i.classList.add('hidden');
        }

    })
    // let windowHeight = window.innerHeight;
    // for(let i = 0; i < elements.length; i++) {
    //     let element = elements[i];
    //     console.log(element);
    //     let distanceFromTop = elements[i].getBoundingClientRect().top;
    //     let distanceFromBottom = elements[i].getBoundingClientRect().bottom;

    //     if(distanceFromTop - windowHeight <= 0) {
    //         element.classList.add('fade-in-element');
    //         element.classList.remove('hidden');
    //     } else if(distanceFromBottom - windowHeight > 20 ) {
    //         element.classList.remove('fade-in-element');
    //         element.classList.add('hidden');
    //     }
    // }
}


window.addEventListener('scroll', checkHeight);
window.addEventListener('resize', checkHeight);