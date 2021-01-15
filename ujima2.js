AFRAME.registerComponent('ujima2', {
  init: function() {
    
    let vid = document.querySelector("#vid");
    let lobbyElements = document.querySelectorAll(".lob");
    let outsideElements = document.querySelectorAll(".out");
    let ujima1Elements = document.querySelectorAll(".uji1");
    let ujima2Elements = document.querySelectorAll(".uji2");
    let endElements = document.querySelectorAll(".end");
    let uaIn = document.querySelector("#uInAudio");
    var v3 = document.querySelector("#ujiin");
    let map = document.querySelector("#map");
    var modalImg = document.querySelector(".outcc-modal");
    var captionText = document.querySelector("#captionoutCC");
    var modal = document.querySelector(".outCC");
    
    
    let goToUjima2 = () => {
      
      console.log("Ujima2");
      v3.play();
      
      map.setAttribute("src", "#ujiinmap");
      //Source: https://llp.vt.edu/llc/ujima.html
      modalImg.setAttribute("src", "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FUjimaInCC.png?v=1607052767416");
       modalImg.setAttribute("alt", "You are inside the Ujima living learning community room which is named after an essential concept in African philosophy and the third principle of Kwanzaa. Ujima, as principle and practice, means that we are collectively responsible for our victories and achievements as much as we are for our failures and setbacks. Ujima is open to students of all backgrounds who are interested in understanding, supporting, and learning about African American culture. This Community provides students with opportunities to be immersed in Black/African-American culture. Focusing on cultural enrichment and academic excellence, the community allows students with similar interests to take part in programming and dialogue surrounding Black/African-American community. Explore the room to learn more about the significance of this Community. ");
      
      vid.setAttribute("src", "#ujiin");
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
        ujima1Elements.setAttribute("visible", true);     
        document.querySelector("#ujiOutToLob").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#ujiOutToUjiIn").setAttribute("position", "0.065 68.393 0.030");
        document.querySelector("#UjiOutToLobCaption").setAttribute("position", "-0.065 68.393 0.030");
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
      


    if (sessionStorage.getItem('audio4') == "false") {
        uaIn.play();
        // UjimaInside Elements appear after 51 seconds
        setTimeout(function() {
        
        ujima2Elements.forEach(ujima2Elements => {
          ujima2Elements.setAttribute("visible", true);
              document.querySelector("#ujiInToUjiOut").setAttribute("position", "5.75 -0.704 -12.101");
              document.querySelector("#uji-video-hotspot").setAttribute("position", "-0.034 1.559 6.663");
              document.querySelector("#uji-image-gallery-hotspot").setAttribute("position", "0.242 1.1 -10.384");
              document.querySelector("#UjiInToUjiOutCaption").setAttribute("position", "2.89 -0.124 -6.0");
              document.querySelector("#UjiInToEnd").setAttribute("position", "9.156 -1.01 7.422");
              document.querySelector("#UjiInToEndCaption").setAttribute("position", "9.087 -2.08 7.382");
            


        });
        
          
        }, 51000) // End Timeout 51
        
      } // End If
      else {
        // UjimaInside Elements appear Instant
        ujima2Elements.forEach(ujima2Elements => {
          ujima2Elements.setAttribute("visible", true);
          document.querySelector("#ujiInToUjiOut").setAttribute("position", "5.75 -0.704 -12.101");
          document.querySelector("#uji-video-hotspot").setAttribute("position", "-0.034 1.559 6.663");
          document.querySelector("#uji-image-gallery-hotspot").setAttribute("position", "0.242 1.1 -10.384");
          document.querySelector("#UjiInToUjiOutCaption").setAttribute("position", "2.89 -0.124 -6.0");
          document.querySelector("#UjiInToEnd").setAttribute("position", "9.156 -1.01 7.422");
          document.querySelector("#UjiInToEndCaption").setAttribute("position", "9.087 -2.08 7.382");
        });
      } // End Else
      
      sessionStorage.setItem('audio4', 'true');
      
    }; // End of goToUjima2 Function
    
    
    this.el.addEventListener("click", goToUjima2);
    }
  });