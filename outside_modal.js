AFRAME.registerComponent("modout", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.querySelector("#PaYaOutsidePicIcon");
    var modalImg = document.querySelector(".outside-modal");
    var captionText = document.querySelector("#captionoutCC");
    var modal = document.querySelector(".outModal");

    this.el.addEventListener("click", e => {
      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
    });

    var span = document.getElementsByClassName("closeoutmodal")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
