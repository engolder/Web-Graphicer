window.onload = function() {
    
    // accordion
    
    var acc = document.getElementsByClassName("accordion");
    var i,j
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        var panel = this.nextElementSibling;
        if (this.classList.contains("active")){
            this.classList.remove("active");
        } else {
            this.classList.add("active");
        } 
      }
    }
    
    // tabs
    
    var tabLink = documentd.getElementsByClassName("tabLink");
    tabLink[0].onclick = function() {
        document.getElementById("view").style.display = "block";
        document.getElementById("cssCode").style.display = "none";
    }
    tabLink[1].onclick = function() {
        document.getElementById("cssCode").style.display = "block";
        document.getElementById("view").style.display = "none";
    }
    
    // text box
    
    var textBox = document.getElementById("textBox");
    var opcBg = document.getElementById("opacityBg");
    
    textBox.onclick = function() {
        if ( this.classList.contains("ptr") ) {
            this.classList.remove("ptr");
            this.style.top = "50vh";
            opcBg.style.display = "block";
            opcBg.classList.add("opcOn");
        }
    }
    
    opcBg.onclick = function() {
        textBox.classList.add("ptr");
        textBox.style.top = "90vh";
        this.style.display = "none";
        this.classList.remove("opcOn");
    }
}