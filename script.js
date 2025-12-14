const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    questions.forEach((other) => {
      if (other !== q) {
        other.nextElementSibling.classList.remove("onOff");
        other.querySelector("i").classList.remove("rotate");
      }
    });

    q.nextElementSibling.classList.toggle("onOff");
    q.querySelector("i").classList.toggle("rotate");
  });
});
