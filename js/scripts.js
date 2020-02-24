gsap.registerPlugin(MotionPathPlugin);

gsap.to("#nat20", {
  duration: 2.5,
  rotation: 360,
  delay: 1,
   motionPath:{
    path: "#path",
    end: .95
  }
});

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

