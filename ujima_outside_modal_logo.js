AFRAME.registerComponent("ujioutlogomodal", {
  init: function() {
   

    // Get the image and insert it inside the modal - use its "alt" text as a caption
  
    var modalImg = document.querySelector(".modal-uji-outlogo");
    var modal = document.querySelector(".ujioutlogomodal");
    var captionText = document.querySelector("#captionujioutmodal");

    this.el.addEventListener("click", e => {
      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
      
    });

    var span = document.getElementsByClassName("closeujioutmodal")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
