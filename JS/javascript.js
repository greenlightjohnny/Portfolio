const background = document.querySelector('.backgroundImage');
const windowW = window.innerWidth / 5;
const windowH = window.innerHeight / 5;


function changeP(e) {
    
    const mouseX = e.clientX / windowW;
    const mouseY = e.clientY / windowH;
    
    background.style.transform = `translate3D(-${mouseX}%, -${mouseY}%, 0)`
};


background.addEventListener('mousemove', changeP)