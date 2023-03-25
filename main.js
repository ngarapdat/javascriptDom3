const boxes = document.querySelectorAll('.are-we,.product,.hangout');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 4;

  for (let i = 0; i < boxes.length; i++) {
    const boxTop = boxes[i].getBoundingClientRect().top;
    if (boxTop < trigger) {
      boxes[i].classList.add("show");
    } else {
      boxes[i].classList.remove("show");
    }
  };
}

