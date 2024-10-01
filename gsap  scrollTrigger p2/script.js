gsap.from(".page1 .box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotation: 360,
  
});

gsap.from(".page2 .box", {

    opacity:0,
    scale: 0,
    duration: 2,
    rotation: 360,
    scrollTrigger:{
        
        trigger:".page2 .box",
        scoller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true

    } 
});

gsap.from(".page3 h2", {

    x:-1200,
    opacity:0,
    duration: 2,
    delay:0.3,
    scrollTrigger:{
        
        trigger:".page3 h2",
        scoller:"body",
        markers:true,
        start:"top 60%",
       

    } 
});
gsap.from(".page3 h3", {

    x:1200,
    duration: 2,
    opacity:0,
    delay:0.3,
    scrollTrigger:{
        
        trigger:".page3 h3",
        scoller:"body",
        markers:true,
        start:"top 60%",
        

    } 
});