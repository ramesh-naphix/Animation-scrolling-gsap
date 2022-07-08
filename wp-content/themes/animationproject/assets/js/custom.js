console.log("Hello");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#company-timeline",
  start: "top top",
  endTrigger: "#curtain",
  end: "bottom top",
  scrub: true,
  pin: true,
  // markers: true,
  pinSpacing: false
});

ScrollTrigger.create({
  trigger: ".right",
  start: self => self.previous().end,
  end: "max",
  pinnedContainer: "#content",
  pinType: "transform", // because it's inside an element with transforms applied, thus position: fixed won't work the way you may anticipate.
  onRefreshInit: self => self.scroll(0), // if the user is scrolled beyond the container pin, it throws off the measurements, so just scroll to the top to ensure positioning is correct.
  pin: true
});