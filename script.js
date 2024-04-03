/**

Resume concept based on the Dribbble by John Wilson http://dribbble.com/shots/900308-Resume?list=users

**/

$(document).ready(function () {
  $("#item1").animate(
    {
      borderBottomWidth: "200px",
    },
    1000
  );
  $("#item2").animate(
    {
      borderBottomWidth: "50px",
    },
    1000
  );
  $("#item3").animate(
    {
      borderBottomWidth: "15px",
    },
    1000
  );
  $("#item4").animate(
    {
      borderBottomWidth: "37.5px",
    },
    1000
  );
  $("#item5").animate(
    {
      borderBottomWidth: "37.5px",
    },
    1000
  );
  $("#item6").animate(
    {
      borderBottomWidth: "100px",
    },
    1000
  );
  $("#item7").animate(
    {
      borderBottomWidth: "62.5px",
    },
    1000
  );
});

const indicator = document.getElementById("indicator");
const banner = document.getElementById("banner");
function start() {
  indicator.classList.add("flicker");
  setTimeout(() => {
    indicator.classList.remove("flicker");
    banner.classList.add("max");
    banner.classList.add("flickerbg");
  }, 2000);
}
start();

window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth",
});

// Scroll to a certain element
document.querySelector(".about-me").scrollIntoView({
  behavior: "smooth",
});
document.querySelector(".Experience").scrollIntoView({
  behavior: "smooth",
});
document.querySelector(".skill").scrollIntoView({
  behavior: "smooth",
});
