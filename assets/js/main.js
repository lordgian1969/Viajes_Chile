$(document).ready(function(){ 
  alert("hola")
    // Add smooth scrolling to all links
    $(".nav-link").on('click', function(event) {
  
       event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html').animate({
          scrollTop: $(hash).offset().top - 5,
        }, 1000
        
           );
      
    });
   
  });

  $('[data-toggle="tooltip"]').tooltip()

  $('[data-toggle="popover"]').popover()
