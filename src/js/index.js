// Navbar and dropdowns
const toggle = document.getElementsByClassName('navbar-toggle')[0],
    collapse = document.getElementsByClassName('navbar-collapse')[0],
    dropdowns = document.getElementsByClassName('dropdown');;

// Toggle if navbar menu is open or closed
function toggleMenu() {
  collapse.classList.toggle('collapse');
  collapse.classList.toggle('in');
}

// Close all dropdown menus
function closeMenus() {
  for (let j = 0; j < dropdowns.length; j++) {
    dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
    dropdowns[j].classList.remove('open');
  }
}

// Add click handling to dropdowns
for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function() {
    if (document.body.clientWidth < 768) {
      var open = this.classList.contains('open');
      closeMenus();
      if (!open) {
        this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
        this.classList.toggle('open');
      }
    }
  });
}

// Close dropdowns when screen becomes big enough to switch to open by hover
function closeMenusOnResize() {
  if (document.body.clientWidth >= 768) {
    closeMenus();
    collapse.classList.add('collapse');
    collapse.classList.remove('in');
  }
}

// Event listeners
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);


//Slider
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

console.log(1)