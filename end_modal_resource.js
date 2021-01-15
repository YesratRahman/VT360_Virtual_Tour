AFRAME.registerComponent("resource", {
  init: function() {
  
    var modalImg = document.querySelector(".modal-resource");
    var modal = document.querySelector(".resourcemodal");

   

    this.el.addEventListener("click", e => {
      

      modal.style.display = "block";
     
    });

    var span = document.getElementsByClassName("closeresource")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
