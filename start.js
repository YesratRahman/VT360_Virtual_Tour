AFRAME.registerComponent("start", {
  init: function() {
    window.addEventListener("click", function() {
      var v1 = document.querySelector("#entrance");
      var v2 = document.querySelector("#pylobby");
      var v3 = document.querySelector("#ujiin");
      var v4 = document.querySelector("#ujiout");
      let lobbyElements = document.querySelectorAll(".lob");
      let outsideElements = document.querySelectorAll(".out");
      let ujima1Elements = document.querySelectorAll(".uji1");
      let ujima2Elements = document.querySelectorAll(".uji2");
      let vid = document.querySelector("#vid");

      var outAudio = document.querySelector("#oAudio");
      var bmusic = document.querySelector("#music");
      
      document.querySelector("#map").setAttribute("visible", true);
      document.querySelector("#CC").setAttribute("visible", true);
      document.querySelector("#clickherecaption").setAttribute("visible", false);
      document.querySelector("#clickherecaption").setAttribute("position", "0.065 68.393 0.030");

      v1.play();
      bmusic.play();
      bmusic.setAttribute("volume", "2.5");

      if (sessionStorage.getItem("audio1") == "false") {
        outAudio.play();
        setTimeout(function() {
          // Outside Elements appear after 51 seconds
          outsideElements.forEach(outsideElements => {
            outsideElements.setAttribute("visible", true);
              document.querySelector("#outToLob").setAttribute("position", "47.773 -0.454 29.985"); 
              document.querySelector("#OutToLobCaption").setAttribute("position", "3.526 1.200 2.25");
              document.querySelector("#PaYaOutsidePicIcon").setAttribute("position", "2.8 1.3 3");
              
          });
        }, 51000); // 51
        sessionStorage.setItem("audio1", "true");
      } // End If
    });
  }
});
