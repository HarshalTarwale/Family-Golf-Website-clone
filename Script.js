// smooth scroll ---------------------

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// CURSOR ----------------------------
// var cursorBlur = document.querySelector("#cursor-blur")
// var curs = document.querySelector("#cursor");
// document.addEventListener("mousemove", function(deta){
//     curs.style.left = deta.clientX+ "px";
//     curs.style.top = deta.clientY+ "px";
//     cursorBlur.style.left = event.clientX + "px";
//     cursorBlur.style.top = event.clientY + "px";
// })

// document.addEventListener("mousemove", function(e) {
//   const cursor = document.querySelector("#cursor");
//   const cursorBlur = document.querySelector("#cursor-blur");

//   // Update the position of the main cursor
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';

//   // Update the position of the blur effect
//   cursorBlur.style.left = e.clientX + 'px';
//   cursorBlur.style.top = e.clientY + 'px';
// });

// CURSOR SMOOTHING ----------------------------
let mousePosX = 0;
let mousePosY = 0;
let cursorPosX = 0;
let cursorPosY = 0;
let blurPosX = 0;
let blurPosY = 0;

// How fast the cursor follows the mouse (lower = smoother but more delay)
const cursorSpeed = 0.15;
// How fast the blur follows the mouse (should be slower than the cursor)
const blurSpeed = 0.10;

document.addEventListener("mousemove", function(event) {
    // Update the mouse position
    mousePosX = event.clientX;
    mousePosY = event.clientY;
});

// Animation function for smooth cursor movement
function animateCursor() {
    // Calculate new cursor position with smooth interpolation
    cursorPosX += (mousePosX - cursorPosX) * cursorSpeed;
    cursorPosY += (mousePosY - cursorPosY) * cursorSpeed;
    
    // Calculate new blur position with smoother interpolation
    blurPosX += (mousePosX - 250 - blurPosX) * blurSpeed;
    blurPosY += (mousePosY - 250 - blurPosY) * blurSpeed;
    
    // Apply the positions with transform for better performance
    const cursor = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");
    
    cursor.style.transform = `translate3d(${cursorPosX}px, ${cursorPosY}px, 0)`;
    blur.style.transform = `translate3d(${blurPosX}px, ${blurPosY}px, 0)`;
    
    // Call the next frame
    requestAnimationFrame(animateCursor);
}

// Initial cursor setup
function initCursor() {
    const cursor = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");
    
    // Change position method from left/top to transform
    cursor.style.left = "0";
    cursor.style.top = "0";
    blur.style.left = "0";
    blur.style.top = "0";
    
    // Add transform-origin for centered rotation
    cursor.style.transformOrigin = "center";
    blur.style.transformOrigin = "center";
    
    // Add will-change to optimize performance
    cursor.style.willChange = "transform";
    blur.style.willChange = "transform";
    
    // Start the animation loop
    requestAnimationFrame(animateCursor);
}

// Initialize the cursor when the page loads
window.addEventListener("load", initCursor);

// var headings = document.querySelectorAll("#main h3, #main h4, #main h5");
// headings.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         document.querySelector("#cursor").style.scale = 2;
//         document.querySelector("#cursor").style.border = "1px solid #95C11E";
//         document.querySelector("#cursor").style.backgroundColor = "transparent";
//     });
    
//     elem.addEventListener("mouseleave", function(){
//         document.querySelector("#cursor").style.scale = 1;
//         document.querySelector("#cursor").style.border = "0px";
//         document.querySelector("#cursor").style.backgroundColor = "#95C11E";
//     });
// });

// NAV SCROLL EFFECT------------------

gsap.to("#nav",{
    backgroundColor : "#000",
    height:"120px",
    duration: 1.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1,
    }
})

// HERO SCROLL EFFECT --------------------

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -100%",
        scrub:2,
    }
})

// ABOUT US ANIMATION ---------------------------------------

gsap.from("#about img ,.about-disc",{
    y:50,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
})

// CARDS ANIMATION -------------------------------------------

gsap.from("#cards-container ,.cards",{
    y:50,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2,
    }
})

// COLON ANIMATION --------------------------------------------

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start:"top 35%",
        end:"top 30%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start:"top 35%",
        end:"top 30%",
        scrub:2,
    }
})

// img container animation ----------------------------------

gsap.from("#img-container h1",{
    y:50,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#img-container",
        scroller: "body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})


