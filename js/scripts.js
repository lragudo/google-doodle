gsap.registerPlugin(MotionPathPlugin);
let tl = gsap.timeline({repeat: -1, repeatDelay: 2});


// dice role in as well as the pencil
tl.to("#nat20", {
  duration: 2.5,
  rotation: 360,
   motionPath:{
    path: "#path",
    end: .95
  }}, 1);
  // google comes in at the same time as nat 20
  tl.from(".google", {
    opacity: 0,
    duration: 1
  }, "<")
  

tl.from("#plain20", {
  y: 200,
  duration: 1.25,
  rotation: 200
}, 1.5)

tl.from("#pencil", {
  y:-300,
  duration: 1.25
}, 1.75)

// Remove red dice
tl.to("#nat20", {
  duration: 2.5,
  rotation: 200,
  x: -100,
  y: 400  
}, 4.5)

// Remove yellow dice
tl.to("#plain20", {
  duration: 2.5,
  rotation: 300,
  x: -100,
  y: -400  
}, 4.5)

// Remove pencil
tl.to("#pencil", {
  rotation: 150,
  x: 190,
  y: 100,
  duration: 1.25
}, 4.5)

// Remove gge
tl.to(".google", {
  opacity: 0
}, 4.5)

// international title comes in from above
tl.fromTo("#international", {
  opacity: 0,
  y: -75
},{
  opacity: 1,
  duration: 3,
  y: 150,
}, 5)

//table-top day comes in from below
tl.fromTo("#tabletop-day", {
  opacity: 0,
  y: 75
},{
  opacity: 1,
  duration: 3,
  y: -140
}, 5)

//fade out international tabletop day
tl.to("#international", {
  opacity: 0
}, "+=2")
tl.to("#tabletop-day", {
  opacity: 0
}, "<")