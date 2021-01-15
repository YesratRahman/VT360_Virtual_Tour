AFRAME.registerComponent("modyateswall", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
  
    var modalImg = document.querySelector(".modal-yates-wall");
    var modal = document.querySelector(".yateswall");
    var captionText = document.querySelector("#captionyateswall");

    this.el.addEventListener("click", e => {
      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
      
    });

    var span = document.getElementsByClassName("closeyateswall")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
