document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);


const images = [
    "./assets/img/jpg/car.png",
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




// Function to adjust the position of the "Back to Top" button
function adjustButtonPosition() {
  const button = document.getElementById('back-to-top');
  const footer = document.querySelector('footer'); // Select the footer element

  const footerRect = footer.getBoundingClientRect();
  const buttonHeight = button.offsetHeight;
  const windowHeight = window.innerHeight;

  // Calculate the distance from the bottom of the viewport to the footer
  const distanceToFooter = windowHeight - footerRect.top;

  // If the footer is visible and close to the button
  if (distanceToFooter > buttonHeight) {
    // Adjust button position to stay above the footer
    button.style.bottom = (distanceToFooter + 20) + 'px';
  } else {
    // Reset to default position when footer is not in the way
    button.style.bottom = '20px';
  }
}

// Show/hide button and adjust position when scrolling
window.onscroll = function () {
  const button = document.getElementById('back-to-top');

  if (window.scrollY > 200) { // Show button after scrolling 200px
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }

  adjustButtonPosition(); // Adjust button position on scroll
};

// Smooth scroll to top
document.getElementById('back-to-top').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


function openDemo() {
  document.getElementById("demoModal").style.display = "block";
}

function closeDemo() {
  document.getElementById("demoModal").style.display = "none";
}

function openDemo1() {
  document.getElementById("demoModal1").style.display = "block";
}

function closeDemo1() {
  document.getElementById("demoModal1").style.display = "none";
}



function showCertificate(src) {
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = src;
}

function closeModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
}



// //dark
// document.addEventListener('DOMContentLoaded', () => {
//   const options = {
//     bottom: '32px', // Unset the bottom position
//     right: 'unset',  // Unset the right position
//     left: '32px',    // Set the left position to 32px
//     top: '20px',     // Set the top position to 20px
//     time: '0.5s',    // Animation time for the transition
//     mixColor: '#fff', // Color used during the transition
//     backgroundColor: '#fff',  // Background color for dark mode
//     buttonColorDark: '#fff',  // Button color in dark mode
//     buttonColorLight: '#fff', // Button color in light mode
//     saveInCookies: false, // Do not save preference in cookies
//     label: '🌓', // Button label
//     autoMatchOsTheme: true // Match the OS theme automatically
//   };
  
//   const darkmode = new Darkmode(options);
//   darkmode.showWidget();
// });
