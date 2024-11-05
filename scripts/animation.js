document.addEventListener("DOMContentLoaded", () => {

  gsap.set(heroImg, { x: 100, opacity: 0 });
  gsap.to(heroImg, {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: heroImg,
    },
  });

  numbers.forEach((number, index) => {
    const startPos = index % 2 === 0 ? -100 : 100;
    gsap.set(number, { x: startPos, opacity: 0 });
    gsap.to(number, {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: number,
      },
    });
  });
});
