//Credit: w3schools.com

AFRAME.registerComponent("ujivideo", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modal = document.querySelector(".ujimodal-video");
    var modalImg = document.querySelector(".modal-ujivideo");


    this.el.addEventListener("click", e => {
      
      modalImg.setAttribute("src", "https://www.youtube.com/embed/qzQHtbS2kBk");
      modal.style.display = "block";
    
      
      
    });

    var span = document.getElementsByClassName("closeujivideo")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
      modalImg.setAttribute("src", "mno");
    });

    
    
    
  }
});
// Get the modal





