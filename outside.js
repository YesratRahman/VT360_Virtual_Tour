AFRAME.registerComponent("outside", {
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

    let goToOutside = () => {
      console.log("Outside");
      map.setAttribute("src", "#outmap");
      modalImg.setAttribute("src", "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FOutsideCC.png?v=1607052748607");
      modalImg.setAttribute(
        "alt",
        "Welcome to the Virtual 360 Tour of Peddrew-Yates Hall which is significant to the Africa-American community at Virginia Tech. This hall was built in 1998. In 2003, the hall was named as Peddrew-Yates during the 50th anniversary celebration of black students in honor of Irving Linwood Peddrew III, the first Black student to enroll, and Charlie Lee Yates, the first Black graduate from Virginia Tech. In this interactive virtual tour you will experience immersive 360 videos in the background while you get to interact with different aspects of Peddrew-Yates Hall. The purpose of this virtual tour is to honor and showcase the history of the African-American community. Feel free to explore and look around the building and you are welcome to click on the arrow near the entrance to take you to the lobby."
      );

      vid.setAttribute("src", "#entrance");
      lobbyElements.forEach(lobbyElements => {
        lobbyElements.setAttribute("visible", false);
        //document.querySelector("#video-hotspot").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#image-gallery-hotspot").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#image-gallery-hotspot-yates").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#hotspot-ped-wall").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#hotspot-yates-wall").setAttribute("position", "0.065 68.393 0.030"); 
          document.querySelector("#video-hotspot").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#lobToOut").setAttribute("position", "0.065 68.393 0.030");
          document.querySelector("#lobToUjiOut").setAttribute("position", "0.065 68.393 0.030");
      });
      outsideElements.forEach(outsideElements => {
        outsideElements.setAttribute("visible", true);
        document.querySelector("#outToLob").setAttribute("position", "47.773 -0.454 29.985"); 
        document.querySelector("#OutToLobCaption").setAttribute("position", "3.526 1.200 2.25");
        document.querySelector("#PaYaOutsidePicIcon").setAttribute("position", "2.8 1.3 3");
        
      });
      
      
      endElements.forEach(endElements => {
        endElements.setAttribute("visible", false);
        document.querySelector("#EndToUjiIn").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#contributor-hotspot").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#resource-hotspot").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#EndToUjiInCaption").setAttribute("position", "0.065 68.393 0.030");
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
          document.querySelector("#UjiInToEndCaption").setAttribute("position", "9.667 -2.29 7.659");

      });
      ujima2Elements.forEach(ujima2Elements => {
        ujima2Elements.setAttribute("visible", false);
        document
          .querySelector("#ujiInToUjiOut")
          .setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#uji-video-hotspot").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#uji-image-gallery-hotspot").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#UjiInToUjiOutCaption").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#UjiInToEndCaption").setAttribute("position", "9.667 -2.29 7.659");

      });
    };

    this.el.addEventListener("click", goToOutside);
  }
});
