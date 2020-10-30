function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.body.style.overflow = "hidden";
      document.getElementById("MyContent").style.display = "none";
      document.getElementById("MyArticle").style.display = "none";
    } else {
      x.className = "topnav";
      document.body.style.overflow = "scroll";
      document.getElementById("MyContent").style.display = "block";
      document.getElementById("MyArticle").style.display = "block";
    }
  }