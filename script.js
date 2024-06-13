const menu = document.getElementById("panel");

function handlmenu(){
    console.log("hello")
    menu.classList.toggle("hidden");

}

const initialTR = -48*4;
const initialTL = 36*4;

function setup(element, isLTR, speed){
    const callback = (entries)=>{
        const isIntersecting = entries[0].insertecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler)
        }
    }
    const insectobersever = new IntersectionObserver(callback);

    insectobersever.observe(element);

    function scrollHandler(){
        const transX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalX = 0;

        if(isLTR){
            totalX = transX + initialTL;
        }
        else{9
            totalX = -(transX + initialTL);
        }

        element.style.trasform = `translateX(${totalX}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line = document.getElementById('line3');


setup(line1, true, 0.15);
setup(line2,false, 0.15);
setup(line3,true,0,15);


const dtElement = document.querySelectorAll('dt');

dtElement.forEach(element=> {
    element.addEventListener("click",()=>{
        const ddid = element.getAttribute("aria-controls");
        const ddElement = document.getElementById(ddid);
        const dtarrow = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        dtarrow.classList.toggle('-rotate-180');
    });
})