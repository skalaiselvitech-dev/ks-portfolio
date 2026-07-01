// ===========================
// TYPING EFFECT
// ===========================

const words = [
  "Cybersecurity Analyst",
  "IT Student",
  "Ethical Hacking Enthusiast",
  "Network Security Learner",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){
            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex == words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ===========================
// SCROLL ANIMATION
// ===========================

const revealElements = document.querySelectorAll(
".card,.project-card,.skill,.about-box,.home-content,.home-image"
);

function reveal(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="1s";

});

window.addEventListener("scroll",reveal);

reveal();


// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00e5ff";
topBtn.style.color="#000";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px #00e5ff";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===========================
// CONTACT FORM
// ===========================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ===========================
// PROFILE IMAGE FLOATING
// ===========================

const image=document.querySelector(".home-image img");

let angle=0;

setInterval(()=>{

    angle+=0.03;

    image.style.transform=
    `translateY(${Math.sin(angle)*8}px)`;

},20);