//Credit: w3schools.com

AFRAME.registerComponent("modyatesgallery", {
  init: function() {
    // var modal = document.querySelector("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.querySelector(".modal-gallery-yates");
    var captionText = document.querySelector("#caption2");
    var modal = document.querySelector(".yatesmodalgallery");
    var prev = document.getElementsByClassName("prev1")[0];
    var next = document.getElementsByClassName("next1")[0];
    var span = document.getElementsByClassName("closeyatesgallery")[0];
    var yatesaud = document.querySelector("#yatesaudio");

    
    
    this.el.addEventListener("click", e => {

    //  prev.style.display = "none";
    //  next.style.display = "none";
    //  span.style.display = "none";

        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fkisspng-computer-icons-icon-design-information-hunde-5b4b4cc4cfb2f5.7756498215316615088508.png?v=1604554450895");
        modalImg.setAttribute("alt","Charlie Lee Yates was the first African-American Student to graduate from Virginia Tech. He was one of six honors graduates in mechanical engineering in 1958. A graduate of Booker T. Washington High school in Norfolk; he enrolled in the Engineering School and the Corps of Cadets in 1954. He not only graduated with honors in four years, but also served as an officer in two engineering groups on campus, Tau Beta Pi and Pi Tau Sigma. After graduating, Yates went on to earn his masters degree from California Tech and a Ph.D. from Johns Hopkins. Dr. Yates returned to Virginia Tech in 1979 to serve on the faculty of the Department of Mechanical Engineering (1979-1983). He left Tech in 1983 and returned in July of 1987 as an associate professor in the department of Aerospace and Ocean Engineering.");
        modalImg.setAttribute("id","yatestranscript");
        modalImg.setAttribute("style", "width:0px;height:0px;");
        modal.style.display = "block";
        captionText.innerHTML = modalImg.alt;

        if (sessionStorage.getItem('audio6') == "false") {
          yatesaud.play();
          setTimeout(function(){
            modalImg.setAttribute("alt", "Now use the '<' and '>' icons to explore the image gallery of Charlie Yates. You can close the gallery anytime by clicking on 'X' icon at the top right corner of this window.");
            captionText.innerHTML = modalImg.alt;
            prev.style.display = "none";
            next.style.display = "block";
            span.style.display = "block";
            span.addEventListener("click", e => {
            modal.style.display = "none";
      });
          },63000) //64
        }

        else {
            prev.style.display = "none";
            next.style.display = "block";
            span.style.display = "block";
            span.addEventListener("click", e => {
            modal.style.display = "none";
        });


      }

     sessionStorage.setItem('audio6', 'true');

    });

   



    next.addEventListener("click", e => {
      modalImg.setAttribute("style", "width:500px;height:600px;");
      prev.style.display = "block";
      
      if(modalImg.getAttribute("id") == "yatestranscript"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fcharles%20yates%2C%201958.jpg?v=1605771052982");
        modalImg.setAttribute("alt","Charles Yates in 1958.");
        modalImg.setAttribute("id","cyates1958");
        captionText.innerHTML = modalImg.alt;
        
      }
      
      else if(modalImg.getAttribute("id") == "cyates1958"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCharles%20Yates%20at%20Graduation%2C%201958%20.jpg?v=1605771052675");
        modalImg.setAttribute("alt","Charles Yates at Graduation, 1958.");
        modalImg.setAttribute("id","yatesgrad");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "yatesgrad"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCharlie%20Yates%2C%20Board%20of%20Visitors%2C%201983.jpg?v=1607346509195");
        modalImg.setAttribute("alt","Charlie Yates with Virginia Tech Board of Visitors in 1983.");
        modalImg.setAttribute("id","yatesvisitors");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "yatesvisitors"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCHARLES%20YATES%2C%20ESSEX%20FINNEY%2C%20LINDSAY%20CHERRY%20AND%20MATTHEW%20WINSTON%20SR.%20IN%201999.jpg?v=1607346509217");
        modalImg.setAttribute("alt","Charles Yates, Essex Finney, Lindsay Cherry and Matthew Winston Sr. in 1999");
        modalImg.setAttribute("id","yatesfinney");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "yatesfinney"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCHARLES%20YATES%2C%20VPI'S%20FIRST%20NEGRO%20GRADUATE%20WOULD%20'DO%20IT%20ALL%20OVER%20AGAIN'%2C%20THE%20NORFOLK%20VIRGINIAN%20PILOT%2C%20JUNE%2010%2C%201958.jpg?v=1607346508193");
        modalImg.setAttribute("alt","Charles Yates, VPI's First Negro Graduate News Story");
        modalImg.setAttribute("id","yatesnews");
        captionText.innerHTML = modalImg.alt;
      }
      
      
      else if(modalImg.getAttribute("id") == "yatesnews"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FYATES%20professor.jpg?v=1607346507303");
        modalImg.setAttribute("alt","Charlie L. Yates, Associate Professor of Aerospace and Ocean Engineering at Virginia Tech in 1987.");
        modalImg.setAttribute("id","yatesprof");
        captionText.innerHTML = modalImg.alt;
        next.style.display = "none";
      }
      
      
      
      
      
    });
    
    

      prev.addEventListener("click", e => {
  
      next.style.display = "block";
      modalImg.setAttribute("style", "width:500px;height:600px;");
      
       if(modalImg.getAttribute("id") == "yatesprof"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCHARLES%20YATES%2C%20VPI'S%20FIRST%20NEGRO%20GRADUATE%20WOULD%20'DO%20IT%20ALL%20OVER%20AGAIN'%2C%20THE%20NORFOLK%20VIRGINIAN%20PILOT%2C%20JUNE%2010%2C%201958.jpg?v=1607346508193");
        modalImg.setAttribute("alt","Charles Yates, VPI's First Negro Graduate News Story");
        modalImg.setAttribute("id","yatesnews");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "yatesnews"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCHARLES%20YATES%2C%20ESSEX%20FINNEY%2C%20LINDSAY%20CHERRY%20AND%20MATTHEW%20WINSTON%20SR.%20IN%201999.jpg?v=1607346509217");
        modalImg.setAttribute("alt","Charles Yates, Essex Finney, Lindsay Cherry and Matthew Winston Sr. in 1999");
        modalImg.setAttribute("id","yatesfinney");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "yatesfinney"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCharlie%20Yates%2C%20Board%20of%20Visitors%2C%201983.jpg?v=1607346509195");
        modalImg.setAttribute("alt","Charlie Yates with Virginia Tech Board of Visitors in 1983.");
        modalImg.setAttribute("id","yatesvisitors");
        captionText.innerHTML = modalImg.alt;
        
      }
        
      else if(modalImg.getAttribute("id") == "yatesvisitors"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FCharles%20Yates%20at%20Graduation%2C%201958%20.jpg?v=1605771052675");
        modalImg.setAttribute("alt","Charles Yates at Graduation, 1958.");
        modalImg.setAttribute("id","yatesgrad");
        captionText.innerHTML = modalImg.alt;
        
      }
        
      else if(modalImg.getAttribute("id") == "yatesgrad"){
      modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fcharles%20yates%2C%201958.jpg?v=1605771052982");
      modalImg.setAttribute("alt","Charles Yates in 1958");
      modalImg.setAttribute("id","cyates1958");
      captionText.innerHTML = modalImg.alt;
      
        
      }
        
      else if (modalImg.getAttribute("id") == "cyates1958"){
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fkisspng-computer-icons-icon-design-information-hunde-5b4b4cc4cfb2f5.7756498215316615088508.png?v=1604554450895");
        modalImg.setAttribute("alt","Charlie Lee Yates was the first African-American Student to graduate from Virginia Tech. He was one of six honors graduates in mechanical engineering in 1958. A graduate of Booker T. Washington High school in Norfolk; he enrolled in the Engineering School and the Corps of Cadets in 1954.He not only graduated with honors in four years, but also served as an officer in two engineering groups on campus, Tau Beta Pi and Pi Tau Sigma. After graduating, Yates went on to earn his masters degree from California Tech and a Ph.D. from Johns Hopkins. Dr. Yates returned to Virginia Tech in 1979 to serve on the faculty of the Department of Mechanical Engineering (1979-1983). He left Tech in 1983 and returned in July of 1987 as an associate professor in the department of Aerospace and Ocean Engineering.");
        modalImg.setAttribute("id","yatestranscript");
        modalImg.setAttribute("style", "width:0px;height:0px;");
        captionText.innerHTML = modalImg.alt;
        prev.style.display = "none";
        }
        


      
    });
    
    
    
  }
});
// Get the modal
