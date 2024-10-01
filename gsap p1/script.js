var tl = gsap.timeline()

tl.from(".nav h3",{

    y:-50,
    opacity:0,
    delay:0.3,
    duration:0.6,
    stagger:0.3,


})

tl.from(".main h1" ,{
    x:-500,
    opacity:0,
    delay:0.3,
    duration:0.6,
    stagger:0.3,


})

// tl.from(".main img",{
//     opacity:0,
//     delay:0.5,
//     duration:0.8,
//     stagger:0.5,


// })
tl.from(".main img",{
    // x : 100,
    rotate : 45,
    duration : 0.7,
    delay : 0.5,
    scale:0.3,
    opacity : 0,
    stagger : 0.6
})

tl.from(".footer h3",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.3
})