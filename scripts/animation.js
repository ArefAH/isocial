document.addEventListener("DOMContentLoaded", () => {
    numbers.forEach((number, index) => {
      const startPos = index % 2 === 0 ? -100 : 100;
      gsap.set(number, { x: startPos, opacity: 0 });
      gsap.to(number, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: number,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });
  });