    // Get the header element
    var header = document.querySelector("header");

    // Store the initial position of the header
    var sticky = header.offsetTop;

    // On scroll, check the position and apply the "fixed-top" class
    window.onscroll = function() {
      if (window.pageYOffset > 100) {
        header.classList.add("fixed-top");
        header.style.backgroundColor = "#fff";
        header.style.top = "0"; // Ensures the header sticks at the top
      } else {
        header.classList.remove("fixed-top");
        header.style.top = ""; // Removes the fixed positioning when at the top
        header.style.backgroundColor = "transparent";
      }
    };
   