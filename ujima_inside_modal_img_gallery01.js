//Credit: w3schools.com
//Image Source: https://www.facebook.com/Virginia-Tech-Ujima-Living-Learning-Community-126220482553838

AFRAME.registerComponent("ujiinsidegallery01mod", {
  init: function() {

    var modalImg = document.querySelector(".uji-modal-gallery");
    var captionText = document.querySelector("#ujiCaption");
    var modal = document.querySelector(".modalujigallery");
    var prev = document.getElementsByClassName("prev3")[0];
    var next = document.getElementsByClassName("next3")[0];

    this.el.addEventListener("click", e => {
      
      modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi2.jpg?v=1607306626857");
      modalImg.setAttribute("alt","Members of Ujima LLC");
      modalImg.setAttribute("id","ujipicmember");
      modal.style.display = "block";
      captionText.innerHTML = modalImg.alt;
      prev.style.display = "none";
      next.style.display = "block";
      
      
    });

    var span = document.getElementsByClassName("closeujigallery")[0];

    span.addEventListener("click", e => {
      modal.style.display = "none"; 
    });



    next.addEventListener("click", e => {

      prev.style.display = "block";
      
       if(modalImg.getAttribute("id") == "ujipicmember"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi7.jpg?v=1607306639985");
        modalImg.setAttribute("alt","Members of Ujima LLC in Hokie Colors");
        modalImg.setAttribute("id","ujipichokie");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujipichokie"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi5.jpg?v=1607306633205");
        modalImg.setAttribute("alt","Officer Micah Pasquarell hosting a self defense demonstration in the Ujima Living Learning Community");
        modalImg.setAttribute("id","ujipicofficer");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujipicofficer"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi6-mentorTraining.JPG?v=1607306638340");
        modalImg.setAttribute("alt","Mentiorship Program Demonstration");
        modalImg.setAttribute("id","ujipicmentor");
        captionText.innerHTML = modalImg.alt;
      }
      else if(modalImg.getAttribute("id") == "ujipicmentor"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2Fujimavolunteerwork01.jpg?v=1607441958226");
        modalImg.setAttribute("alt","Ujima LLC students volunteering at the George Washington Carver Garden to create crop planting beds");
        modalImg.setAttribute("id","ujipicvol");
        captionText.innerHTML = modalImg.alt;
        next.style.display = "none";
      }
      
   
      
    });
    
    
    
    
    
      prev.addEventListener("click", e => {
  
      next.style.display = "block";
      
       
      if(modalImg.getAttribute("id") == "ujipicvol"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi6-mentorTraining.JPG?v=1607306638340");
        modalImg.setAttribute("alt","Mentiorship Program Demonstration");
        modalImg.setAttribute("id","ujipicmentor");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujipicmentor"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi5.jpg?v=1607306633205");
        modalImg.setAttribute("alt","Officer Micah Pasquarell hosting a self defense demonstration in the Ujima Living Learning Community");
        modalImg.setAttribute("id","ujipicofficer");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujipicofficer"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi7.jpg?v=1607306639985");
        modalImg.setAttribute("alt","Members of Ujima LLC in Hokie Colors");
        modalImg.setAttribute("id","ujipichokie");
        captionText.innerHTML = modalImg.alt;
      }
      
      else if(modalImg.getAttribute("id") == "ujipichokie"){
        modalImg.setAttribute("style", "width:700px;height:500px;");
        modalImg.setAttribute("src","https://cdn.glitch.com/38e0286a-5c71-4336-975e-225b675f6ada%2FujiActi2.jpg?v=1607306626857");
        modalImg.setAttribute("alt","Members of Ujima LLC");
        modalImg.setAttribute("id","ujipicmember");
        captionText.innerHTML = modalImg.alt;
        prev.style.display = "none";
      }

      
    });
    
    
    
  }
});
// Get the modal
