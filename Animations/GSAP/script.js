const timeline = gsap.timeline();
timeline.to(".box1", {
  x: 700,
  delay: 1,
  duration: 3,
  backgroundColor: "#920",
  borderRadius: "80%",
  rotate: 240,
//   repeat: -1,
//   yoyo: true,
});
timeline.to(".box2", {
  x: 700,
  delay: 1,
  duration: 3,
  backgroundColor: "#1da",
  borderRadius: "50%",
  rotate: -360,
//   repeat: -1,
//   yoyo: true,
});
timeline.to(".box3", {
  x: 700,
  delay: 1,
  duration: 3,
  backgroundColor: "#0aa599",
  borderRadius: "50%",
  rotate: 90,
//   repeat: -1,
//   yoyo: true,
});

// gsap.from("h1", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   color: "white",
//   stagger: 0.3,
// });
