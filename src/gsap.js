import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Draggable,ScrollTrigger,ScrollSmoother,ScrollToPlugin);





export function imgRotate() {

gsap.to("footer .img-rotat1 img", {
  rotation: 360,      
  duration: 6,     
  repeat: -1,     
  ease: "none",   
});

}



export function imgRotate2() {

gsap.to(" .img-rotat2 img", {
  rotation: 360,      
  duration: 4,     
  repeat: -1,     
  ease: "none",   
});

}

// GSAP Animation for hero title
// من الشمال لليمين (title-1)

  gsap.from("#hero .title-1 h1 span", {
  x: -100,  // ← سالب (من الشمال)
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power3.out"
});

// من اليمين للشمال (title-2)
gsap.from("#hero .title-2 h1 span", {
  x: +100,
  opacity: 0,
  duration: 2,
  stagger: -0.1,  // ← سالب! عشان يبدأ من الآخر
  ease: "power3.out"
});


// GSAP ScrollTrigger for Service Section
gsap.registerPlugin(ScrollTrigger);

gsap.from("#contact .title h1 span", {
  x: -100,  // ← سالب (من الشمال)
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power3.out"
});

gsap.from("#projects .title h1 span", {
  x: -100,  // ← سالب (من الشمال)
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power3.out"
});



gsap.from("#about .title span", {
  x: -100,  // ← سالب (من الشمال)
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power3.out"
});
gsap.from("#our-services .title span", {
  x: -100,  // ← سالب (من الشمال)
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power3.out"
});

gsap.from("#services-details .title h1 span", {
  x: -100,  // ← سالب (من الشمال)
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power3.out"
})



