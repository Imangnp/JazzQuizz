
const homePageContainer = document.getElementById("homePageContainer");
const rulesPageContainer = document.getElementById("rulesPageContainer");





/**
   * To show the Rules page this function hides the Home page
   * and loads the Rules page
  */
function showRules() {
    homePageContainer.classList.add("hide");
    rulesPageContainer.classList.remove("hide");   
}