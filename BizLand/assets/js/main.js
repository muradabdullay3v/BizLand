function myFunction() {
    var x = document.getElementById("responsive_navigation");
    if (x.className === "responsive_nav") {
      x.className += " opened";
    } else {
      x.className = "responsive_nav";
    }
  }