function show() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
show()
const cricle =document.querySelector(".lower-header-right-one")
const square =document.querySelector(".lower-header-right-two-1")
const traingle =document.querySelector(".lower-header-right-two-2")
const circleI=document.querySelector(".cricle ")
const squareI=document.querySelector(".square ")
const traingleI=document.querySelector(".traingle ")
const content1=document.querySelector(".content-1")
const content2=document.querySelector(".content-2")
const textaniOne=document.querySelector(".textani ")
const textaniTwo=document.querySelector(".textani-2 ")
const textaniThree=document.querySelector(".textani-3 ")
const textaniFour=document.querySelector(".textani-4 ")
const hidden = document.querySelector(".hidden")
const h1 = document.querySelector(".h1")
const h2 = document.querySelector(".h2")
const h3 = document.querySelector(".h3")
// header button selection
const h1Button=document.querySelector('.lower-header-left')
h1Button.addEventListener("mouseenter",()=>{
    h1Button.style.transform="scale(0.96)"

    textaniOne.style.opacity='0'
  
    circleI.style.backgroundColor="#feaedd"
    circleI.style.opacity=1;
    // 
    squareI.style.backgroundColor="wheat"
    squareI.style.opacity="1"
    // 
    traingleI.style.opacity=1;
    traingleI.style.backgroundColor="#fff480";


})
h1Button.addEventListener("mouseleave",()=>{
    textaniOne.style.opacity='1'
    traingleI.style.opacity=0.3;
    squareI.style.opacity="0.3"
    circleI.style.opacity="0.3";
    h1Button.style.transform="scale(1)"

})





// const cq = document.querySelector(".shap .circle")
// cq.addEventListener("click",()=>{
//     cq.style.backgroundColor="red"
// })










console.log(textaniOne);
console.log(circleI);



console.log(cricle);
console.log(h1);



cricle.addEventListener("mouseenter",()=>{
    // circleI.style.transform="scale(2)";
    circleI.style.width="7vmax";
    circleI.style.height="7vmax";
    h1.style.opacity=0;

    circleI.style.opacity=1;
    textaniTwo.style.opacity='1';
    circleI.style.backgroundColor="#feaedd"
    textaniOne.style.opacity='0'
    cricle.style.transform="scale(0.96)"

    

})
cricle.addEventListener("mouseleave",()=>{
    h1.style.opacity=1;

    circleI.style.width="4vmax";
    circleI.style.height="4vmax";
    textaniTwo.style.opacity='0'
    circleI.style.opacity="0.2"
    textaniOne.style.opacity='1'
    cricle.style.transform="scale(1)"
})
square.addEventListener("mouseenter",()=>{
    square.style.transform="scale(0.96)"
    squareI.style.width="7vmax";
    squareI.style.height="7vmax";
    squareI.style.transform="scale(2)"
    textaniThree.style.opacity='1'
    squareI.style.backgroundColor="wheat"
    textaniOne.style.opacity='0'
    squareI.style.opacity="1"
    h3.style.opacity=0;


})
square.addEventListener("mouseleave",()=>{
    square.style.transform="scale(1)"
    squareI.style.transform="scale(1)"
    textaniThree.style.opacity='0'
    // squareI.style.backgroundColor="transparent"
    textaniOne.style.opacity='1'
    squareI.style.opacity="0.2"
    squareI.style.width="4vmax";
    squareI.style.height="4vmax";
    h3.style.opacity=1;


})
// 
square.addEventListener("mouseenter",()=>{
    square.style.transform="scale(0.96)"
    squareI.style.transform="scale(2)"
    textaniThree.style.opacity='1'
    squareI.style.backgroundColor="wheat"
    textaniOne.style.opacity='0'
    squareI.style.opacity="1"
    h3.style.opacity=0;


})
square.addEventListener("mouseleave",()=>{
    square.style.transform="scale(1)"
    squareI.style.transform="scale(1)"
    textaniThree.style.opacity='0'
    // squareI.style.backgroundColor="transparent"
    textaniOne.style.opacity='1'
    squareI.style.opacity="0.2"
    h3.style.opacity=1;


})
// 
traingle.addEventListener("mouseenter",()=>{
    traingle.style.transform="scale(0.98)"
    traingleI.style.width="7vmax";
    traingleI.style.height="7vmax";
    // traingleI.style.transform="scale(2)"
    traingleI.style.opacity=1
    textaniFour.style.opacity='1'
    traingleI.style.backgroundColor="#fff480"
    textaniOne.style.opacity='0'
    h2.style.opacity=0;



})
traingle.addEventListener("mouseleave",()=>{
    h2.style.opacity=1;
    traingle.style.transform="scale(1)"
    traingleI.style.width="4vmax";
    traingleI.style.height="4vmax";
    traingleI.style.transform="scale(1)"
    textaniFour.style.opacity='0'
    // traingleI.style.backgroundColor="transparent"
    textaniOne.style.opacity='1'
    traingleI.style.opacity="0.2"


})


// /////scrol wali gsap
const trans=()=>{
    content1.style.transform="translate(50%)"
    content2.style.transform="translate(-50%)"
}
gsap.to(".content",{
    // backgroundColor:"red",
    stagger: 3,
    // onStart:trans,
    onRepeat: trans,
    scrollTrigger:{
        trigger:".content",
        scrub: true,
        immediateRender: false,
        start:"top 50%",
        markers: true,
        scroller:"#main",


    }
})
gsap.to(".content-1",{
    stagger:0.3,
    // scrub:true,
    x:"-45%",
    width:"50%",
    scrollTrigger:{
        trigger:".content-2",
        start:"top 50%",
        // end:"top 10%",
        scrub:1,
        scroller:"#main",
    }
})
gsap.to(".content-2",{
    stagger:0.3,
    // scrub:1,
    x:"50%",
    scrollTrigger:{
        trigger:".content-2",
        start:"top 50%",
        // end:"top 10%",
        scrub:true,
        scroller:"#main",
    }
})
// gsap.to(".content",{
//     // backgroundColor:"red",
//     stagger: 0.3,
//     // onStart:trans,
//     onRepeat: trans,
//     scrollTrigger:{
//         trigger:".content",
//         scrub: true,
//         immediateRender: false,
//         start:"top 70%",
//         // markers: true,
//         scroller:"#main",


//     }
// })
// gsap.to(".content-1",{
//     stagger:0.3,
//     // scrub:true,
//     x:"-45%",
//     width:"50%",
//     scrollTrigger:{
//         trigger:".content-2",
//         start:"top 50%",
//         // end:"top 10%",
//         scrub:1,
//         scroller:"#main",
//     }
// })
// gsap.to(".content-2",{
//     stagger:0.3,
//     // scrub:1,
//     x:"50%",
//     scrollTrigger:{
//         trigger:".content-2",
//         start:"top 50%",
//         // end:"top 10%",
//         scrub:true,
//         scroller:"#main",
//     }
// })
gsap.fromTo(".s-img", {
    x:"200%",
    // scrub:true,
    scrollTrigger:{
        trigger:".s-img",
        scrub:1,
        scroller:"#main",
    }

},{
    x:"0%",
    // scrub:true,
    scrollTrigger:{
        trigger:".s-img",
        scrub:1,
        scroller:"#main",
    }


})
gsap.fromTo(".b-img", {
    x:"-50%",
    // scrub:true,
    scrollTrigger:{
        trigger:".b-img",
        scrub:1,
        scroller:"#main",
    }

},{
    x:"50%",
    // scrub:true,
    scrollTrigger:{
        trigger:".b-img",
        scrub:1,
        scroller:"#main",
    }


})



gsap.from(".section-2",{
    scale:0.8,
    scrollTrigger:{
        trigger:".section-2",
        // scrub:1,
        scroller:"#main",
    }


})
gsap.from(".big-button",{
    scale:0.8,
    scrollTrigger:{
        trigger:".big-button",
        // scrub:1,
        scroller:"#main",
    }


})
gsap.from(".r-1",{
    scale:0.8,
    scrollTrigger:{
        trigger:".r-1",
        // scrub:1,
        scroller:"#main",
    }


})
gsap.from(".r-2",{
    scale:0.8,
    scrollTrigger:{
        trigger:".r-2",
        // scrub:1,
        scroller:"#main",
    }


})
gsap.from(".section-5",{
    scale:0.8,
    scrollTrigger:{
        trigger:".section-5",
        // scrub:1,
        scroller:"#main",
    }


})
gsap.from(".section-6",{
    scale:0.8,
    scrollTrigger:{
        trigger:".section-6",
        // scrub:1,
        scroller:"#main",
    }


})
gsap.from(".section-7",{
    scale:0.8,
    scrollTrigger:{
        trigger:".section-7",
        // scrub:1,
        scroller:"#main",
    }


})
// // 
// gsap.from(".nav",{
//     scale:0.8,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:".nav",
//         // scrub:1,
//         scroller:"#main",
//     }
// })
// gsap.from(".lower-header-left ",{
//     scale:0.8,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:".lower-header-left ",
//         // scrub:1,
//         scroller:"#main",
//     }
// })
// // gsap.from(".lower-header-left ",{
// //     scale:0.8,
// //     opacity:0,
// //     duration:2,
// //     // scrollTrigger:{
// //     //     trigger:".lower-header-left ",
// //     //     // scrub:1,
// //     //     scroller:"#main",
// //     // }
// })
gsap.from(".header",{
    scale:0.7,
    opacity:0,
    duration:2,
    delay:0.5
    // scrollTrigger:{
    //     trigger:".lower-header-right ",
    //     // scrub:1,
    //     scroller:"#main",
    // }
})


// 
const flowbtn =document.querySelectorAll(".lower-btn-3")
const icoX = document.querySelectorAll(".lower-btn-3>i")
const aniBtn=document.querySelectorAll(".flow")
flowbtn.forEach((i,idx)=>{
    console.log(flowbtn[idx]);
flowbtn[idx].addEventListener("mouseenter",()=>{
    icoX[idx].style.transform="translateY(-100%)"
    aniBtn[idx].style.top="0%"
})
flowbtn[idx].addEventListener("mouseleave",()=>{
    icoX[idx].style.transform="translateY(0%)"
    aniBtn[idx].style.top="100%"
})
})

// 


