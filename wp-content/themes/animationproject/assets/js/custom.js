console.log("Hello");

// console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});

ScrollTrigger.create({
  trigger: "#company-timeline .timeline_imagewrapper",
  start: "top top",
  endTrigger: "#curtain",
  // end: "bottom top",
  // end: "+=500",
  // end: "bottom 60%+=100px",
  end: "bottom 50%+=20px",
  scrub: true,
  pin: true,
  markers: true,
  pinSpacing: false,
  toggleActions: "play none none reverse"
});

let svgInner4 = document.querySelector('.svg_inner4')
gsap.from(svgInner4, {
  // drawSVG: "0%",
  width:'0',
  ease: Power4.easeIn,
  // transformOrigin:'top center',
  ease:'none',
  stagger:0.3,
  duration: 5,
    scrollTrigger: {
      // ease: Power4.easeIn,
      trigger: ".company-timeline-block1",
      start: 'top',
      end: 'bottom',
      scrub: 1,
      markers: false,
      onEnter() {
        svgInner4.classList.add('enable');
      },
      // onLeave() {
      //   svgInner4.classList.remove('enable');
      // },
      // onEnterBack() {
      //   svgInner4.classList.add('enable');
      // },
      // onLeaveBack() {
      //   svgInner4.classList.remove('enable');
      // }
    }
  }
);

let svgInner1= document.querySelector('.svg_inner1')
gsap.from(svgInner1, {
  height:'0',
  ease: Power4.easeIn,
  // transformOrigin:'top center',
  ease:'none',
  stagger:0.3,
  duration: 5,
    scrollTrigger: {
      // width: 0,
      // ease: Power4.easeIn,
      trigger: ".company-timeline-block2",
      start: 'top',
      end: 'right',
      scrub: 1,
      markers: true,
      onEnter() {
        svgInner1.classList.add('enable');
      },
    }
  }
);

let svgInner2= document.querySelector('.svg_inner2')
gsap.from(svgInner2, {
  width:'0',
  ease: Power4.easeIn,
  // transformOrigin:'top center',
  ease:'none',
  stagger:0.3,
  duration: 5,
    scrollTrigger: {
      // width: 0,
      // ease: Power4.easeIn,
      trigger: ".company-timeline-block3",
       start: 'top',
      end: 'right',
      scrub: 1,
      markers: true,
      onEnter() {
        svgInner2.classList.add('enable');
      },
    }
  }
);

let svgInner3= document.querySelector('.svg_inner3')
gsap.from(svgInner3, {
  height:'0',
  ease: Power4.easeIn,
  // transformOrigin:'top left',
  ease:'none',
  stagger:0.3,
  duration: 5,
    scrollTrigger: {
      // width: 0,
      // ease: Power4.easeIn,
      trigger: ".company-timeline-block4",
      start: 'top',
      end: 'right',
      scrub: 1,
      markers: true,
      onEnter() {
        svgInner3.classList.add('enable');
      },
    }
  }
);



// var action = gsap.timeline({
//   defaults:{duration:2, ease:'none'},
//   scrollTrigger: {
//     trigger: ".company-timeline-block",
//     pin:true,
//     scrub:true,
//     start: "top -1px",
//     end: "+=1000",
//     markers:true,
//     toggleActions: "play none none reverse",
//     onUpdate: self => {
//       // var no = self.progress.toFixed(2) * 100
//       gsap.set("#etest1 path", {drawSVG:'100%', duration: 3, ease:'power4.out'})
//       // gsap.set("#etest1 path", {textContent:no})
//       //gsap.set(".text", {textContent:no * 100 + '%'})
//     }
//   }
// })


// .from("#etest1 path", {drawSVG: 0}, 0)
// .to("#etest1 path", {motionPath: {
//     path: "#etest1 path",
//     align:"#etest1 path",
//     alignOrigin: [0.5, 0.5],
//   }}, 0)
// .set('.text', {autoAlpha:1})
// .to('.text', {drawSVG:'100%', duration:3, ease:'none'})


// ScrollTrigger.create({
//   trigger: "#company-timeline .timeline_imagewrapper",
//   start: self => self.previous().end,
//   end: "max",
//   pinnedContainer: "#company-timeline .timeline_imagewrapper",
//   pinType: "transform", // because it's inside an element with transforms applied, thus position: fixed won't work the way you may anticipate.
//   onRefreshInit: self => self.scroll(0), // if the user is scrolled beyond the container pin, it throws off the measurements, so just scroll to the top to ensure positioning is correct.
//   pin: true
// });

// const main = gsap.timeline({defaults: {duration: 1},
//   scrollTrigger: {
//     trigger: "#testsvg",
//     scrub: true,
//     start: "top center",
//     end: "bottom center"
//   }})
// .to(".ball01", {duration: 0.01, autoAlpha: 1})
// .from("#etest1", {drawSVG: 0}, 0)
// .to(".ball01", {motionPath: {
//   path: "#etest1",
//   align:"#etest1",
//   alignOrigin: [0.5, 0.5],
// }}, 0)

