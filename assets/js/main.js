document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);


const images = [
    "./assets/img/jpg/logo.png",
    "./assets/img/jpg/carya.png",
    "./assets/img/jpg/carya1.png",
  ];
  
  let currentIndex = 0;
  const imgElement = document.getElementById("slideshow-image");
  
  // Function to change the image
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    imgElement.src = images[currentIndex];
  }
  
  // Change the image every 3 seconds
  setInterval(changeImage, 3000);

  // Array of image paths
const images2 = [
    "./assets/img/jpg/project.jpg",
    "./assets/img/jpg/redDrop.png",
    "./assets/img/jpg/red2.png",
    "./assets/img/jpg/red3.png",
    "./assets/img/jpg/red4.png",
    "./assets/img/jpg/red5.png",
  ];

  // Get the image element by ID
  const slideshowImage2 = document.getElementById("slideshow-image2");

  // Initialize index for the images
  let currentIndex2 = 0;

  // Function to change images
  function changeImage2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length; // Loop back to the start
    slideshowImage2.src = images2[currentIndex2];
  }

  // Set the interval for changing images every 3 seconds
  setInterval(changeImage2, 3000);




  // Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  
  // Scroll to the top when the button is clicked
  document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };