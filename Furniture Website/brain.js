let menuLists = document.getElementById('menuLists');
let menuBar = document.querySelector(".menu-bar");
menuLists.style.maxHeight = "0px"; 

function toggle_btn(){
    if(menuLists.style.maxHeight == "0px")
    {
        menuLists.style.maxHeight = "300px"; 
    }
    else{
        menuLists.style.maxHeight = "0px"; 
    }
}

// Navbar End here 
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
 

// Slider Images 

const leftArrow = document.querySelector(".left");
      const rightArrow = document.querySelector(".right");
      const sliderImg = document.querySelector(".slider_img");
      const slidesImgs = document.querySelectorAll(".slides_img");
      let ActiveSlide = 0;

      const updateSlider = () => {
        sliderImg.style.transform = `translateX(-${ActiveSlide * 100}%)`;
      };

      const nextSlide = () => {
        ActiveSlide = (ActiveSlide + 1) % slidesImgs.length;
        updateSlider();
      };

      const prevSlide = () => {
        ActiveSlide = (ActiveSlide - 1 + slidesImgs.length) % slidesImgs.length;
        updateSlider();
      };

      rightArrow.addEventListener("click", nextSlide);
      leftArrow.addEventListener("click", prevSlide);

      // Optional: Auto-slide
      setInterval(nextSlide, 5000); // Change slide every 5 seconds

      // Testomonial Js 
      $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );