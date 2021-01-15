//Credit: w3schools.com
//Image Source: https://www.facebook.com/Virginia-Tech-Ujima-Living-Learning-Community-126220482553838

AFRAME.registerComponent("ujiinsidegallery02mod", {
  init: function() {

    var modalImg = document.querySelector(".ujimean-modal-gallery");
    var captionText = document.querySelector("#ujimeanCaption");
    var modal = document.querySelector(".modalujimeangallery");
    var prev = document.getElementsByClassName("prev4")[0];
    var next = document.getElementsByClassName("next4")[0];

    this.el.addEventListener("click", e => {
      
      modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-1.png?v=1607383535125");
      modalImg.setAttribute("id","ujimean01");
      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
      prev.style.display = "none";
      next.style.display = "block";
      
      
    });

    var span = document.getElementsByClassName("closeujimeangallery")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none"; 
    });



    next.addEventListener("click", e => {

      prev.style.display = "block";
      
       if(modalImg.getAttribute("id") == "ujimean01"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-2.png?v=1607383538702");
        modalImg.setAttribute("id","ujimean02");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujimean02"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-3.png?v=1607383541999");
        modalImg.setAttribute("id","ujimean03");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujimean03"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-4.png?v=1607383544858");
        modalImg.setAttribute("id","ujimean04");
        captionText.innerHTML = modalImg.alt;
      }
      else if(modalImg.getAttribute("id") == "ujimean04"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-5.png?v=1607383549857");
        modalImg.setAttribute("id","ujimean05");
        captionText.innerHTML = modalImg.alt;
        
      }
      else if(modalImg.getAttribute("id") == "ujimean05"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-6.png?v=1607383552816");
        modalImg.setAttribute("id","ujimean06");
        captionText.innerHTML = modalImg.alt;
        next.style.display = "none";
      }
      
   
      
    });
    
    
    
    
    
      prev.addEventListener("click", e => {
  
      next.style.display = "block";
      
       
      if(modalImg.getAttribute("id") == "ujimean06"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-5.png?v=1607383549857");
        modalImg.setAttribute("id","ujimean05");
        captionText.innerHTML = modalImg.alt;
      }
      
      
      else if(modalImg.getAttribute("id") == "ujimean05"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-4.png?v=1607383544858");
        modalImg.setAttribute("id","ujimean04");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujimean04"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-3.png?v=1607383541999");
        modalImg.setAttribute("id","ujimean03");
        captionText.innerHTML = modalImg.alt;
        
      }
        else if(modalImg.getAttribute("id") == "ujimean03"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-2.png?v=1607383538702");
        modalImg.setAttribute("id","ujimean02");
        captionText.innerHTML = modalImg.alt;
        
      }
        else if(modalImg.getAttribute("id") == "ujimean02"){
        
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimean-1.png?v=1607383535125");
        modalImg.setAttribute("id","ujimean01");
        captionText.innerHTML = modalImg.alt;
        prev.style.display = "none";
      }

      
    });
    
    
    
  }
});
// Get the modal
