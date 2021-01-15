AFRAME.registerComponent("contributor", {
  init: function() {
  
    var modalImg = document.querySelector(".modal-contributor");
    var modal = document.querySelector(".contributormodal");

   

    this.el.addEventListener("click", e => {
      

      modal.style.display = "block";
     
    });

    var span = document.getElementsByClassName("closecontributor")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none";
    });
  }
});
// Get the modal
