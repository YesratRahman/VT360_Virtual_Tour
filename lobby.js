AFRAME.registerComponent("lobby", {
  init: function() {
    // let ls = document.querySelector("#lAudio");
    // ls.play();

    let vid = document.querySelector("#vid");
    let lobbyElements = document.querySelectorAll(".lob");
    let outsideElements = document.querySelectorAll(".out");
    let ujima1Elements = document.querySelectorAll(".uji1");
    let ujima2Elements = document.querySelectorAll(".uji2");
    let la = document.querySelector("#lAudio");
    var v2 = document.querySelector("#pylobby");
    var modalImg = document.querySelector(".outcc-modal");
    var captionText = document.querySelector("#captionoutCC");
    var modal = document.querySelector(".outCC");
    let endElements = document.querySelectorAll(".end");

    let map = document.querySelector("#map");

    let goToLobby = () => {
      vid.setAttribute("src", "#pylobby");
      v2.play();

      console.log("Lobby");

      map.setAttribute("src", "#lobbymap");
      modalImg.setAttribute(
        "src",
        "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FLobbyCC.png?v=1607052757463"
      );
      modalImg.setAttribute(
        "alt",
        "This is the lobby of Peddrew-Yates hall which is an important part of this building. Anyone entering the building through the lobby can learn about the time and effort dedicated to honor Peddrew and Yates. Explore the small icons in this room to know more about Peddrew and Yates and their journey at Virginia Tech. After exploring, follow the arrow sign to enter the Ujima Living Learning Community or click on the arrow towards the exit to go outside of the building."
      );

      // Outside elements disasspear
      outsideElements.forEach(outsideElements => {
        outsideElements.setAttribute("visible", false);
        document
          .querySelector("#outToLob")
          .setAttribute("position", "0.065 68.393 0.030");
        document
          .querySelector("#OutToLobCaption")
          .setAttribute("position", "0.065 68.393 0.030");
        document
          .querySelector("#PaYaOutsidePicIcon")
          .setAttribute("position", "0.065 68.393 0.030");
      });
      // Ujima1 Elements disasppear
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

      endElements.forEach(endElements => {
        endElements.setAttribute("visible", false);
        document.querySelector("#EndToUjiIn").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#contributor-hotspot").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#resource-hotspot").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#EndToUjiInCaption").setAttribute("position", "0.065 68.393 0.030");
      });

      // Ujima2 Elements disasppear
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

      if (sessionStorage.getItem("audio2") == "false") {
        la.play();
        // Lobby Elements appear after 29 seconds
        setTimeout(function() {
          lobbyElements.forEach(lobbyElements => {
            lobbyElements.setAttribute("visible", true);
            document
              .querySelector("#image-gallery-hotspot")
              .setAttribute("position", "4.798 2.948 -1.263");
            document
              .querySelector("#image-gallery-hotspot-yates")
              .setAttribute("position", "4.798 2.948 2");
            document
              .querySelector("#hotspot-ped-wall")
              .setAttribute("position", "4.798 2.5 -3");
            document
              .querySelector("#hotspot-yates-wall")
              .setAttribute("position", "4.798 2.5 4");
            document
              .querySelector("#video-hotspot")
              .setAttribute("position", "0.242 1.7 -5.184");
            document
              .querySelector("#lobToOut")
              .setAttribute("position", "43.773 -5.860 -92.728");
            document
              .querySelector("#lobToUjiOut")
              .setAttribute("position", "7.714 -3.996 28.215");
          });
        }, 29000); // End Timeout 29
      } // End If
      else {
        // Lobby Elements Appear Instant
        lobbyElements.forEach(lobbyElements => {
          lobbyElements.setAttribute("visible", true);
          document
            .querySelector("#image-gallery-hotspot")
            .setAttribute("position", "4.798 2.948 -1.263");
          document
            .querySelector("#image-gallery-hotspot-yates")
            .setAttribute("position", "4.798 2.948 2");
          document
            .querySelector("#hotspot-ped-wall")
            .setAttribute("position", "4.798 2.5 -3");
          document
            .querySelector("#hotspot-yates-wall")
            .setAttribute("position", "4.798 2.5 4");
          document
            .querySelector("#video-hotspot")
            .setAttribute("position", "0.242 1.7 -5.184");
          document
            .querySelector("#lobToOut")
            .setAttribute("position", "43.773 -5.860 -92.728");
          document
            .querySelector("#lobToUjiOut")
            .setAttribute("position", "7.714 -3.996 28.215");
        });
      }

      sessionStorage.setItem("audio2", "true");
    }; // End of Lobby Function

    this.el.addEventListener("click", goToLobby);
  }
});
