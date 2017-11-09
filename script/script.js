window.onload = function() {
    
    // accordion menu
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
      }
    }
    
    // tabs menu
    let tabLink = document.getElementsByClassName("tabLink");
    let crtbar = document.getElementById("currentbar");
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
    
    // open text box event
    let textBox = document.getElementById("textBox");
    let opcBg = document.getElementById("opacityBg");
    textBox.onclick = function() {
        if ( this.classList.contains("ptr") ) {
            this.classList.remove("ptr");
            this.style.top = "50vh";
            opcBg.style.display = "block";
            opcBg.classList.add("opcOn");
        }
    }
        // exit text box
    opcBg.onclick = function() {
        textBox.classList.add("ptr");
        textBox.style.top = "90vh";
        this.style.display = "none";
        this.classList.remove("opcOn");
    }
    
    // linking inputText value to view 
    
    let contents = document.getElementById("inputContents");
    contents.oninput = function() {
        document.getElementById("view").innerHTML = contents.value;
    }
    
    // checking value fuction
    
    // input range, input number
    let inputRange = document.querySelectorAll("input[type='range']");
    let inputNumber = document.querySelectorAll("input[type='number']");
    for(i=0; i<inputRange.length; i++) {
        // from range value to number value
        inputRange[i].oninput = function() {
            let valueTarget = this.parentNode.previousElementSibling.querySelector("input[type='number']");
            valueTarget.value = this.value;
            setPreviewWithTool();
        }
        // from number value to range value
        inputNumber[i].oninput = function() {
            let valueTarget = this.parentNode.nextElementSibling.querySelector("input[type='range']");
            valueTarget.value = this.value;
            setPreviewWithTool();
        }
    }
    
    // input color
    let inputColor = document.querySelectorAll(".jscolor");
    for(i=0; i<inputColor.length; i++) {
        inputColor[i].onchange = function() {
            setPreviewWithTool();
        }
    }
    
    function setPreviewWithTool() {
        let view = document.getElementById("view");
        let cssCode = document.querySelector("#cssCode textarea");
        let tabAct = document.querySelector(".tabLink[value='view']");
        let viewCsstext = "";
        cssCode.value = "";
        
        viewCsstext = 
            //length
            "width:"+document.querySelector("#menu-width input[type='number']").value+"px;"+
            "height:"+document.querySelector("#menu-height input[type='number']").value+"px;"+
            //color
            "background-color:#"+document.querySelector("#menu-background-color .jscolor").value+";";
        
        
        //gradient
        if( document.getElementById("gradient-use").checked ) {
            //radial
            if( document.getElementById("menu-gradient-direction").value == "radial") {
                viewCsstext +=
                    "background : radial-gradient( circle, #"+
                    document.getElementById("menu-gradient-color1").value +", #"+
                    document.getElementById("menu-gradient-color2").value +");";
            }
            //linear
            else {
                viewCsstext +=
                    "background : linear-gradient( " + document.getElementById("menu-gradient-direction").value + ", #"+
                    document.getElementById("menu-gradient-color1").value +", #"+
                    document.getElementById("menu-gradient-color2").value +");";
            }
        }
        
        view.style.cssText = viewCsstext;
        
        if( !tabAct.classList.contains("active") ) {
            view.style.cssText += "display : none;";
        }
        
        let lineAlign = viewCsstext.split(";");
        
        for(i=0; i<lineAlign.length-1; i++) {
            cssCode.value += lineAlign[i] + ";\n";
        }
    }
}