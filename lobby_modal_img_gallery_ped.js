//Credit: w3schools.com

AFRAME.registerComponent("modpedgallery", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.querySelector(".modal-gallery");
    var captionText = document.querySelector("#caption");
    var modal = document.querySelector(".modalgallery");
    var prev = document.getElementsByClassName("prev2")[0];
    var next = document.getElementsByClassName("next2")[0];
    var pedaud = document.querySelector("#pedaudio");
    var span = document.getElementsByClassName("closegallery")[0];

    this.el.addEventListener("click", e => {
      // prev.style.display = "none";
      // next.style.display = "none";
      // span.style.display = "none";

      modalImg.setAttribute(
        "src",
        "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fkisspng-computer-icons-icon-design-information-hunde-5b4b4cc4cfb2f5.7756498215316615088508.png?v=1604554450895"
      );
      
      modalImg.setAttribute("id", "pedtranscript");
      modalImg.setAttribute(
        "alt",
        "In September of 1953, Irving Peddrew III of Hampton, VA became the first black student admitted to Virginia Tech, one of over 3,322 students. Majoring in electrical engineering, Peddrew was permitted to take classes, but was categorized as a “day military student” and was prohibited from living or eating on campus. Although Peddrew recalls no overt instances of racism on campus, he described a strong undertone of exclusion. After 3 years of experiencing marginalization, Peddrew left Virginia Tech without graduating. He decided to continue his education in California. He enrolled in some courses at Santa Monica City College and took acting classes in Los Angeles. He got a job as a draftsman for an aerospace firm, Summers Gyroscope. In 2003, VT passed a resolution renaming New Residence Hall West as Peddrew-Yates Hall. In 2016, Irving Peddrew III was presented with an honorary degree in electrical engineering at the University’s Commencement Ceremony. "
      );
      captionText.innerHTML = modalImg.alt;
      modalImg.setAttribute("style", "width:0px;height:0px;");
      modal.style.display = "block";
      

      if (sessionStorage.getItem("audio5") == "false") {
         pedaud.play();
        
        setTimeout(function() {
          modalImg.setAttribute("alt", "Now use the '<' and '>' icons to explore the image gallery of Irving Peddrew. You can close the gallery anytime by clicking on 'X' icon at the top right corner of this window.");
          captionText.innerHTML = modalImg.alt;
          prev.style.display = "none";
          next.style.display = "block";
          span.style.display = "block";
          span.addEventListener("click", e => {
            modal.style.display = "none";
          });
        }, 76000); //77
      } else {
        prev.style.display = "none";
        next.style.display = "block";
        span.style.display = "block";
        span.addEventListener("click", e => {
          modal.style.display = "none";
        });
      }

      sessionStorage.setItem("audio5", "true");
    });

    next.addEventListener("click", e => {
      prev.style.display = "block";
      modalImg.setAttribute("style", "width:500px;height:600px;");

      if (modalImg.getAttribute("id") == "pedtranscript") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/5fb69d5a-3622-43ab-8d6e-54b70cddb80f%2Fpedcadet800.jpg?v=1602971317971"
        );
        modalImg.setAttribute("alt", "Peddrew in Cadet Uniform");
        modalImg.setAttribute("id", "pedcadet");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedcadet") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FPeddrew%20Bowling.jpg?v=1605771052928"
        );
        modalImg.setAttribute("alt", "Peddrew bowling with some classmates");
        modalImg.setAttribute("id", "pedbowling");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedbowling") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FFloyd%20Wilson%2C%20Irving%20Peddrew%20and%20Charles%20Yates%20.jpg?v=1605771052807"
        );
        modalImg.setAttribute(
          "alt",
          "Floyd Wilson, Irving Peddrew and Charles Yates"
        );
        modalImg.setAttribute("id", "floydpedyates");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "floydpedyates") {
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FVT%20admites%20first%20Negro%20(1).jpg?v=1607339533955"
        );
        modalImg.setAttribute(
          "alt",
          "VT Admits first Negro Student: Irving Peddrew III"
        );
        modalImg.setAttribute("id", "pedfirstnegro");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedfirstnegro") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FPeddrew%20Ring%20Dance%20Letter%20(1).jpg?v=1607339535031"
        );
        modalImg.setAttribute("alt", "Ring Dance Letter of Peddrew");
        modalImg.setAttribute("id", "pedringdance");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedringdance") {
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FPeddrew%20at%20commencement%20(1).jpg?v=1607339536645"
        );
        modalImg.setAttribute(
          "alt",
          "Peddrew receiving an honorary degree at Virginia Tech's commencement ceremonies on May 13, 2016"
        );
        modalImg.setAttribute("id", "peddegree");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "peddegree") {
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fpeddrew%20with%20tim%20sands.jpg?v=1607339531553"
        );
        modalImg.setAttribute(
          "alt",
          "Irving Peddrew with the 16th and current president of Virgnia Tech, Timothy Sands"
        );
        modalImg.setAttribute("id", "pedtim");
        captionText.innerHTML = modalImg.alt;
        next.style.display = "none";
      }
    });

    prev.addEventListener("click", e => {
      next.style.display = "block";
      modalImg.setAttribute("style", "width:500px;height:600px;");

      if (modalImg.getAttribute("id") == "pedtim") {
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FPeddrew%20at%20commencement%20(1).jpg?v=1607339536645"
        );
        modalImg.setAttribute(
          "alt",
          "Peddrew receiving an honorary degree at Virginia Tech's commencement ceremonies on May 13, 2016"
        );
        modalImg.setAttribute("id", "peddegree");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "peddegree") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FPeddrew%20Ring%20Dance%20Letter%20(1).jpg?v=1607339535031"
        );
        modalImg.setAttribute("alt", "Ring Dance Letter of Peddrew");
        modalImg.setAttribute("id", "pedringdance");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedringdance") {
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FVT%20admites%20first%20Negro%20(1).jpg?v=1607339533955"
        );
        modalImg.setAttribute(
          "alt",
          "VT Admits first Negro Student: Irving Peddrew III"
        );
        modalImg.setAttribute("id", "pedfirstnegro");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedfirstnegro") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FFloyd%20Wilson%2C%20Irving%20Peddrew%20and%20Charles%20Yates%20.jpg?v=1605771052807"
        );
        modalImg.setAttribute(
          "alt",
          "Floyd Wilson, Irving Peddrew and Charles Yates"
        );
        modalImg.setAttribute("id", "floydpedyates");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "floydpedyates") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FPeddrew%20Bowling.jpg?v=1605771052928"
        );
        modalImg.setAttribute("alt", "Peddrew bowling with some classmates");
        modalImg.setAttribute("id", "pedbowling");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedbowling") {
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/5fb69d5a-3622-43ab-8d6e-54b70cddb80f%2Fpedcadet800.jpg?v=1602971317971"
        );
        modalImg.setAttribute("alt", "Peddrew in Cadet Uniform");
        modalImg.setAttribute("id", "pedcadet");
        captionText.innerHTML = modalImg.alt;
      } else if (modalImg.getAttribute("id") == "pedcadet") {
        modalImg.setAttribute("style", "width:0px;height:0px;");
        modalImg.setAttribute(
          "src",
          "https://cdn.glitch.com/5fb69d5a-3622-43ab-8d6e-54b70cddb80f%2Fpedcadet800.jpg?v=1602971317971"
        );
        modalImg.setAttribute(
          "alt",
          "In September of 1953, Irving Peddrew III of Hampton, VA became the first black student admitted to Virginia Tech, one of over 3,322 students. Majoring in electrical engineering, Peddrew was permitted to take classes, but was categorized as a “day military student” and was prohibited from living or eating on campus. Although Peddrew recalls no overt instances of racism on campus, he described a strong undertone of exclusion. After 3 years of experiencing marginalization, Peddrew left Virginia Tech without graduating. He decided to continue his education in California. He enrolled in some courses at Santa Monica City College and took acting classes in Los Angeles. He got a job as a draftsman for an aerospace firm, Summers Gyroscope. In 2003, VT passed a resolution renaming New Residence Hall West as Peddrew-Yates Hall. In 2016, Irving Peddrew III was presented with an honorary degree in electrical engineering at the University’s Commencement Ceremony. "
        );
        modalImg.setAttribute("id", "pedtranscript");
        captionText.innerHTML = modalImg.alt;
        prev.style.display = "none";
      }
    });
  }
});

// Get the modal
