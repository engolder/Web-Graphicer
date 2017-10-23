window.onload = function() {
    
    var acc = document.getElementsByClassName("accordion");
    var i,j
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            this.classList.remove("active");
        } else {
            for(j = 0; j < acc.length; j++) {
                acc[j].nextElementSibling.style.maxHeight = null;
                acc[j].classList.remove("active");  
            }
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.classList.add("active");
        } 
      }
    }
}