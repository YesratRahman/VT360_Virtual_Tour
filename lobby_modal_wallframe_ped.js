AFRAME.registerComponent("modpedwall", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
  
    var modalImg = document.querySelector(".modal-ped-wall");
    var modal = document.querySelector(".pedwall");
    var captionText = document.querySelector("#captionpedwall");

    this.el.addEventListener("click", e => {
      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
      
    });

    var span = document.getElementsByClassName("closepedwall")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
