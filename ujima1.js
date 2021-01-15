AFRAME.registerComponent('ujima1', {
  init: function() {
    
    // let ua = document.querySelector("#uAudio");
    // ua.play();
    
    let vid = document.querySelector("#vid");
    let lobbyElements = document.querySelectorAll(".lob");
    let outsideElements = document.querySelectorAll(".out");
    let ujima1Elements = document.querySelectorAll(".uji1");
    let ujima2Elements = document.querySelectorAll(".uji2");
     let endElements = document.querySelectorAll(".end");
    let ua = document.querySelector("#uAudio");
    var v4 = document.querySelector("#ujiout");
    let map = document.querySelector("#map");
    var modalImg = document.querySelector(".outcc-modal");
    var captionText = document.querySelector("#captionoutCC");
    var modal = document.querySelector(".outCC");
    
    let goToUjima1 = () => {
      
      vid.setAttribute("src", "#ujiout");
      v4.play();
      console.log("Ujima1");
      map.setAttribute("src", "#ujioutmap");
      //Source: https://llp.vt.edu/llc/ujima.html
      modalImg.setAttribute("src", "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FUjimaOutCC.png?v=1607052763129");
      modalImg.setAttribute("alt", "Now you are outside of the Ujima living learning community which is dedicated to the education and celebration of Black culture and experience. This community places a special emphasis on understanding the experience of African-Americans in society, including their experience at VT. Click on the arrow in front of the door to enter the room or the other arrow to go back to the lobby then outside the building.");
      
      // Ujima2 Elements disasppear
      ujima2Elements.forEach(ujima2Elements => {
      ujima2Elements.setAttribute("visible", false);
      document.querySelector("#ujiInToUjiOut").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#UjiInToUjiOutCaption").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#uji-video-hotspot").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#uji-image-gallery-hotspot").setAttribute("position", "0.065 68.393 0.030");
      document.querySelector("#UjiInToEndCaption").setAttribute("position", "9.667 -2.29 7.659");

      });
      
      endElements.forEach(endElements => {
        endElements.setAttribute("visible", false);
        document.querySelector("#EndToUjiIn").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#contributor-hotspot").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#resource-hotspot").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#EndToUjiInCaption").setAttribute("position", "0.065 68.393 0.030");
      });
      
      // Lobby Elements disasppear
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
        
      // Outside Elements disappear
      outsideElements.forEach(outsideElements => {
      outsideElements.setAttribute("visible", false);
        document.querySelector("#outToLob").setAttribute("position", "0.065 68.393 0.030"); 
        document.querySelector("#OutToLobCaption").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#PaYaOutsidePicIcon").setAttribute("position", "0.065 68.393 0.030");
        
        
      });
      
      if (sessionStorage.getItem('audio3') == "false") {
        ua.play();
        // Ujima1 Elements appear after 27 seconds
        setTimeout(function() {
        
        ujima1Elements.forEach(ujima1Elements => {
          ujima1Elements.setAttribute("visible", true);
          document.querySelector("#ujiOutToLob").setAttribute("position", "-5.109 -1.334 -6.5");
          document.querySelector("#ujiOutToUjiIn").setAttribute("position", "-3.889 -0.8 5.866");
          document.querySelector("#UjiOutToLobCaption").setAttribute("position", "-1.556 0.42 -1.976");
          document.querySelector("#UjiOutToUjiInCaption").setAttribute("position", "-1.9 .1 2.695");
          document.querySelector("#ujiOutMean").setAttribute("position", "-7.2 3 0");
        });
        
          
        }, 27000) // End Timeout 27
        
      } // End If
      else {
        // Ujima1 Elements appear Instant
        ujima1Elements.forEach(ujima1Elements => {
          ujima1Elements.setAttribute("visible", true);
          document.querySelector("#ujiOutToLob").setAttribute("position", "-5.109 -1.334 -6.5");
          document.querySelector("#ujiOutToUjiIn").setAttribute("position", "-3.889 -0.8 5.866");
          document.querySelector("#UjiOutToLobCaption").setAttribute("position", "-1.556 0.42 -1.976");
          document.querySelector("#UjiOutToUjiInCaption").setAttribute("position", "-1.9 .1 2.695");
          document.querySelector("#ujiOutMean").setAttribute("position", "-7.2 3 0");
        });
      } // End Else
      
      sessionStorage.setItem('audio3', 'true');
      
    }; // End of goToUjima1 Function

    this.el.addEventListener("click", goToUjima1);
  }
});