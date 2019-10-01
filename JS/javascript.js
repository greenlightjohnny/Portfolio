const background = document.querySelector('.backgroundImage');
const windowW = window.innerWidth / 5;
const windowH = window.innerHeight / 5;


function changeP(e) {
    
    if(background.classList.contains('slow')) {
        return;
    } else {
        const mouseX = e.clientX / windowW;
    const mouseY = e.clientY / windowH;
    
    background.style.transform = `translate3D(-${mouseX}%, -${mouseY}%, 0)`
    }
    
};

function moveSlow() {
    background.classList.add('slow');
    background.style.transform = `translate3D(0, 0, 0)`
}

function removeSlow(e) {
    console.log('jmmm');

  
   

    
    setTimeout(function() {
        
        background.classList.remove('slow');
    }, 300)
   

}

background.addEventListener('mouseenter', removeSlow);
background.addEventListener('mousemove', changeP);
background.addEventListener('mouseleave', moveSlow);


/////// Fade in on scroll //////////


let slideItems = document.querySelectorAll('.hidden');
let first = document.querySelector('.fix');
let skillList = document.querySelectorAll('.slideUp');
console.log(skillList);


function slideIn() {
   
    let nav = document.querySelector('nav');
    console.log('scroll Y ' + window.scrollY);
    console.log(window.innerHeight);
    if(window.scrollY > window.innerHeight) {
        nav.classList.add('navShow');
    } else {
        nav.classList.remove('navShow');
    }
    
    slideItems.forEach(i => {

        if(i.getBoundingClientRect().top + i.scrollHeight / .5 + document.documentElement.scrollTop <  window.scrollY + window.innerHeight ) {
            i.classList.remove('hidden');
            i.classList.add('fade-in-element');
            
        } else {
            i.classList.add('hidden');
            i.classList.remove('fade-in-element');
        }
        

    })

    skillList.forEach(i => {
        if(i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
            i.classList.add('inView')
        } else {
            i.classList.remove('inView');
        }
    })
}

window.addEventListener('scroll', slideIn);



///////// Animate menu button ///////////

const ham = document.querySelector('.ham');
const mIcon = document.querySelector('.mIcon');
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');

ham.addEventListener('click', animateMenu);

function animateMenu() {
    mIcon.classList.toggle('animate');
    ul.classList.toggle('ulShow');
    nav.classList.toggle('expand');

}



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






