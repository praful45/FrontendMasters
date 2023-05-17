import { animate } from 'popmotion';
const ball = document.querySelector(".ball");

animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    console.log(update);
    ball.style.top = update;
  },
});
