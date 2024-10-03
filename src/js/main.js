import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

const startScreen = document.querySelector("#startscreen");

startScreen.addEventListener("click", function () {
  console.log("hello");
  gsap.to(startScreen, {
    opacity: 0,
    onComplete: function () {
      startScreen.remove();
    },
  });
});

const startBtn = document.querySelector("#startbtn");
const durationScreen = document.querySelector("#durationscreen");
const countdownScreen = document.querySelector("#countdownscreen");

startBtn.addEventListener("click", function () {
  console.log("hello");
  const cd3 = document.querySelector("#countdown-3");
  const cd2 = document.querySelector("#countdown-2");
  const cd1 = document.querySelector("#countdown-1");
  const tm1 = gsap.timeline();

  tm1.to(cd3, {
    opacity: 0,
    y: 60,
    rotate: 12,
    duration: 1,
    delay: 1,
  });
  tm1.from(
    cd2,
    {
      opacity: 0,
      duration: 0.5,
    },
    2
  );
  tm1.to(cd2, {
    opacity: 0,
    y: 60,
    rotate: 12,
    duration: 1,
  });
  tm1.from(
    cd1,
    {
      opacity: 0,
      duration: 0.5,
    },
    3.5
  );
  tm1.to(cd1, {
    opacity: 0,
    y: 60,
    rotate: 12,
    duration: 1,
    onComplete: function () {
      countdownScreen.remove();
    },
  });
  gsap.to(durationScreen, {
    opacity: 0,
    onComplete: function () {
      durationScreen.remove();
    },
  });
});
