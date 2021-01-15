//Credit: w3schools.com

AFRAME.registerComponent("mod2", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.querySelector(".modal-video");
    var modal = document.querySelector(".modalvideo");



    this.el.addEventListener("click", e => {
      modalImg.setAttribute("src", "https://www.youtube.com/embed/JIAnW6TUaoE");
      modal.style.display = "block";
    
      
      
    });

 
    var span = document.getElementsByClassName("closevideo")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
      modalImg.setAttribute("src", "abc");
    });
    
    
    
  }
});
// Get the modal
