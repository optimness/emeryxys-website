// script.js

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

},{
  threshold:0.15
});

fadeElements.forEach((el)=>{
  observer.observe(el);
});


document.querySelectorAll(".accordion-item").forEach(item => {
  const btn = item.querySelector(".accordion-btn");
  const content = item.querySelector(".accordion-content");

  btn.addEventListener("click", () => {

    // toggle active
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      // OPEN → set real height
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // CLOSE → collapse
      content.style.maxHeight = "0px";
    }

  });
});