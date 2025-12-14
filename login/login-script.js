let getHelpBtn = document.getElementById("getHelpBtn");

getHelpBtn.addEventListener("click",()=> {
  getHelpBtn.nextElementSibling.classList.toggle("hideToggle");
});
