const background = document.querySelector('.backgroundImage');
const windowW = window.innerWidth / 5;
const windowH = window.innerHeight / 5;


function changeP(e) {
    
    const mouseX = e.clientX / windowW;
    const mouseY = e.clientY / windowH;
    
    background.style.transform = `translate3D(-${mouseX}%, -${mouseY}%, 0)`
};

function moveSlow() {
    background.classList.add('slow');
    background.style.transform = `translate3D(0, 0, 0)`
}

function removeSlow() {
    background.classList.remove('slow');
}

background.addEventListener('mouseenter', removeSlow);
background.addEventListener('mousemove', changeP);
background.addEventListener('mouseleave', moveSlow);


/////// Fade in on scroll //////////


let slideItems = document.querySelectorAll('.hidden');
let first = document.querySelector('.fix');

function slideIn() {
    console.log(  window.scrollY + window.innerHeight);
    console.log('first item ' + first.getBoundingClientRect().top) + document.documentElement.scrollTop;
    slideItems.forEach(i => {

        if(i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop <  window.scrollY + window.innerHeight ) {
            i.classList.remove('hidden');
            i.classList.add('fade-in-element');
            
        } else {
            i.classList.add('hidden');
            i.classList.remove('fade-in-element');
        }
        

    })
}

window.addEventListener('scroll', slideIn);

// let elements = document.querySelectorAll('.hidden');




// function checkHeight() {
    
   

//     elements.forEach(i => {
//         const slideInAt = (window.scrollY + window.innerHeight) - i.offsetHeight;
       
//         const imageBottom = i.offsetTop + i.offsetHeight;
        
//         const isHalfShow = slideInAt > i.offsetTop;
       
//         const isNotPast = window.scrollY < imageBottom;
        

//         if(isHalfShow && isNotPast) {
//             i.classList.add('fade-in-element');
//             i.classList.remove('hidden');
//         } else {
//             i.classList.remove('fade-in-element');
//             i.classList.add('hidden');
//         }

// });
// };

// window.addEventListener('scroll', checkHeight);
// window.addEventListener('resize', checkHeight);

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






