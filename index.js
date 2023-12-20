const chekVal = document.querySelector("#checkbox");
const toggleVal = document.querySelector(".toggle-wapper");

chekVal.addEventListener("click" , () => {
    toggleVal.classList.toggle("show")

})