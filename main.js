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

// aacordian
const headerItems = document.querySelectorAll(".question");
headerItems.forEach(headerItem => {
  headerItem.addEventListener("click", ()=> {
    headerItem.classList.toggle("active");
    const bodyItem = headerItem.nextElementSibling;
    if (headerItem.classList.contains('active')) {
      bodyItem.style.maxHeight = bodyItem.scrollHeight + "px";
    } else {
      bodyItem.style.maxHeight = 0;
    }
  });
});

//active
const menuItems = document.querySelectorAll(".header-list a");

menuItems.forEach(item => {
  if (item.href === window.location.href) {
    item.classList.add("active");
  }
});
//filter
// mengambil nilai parameter query "filter"
const urlParams = new URLSearchParams(window.location.search);
const filterValue = urlParams.get('filter');

// mencari elemen dengan class "minuman" dan mencocokkan id dengan nilai filter
const minumanElems = document.querySelectorAll('.minuman');
minumanElems.forEach(elem => {
  if (elem.id === filterValue) {
    elem.style.display = 'block';
  } else {
    elem.style.display = 'none';
  }
});
if (!filterValue) {
  minumanElems.forEach(elem => {
    elem.style.display = 'block';
  });
}


