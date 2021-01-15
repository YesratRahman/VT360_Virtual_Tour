AFRAME.registerComponent("modcc", {
  init: function() {
  
    var modalImg = document.querySelector(".outcc-modal");
    var captionText = document.querySelector("#caption3");
    var modal = document.querySelector(".outCC");

    //console.log("Inside CC");

    this.el.addEventListener("click", e => {
      

      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
    });

    var span = document.getElementsByClassName("closeoutCC")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
