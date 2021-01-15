AFRAME.registerComponent("end", {
  init: function() {
    let vid = document.querySelector("#vid");
    let lobbyElements = document.querySelectorAll(".lob");
    let outsideElements = document.querySelectorAll(".out");
    let ujima1Elements = document.querySelectorAll(".uji1");
    let ujima2Elements = document.querySelectorAll(".uji2");
    let endElements = document.querySelectorAll(".end");
    let map = document.querySelector("#map");
    var modalImg = document.querySelector(".outcc-modal");
    var captionText = document.querySelector("#captionoutCC");
    var modal = document.querySelector(".outCC");
    var v = document.querySelector("#out2");
    let ea = document.querySelector("#endaudio");

    let goToEnd = () => {
      console.log("Outside2");
      map.setAttribute("src", "#endmap");
      modalImg.setAttribute("src", "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FOutsideCC.png?v=1607052748607");
      modalImg.setAttribute(
        "alt",
        "Thanks for joining with us on the virtual tour of Peddrew-Yates Hall. We hope that you enjoyed the tour and got a glimpse of the African-American history of Virginia Tech. If you are interested in learning more about the history of Black student Community at Virginia Tech, click on the green information icon to visit some of the external resources. To see the contributors who made this project a great success, click on the contributors icon. If you wish to explore the previous locations and see all the historical information again, follow the arrow sign to go back inside the building."
      );

      vid.setAttribute("src", "#out2");
      v.play();
      lobbyElements.forEach(lobbyElements => {
        lobbyElements.setAttribute("visible", false);
          document.querySelector("#image-gallery-hotspot").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#image-gallery-hotspot-yates").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#hotspot-ped-wall").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#hotspot-yates-wall").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#video-hotspot").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#lobToOut").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#lobToUjiOut").setAttribute("position", "0.065 68.393 0.030");
      });
      outsideElements.forEach(outsideElements => {
        outsideElements.setAttribute("visible", false);
        document.querySelector("#outToLob").setAttribute("position", "0.065 68.393 0.030"); 
        document.querySelector("#OutToLobCaption").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#PaYaOutsidePicIcon").setAttribute("position", "0.065 68.393 0.030");
        
      });
      ujima1Elements.forEach(ujima1Elements => {
        ujima1Elements.setAttribute("visible", false);
        document
          .querySelector("#ujiOutToLob")
          .setAttribute("position", "0.065 68.393 0.030");
        document
          .querySelector("#ujiOutToUjiIn")
          .setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#UjiOutToLobCaption").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#UjiOutToUjiInCaption").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#ujiOutMean").setAttribute("position", "0.065 68.393 0.030");
      });
      ujima2Elements.forEach(ujima2Elements => {
        ujima2Elements.setAttribute("visible", false);
        document
          .querySelector("#ujiInToUjiOut")
          .setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#uji-video-hotspot").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#uji-image-gallery-hotspot").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#UjiInToUjiOutCaption").setAttribute("position", "0.065 68.393 0.030");
      });
      
   
      
      if (sessionStorage.getItem('audio7') == "false") {
        ea.play();
        // End Elements appear after 43 seconds
        setTimeout(function() {
          endElements.forEach(endElements => {
            endElements.setAttribute("visible", true);
              document.querySelector("#EndToUjiIn").setAttribute("position", "8.352 -0.40 -11.11"); 
              document.querySelector("#contributor-hotspot").setAttribute("position", "8.519 1.560 -0.373");
              document.querySelector("#resource-hotspot").setAttribute("position", "8.519 1.560 4.741");
              document.querySelector("#EndToUjiInCaption").setAttribute("position", "8.352 -1.40 -11.11");
           
           });
        }, 43000) //43
      }
      
      else {
        endElements.forEach(endElements => {
        endElements.setAttribute("visible", true);
        document.querySelector("#EndToUjiIn").setAttribute("position", "8.352 -0.40 -11.11"); 
        document.querySelector("#contributor-hotspot").setAttribute("position", "8.519 1.560 -0.373");
        document.querySelector("#resource-hotspot").setAttribute("position", "8.519 1.560 4.741");
        document.querySelector("#EndToUjiInCaption").setAttribute("position", "8.352 -1.40 -11.11");
        });
      }
      
      sessionStorage.setItem('audio7', 'true');      
      
    };

    this.el.addEventListener("click", goToEnd);
  }
});
