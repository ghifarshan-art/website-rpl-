// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);


});




// =========================
// CURSOR GLOW
// =========================


const cursor = document.querySelector(".cursor-glow");


document.addEventListener("mousemove",(e)=>{


    cursor.style.left = e.clientX - 150 + "px";

    cursor.style.top = e.clientY - 150 + "px";


});




// =========================
// NAVBAR SCROLL EFFECT
// =========================


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.style.background =
        "rgba(15,23,42,.75)";


        navbar.style.backdropFilter =
        "blur(15px)";


        navbar.style.padding =
        "15px 0";


    }

    else{


        navbar.style.background =
        "transparent";


        navbar.style.backdropFilter =
        "none";


        navbar.style.padding =
        "25px 0";


    }


});




// =========================
// MOBILE MENU
// =========================


const menuBtn =
document.querySelector(".menu-btn");


const navMenu =
document.querySelector(".nav-menu");



menuBtn.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});




// =========================
// CLOSE MENU AFTER CLICK
// =========================


document.querySelectorAll(".nav-menu a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});

// =========================
// COUNTER ANIMATION
// =========================


const counters =
document.querySelectorAll("[data-target]");


counters.forEach(counter=>{


    let target =
    Number(counter.dataset.target);


    let count = 0;


    let speed = target / 100;



    function update(){


        count += speed;


        if(count < target){


            counter.innerText =
            Math.ceil(count);


            setTimeout(update,20);


        }


        else{


            counter.innerText =
            target;


        }


    }



    update();



});
// =========================
// LIGHTBOX GALLERY
// =========================


const galleryImages =
document.querySelectorAll(".gallery-item img");


const lightbox =
document.querySelector(".lightbox");


const lightboxImage =
document.querySelector(".lightbox img");


const closeLightbox =
document.querySelector(".close-lightbox");



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        lightbox.classList.add("active");


        lightboxImage.src =
        image.src;


    });


});





closeLightbox.addEventListener("click",()=>{


    lightbox.classList.remove("active");


});





lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){


        lightbox.classList.remove("active");


    }


});
// =========================
// TYPING EFFECT
// =========================


const typing =
document.getElementById("typing");


const words = [
    "Developers",
    "Creators",
    "Innovators"
];


let wordIndex = 0;

let charIndex = 0;



function typeEffect(){


    if(charIndex < words[wordIndex].length){


        typing.innerHTML +=
        words[wordIndex].charAt(charIndex);


        charIndex++;


        setTimeout(typeEffect,120);


    }


    else{


        setTimeout(deleteEffect,1000);


    }


}




function deleteEffect(){


    if(charIndex > 0){


        typing.innerHTML =
        words[wordIndex].substring(
            0,
            charIndex-1
        );


        charIndex--;


        setTimeout(deleteEffect,80);


    }


    else{


        wordIndex++;


        if(wordIndex >= words.length){

            wordIndex=0;

        }


        setTimeout(typeEffect,300);


    }


}



typeEffect();








// =========================
// BACK TO TOP
// =========================


const backTop =
document.querySelector(".back-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("active");


    }

    else{


        backTop.classList.remove("active");


    }


});





backTop.onclick=()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};








// =========================
// DARK MODE
// =========================


const themeBtn =
document.querySelector(".theme-btn");


themeBtn.onclick=()=>{


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){


        themeBtn.innerHTML =
        '<i class="ri-sun-line"></i>';


    }


    else{


        themeBtn.innerHTML =
        '<i class="ri-moon-line"></i>';


    }


};