gsap.registerPlugin(MotionPathPlugin);

// dice role in as well as the pencil
gsap.to("#nat20", {
  duration: 2.5,
  rotation: 360,
  delay: 1,
   motionPath:{
    path: "#path",
    end: .95
  }});

gsap.from("#plain20", {
  y: 200,
  duration: 1.25,
  rotation: 200,
  delay: 1.5
})

gsap.from("#pencil", {
  y:-300,
  duration: 1.25,
  delay: 1.75
})

// Remove red dice
gsap.to("#nat20", {
  duration: 2.5,
  rotation: 200,
  delay: 4.5,
  x: -100,
  y: 400  
})

// Remove yellow dice
gsap.to("#plain20", {
  duration: 2.5,
  rotation: 300,
  delay: 4.5,
  x: -100,
  y: -400  
})

// Remove pencil
gsap.to("#pencil", {
  delay: 4.5,
  rotation: 150,
  x: 190,
  y: 100,
  duration: 1.25
})

// Remove gge
gsap.to(".google", {
  opacity: 0,
  delay: 4.5
})

// international title comes in from above
gsap.fromTo("#international", {
  opacity: 0,
  y: -75
},{
  opacity: 1,
  duration: 3,
  y: 150,
  delay: 5
})

//table-top day comes in from below
gsap.fromTo("#tabletop-day", {
  opacity: 0,
  y: 75
},{
  opacity: 1,
  duration: 3,
  y: -140,
  delay: 5
})