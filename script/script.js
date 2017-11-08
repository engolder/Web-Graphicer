window.onload = function() {
    
    // accordion
    
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
      }
    }
    
    // tabs
    
    var tabLink = document.getElementsByClassName("tabLink");
    var crtbar = document.getElementById("currentbar");
    tabLink[0].onclick = function() {
        document.getElementById("view").style.display = "block";
        document.getElementById("cssCode").style.display = "none";
        this.classList.add("active");
        tabLink[1].classList.remove("active");
        crtbar.style.left = "0";
    }
    tabLink[1].onclick = function() {
        document.getElementById("cssCode").style.display = "block";
        document.getElementById("view").style.display = "none";
        this.classList.add("active");
        tabLink[0].classList.remove("active");
        crtbar.style.left = "50%";
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
    
    // input text contents fuction
    
    var contents = document.getElementById("inputContents");
    contents.oninput = function() {
        document.getElementById("view").innerHTML = contents.value;
    }
    
    // checking value fuction
    
    var inputRange = document.querySelectorAll("input[type='range']");
    var inputNumber = document.querySelectorAll("input[type='number']");
    for(i=0; i<inputRange.length; i++) {
        // from range value to number value
        inputRange[i].oninput = function() {
            var valueTarget = this.parentNode.previousElementSibling.querySelector("input[type='number']");
            valueTarget.value = this.value;
            setPreview();
        }
        // from number value to range value
        inputNumber[i].oninput = function() {
            var valueTarget = this.parentNode.nextElementSibling.querySelector("input[type='range']");
            valueTarget.value = this.value;
            setPreview();
        }
    }
    
    var inputColor = document.querySelectorAll(".jscolor");
    for(i=0; i<inputColor.length; i++) {
        inputColor[i].onchange = function() {
            setPreview();
        }
    }
    
    var view = document.getElementById("view");
    var cssCode = document.querySelector("#cssCode textarea");
    function setPreview() {
        var viewCsstext = "";
        cssCode.value = "";
        
        viewCsstext = 
            //length
            "width:"+document.querySelector("#menu-width input[type='number']").value+"px;"+
            "height:"+document.querySelector("#menu-height input[type='number']").value+"px;"+
            //color
            "background-color:#"+document.querySelector("#menu-background-color .jscolor").value+";";
        
        view.style.cssText = viewCsstext;
        if(view.style.display == "none") {
            view.style.cssText += "display : none";    
        }
        
        var lineAlign = viewCsstext.split(";");
        
        for(i=0; i<lineAlign.length; i++) {
            cssCode.value += lineAlign[i] + "\n";
        }
    }
}