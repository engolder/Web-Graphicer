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
        // number value setting
        inputNumber[i].value = inputRange[i].value;
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
    
    // input text
    let inputText = document.querySelectorAll("input[type='text']");
    for(i=0; i<inputText.length; i++) {
        inputText[i].oninput = function() {
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
    
    // input checkbox
    let inputCheckbox = document.querySelectorAll("input[type='checkbox']");
    for(i=0; i<inputCheckbox.length; i++) {
        inputCheckbox[i].onchange = function() {
            setPreviewWithTool();
        }
    }
    
    // input radio
    let inputRadio = document.querySelectorAll("input[type='radio']");
    for(i=0; i<inputRadio.length; i++) {
        inputRadio[i].onchange = function() {
            setPreviewWithTool();
        }
    }
    
    // select
    let inputSelect = document.getElementsByTagName("select");
    for(i=0; i<inputSelect.length; i++) {
        inputSelect[i].onchange = function() {
            setPreviewWithTool();
        }
    }
    
    setPreviewWithTool();
}

//translating
function setPreviewWithTool() {
    let view = document.getElementById("view");
    let cssCode = document.querySelector("#cssCode textarea");
    let viewCsstext = "";
    let tabAct = document.querySelector(".tabLink[value='view']");
    cssCode.value = "";

    viewCsstext = 
        //length
        "width:"+document.querySelector("#menu-width input[type='number']").value+"px;"+
        "height:"+document.querySelector("#menu-height input[type='number']").value+"px;"+
        //color
        "background-color:#"+document.querySelector("#menu-background-color .jscolor").value+";"+
        //border
        "border-radius:"+document.querySelector("#menu-radius input[type='number']").value+"px;"+
        "border:"+document.querySelector("#menu-border-every-width").value+"px "+
        document.querySelector("#menu-border-every-style").value+" #"+
        document.querySelector("#menu-border .jscolor").value+";"+
        //outline
        "outline:"+document.querySelector("#menu-outline-width input[type='number']").value+"px "+
        document.querySelector("#menu-outline-style select").value+" #"+
        document.querySelector("#menu-outline-color .jscolor").value+";"+
        //Transform
        "transform:"+
//            "translate("+
//            document.querySelector("#menu-transform-translate-x").value+"px,"+
//            document.querySelector("#menu-transform-translate-y").value+"px) "+
//            "skew("+
//            document.querySelector("#menu-transform-skew-x").value+"deg,"+
//            document.querySelector("#menu-transform-skew-y").value+"deg) "
        "scale("+
        document.querySelector("#menu-transform-scale-x").value+","+
        document.querySelector("#menu-transform-scale-y").value+") "+
        "rotateX("+document.querySelector("#menu-transform-rotate-x").value+"deg) "+
        "rotateY("+document.querySelector("#menu-transform-rotate-y").value+"deg) "+
        "rotateZ("+document.querySelector("#menu-transform-rotate-z").value+"deg);"+
        //basic-tool
        "box-sizing:"+document.querySelector("#menu-box-sizing input[type='radio']:checked").value+";"+
        "opacity:"+document.querySelector("#menu-opacity input[type='number']").value+";"+
        //box shadow
        "box-shadow:"+
        ( ( document.querySelector("#box-inset").checked ) ? "inset " : "")+
        document.querySelector("#menu-box-shadow-x input[type='number']").value+"px "+
        document.querySelector("#menu-box-shadow-y input[type='number']").value+"px "+
        document.querySelector("#menu-box-shadow-blur input[type='number']").value+"px "+
        document.querySelector("#menu-box-shadow-spread input[type='number']").value+"px #"+
        document.querySelector("#menu-box-shadow-color .jscolor").value+";"+
        //text shaodw
        "text-shadow:"+
        document.querySelector("#menu-text-shadow-x input[type='number']").value+"px "+
        document.querySelector("#menu-text-shadow-y input[type='number']").value+"px "+
        document.querySelector("#menu-text-shadow-blur input[type='number']").value+"px #"+
        document.querySelector("#menu-text-shadow-color .jscolor").value+";"+
        //text
        "text-align:"+document.querySelector("#menu-text-align input[type='radio']:checked").value+";"+
        "text-overflow:"+document.querySelector("#menu-text-overflow select").value+";"+
        "text-decoration-line:"+document.querySelector("#menu-text-decoration-line select").value+";"+
        "text-decoration-style:"+document.querySelector("#menu-text-decoration-style select").value+";"+
        "text-indent:"+document.querySelector("#menu-text-indent input[type='number']").value+"px;"+
        "text-transform:"+document.querySelector("#menu-text-transform select").value+";"+
        //font
        "color:#"+document.querySelector("#menu-font-color .jscolor").value+";"+
        "font-size:"+document.querySelector("#menu-font-size input[type='number']").value+"px;"+
        "font-weight:"+document.querySelector("#menu-font-weight input[type='number']").value+";"+
        "font-variant:"+document.querySelector("#menu-font-variant select").value+";"+
        "letter-spacing:"+document.querySelector("#menu-letter-spacing input[type='number']").value+"px;"+
        "";


    //gradient
    if( document.getElementById("gradient-use").checked ) {
        let gradDirectionValue = document.getElementById("menu-gradient-direction").value;
        let color1Value = document.getElementById("menu-gradient-color1").value;
        let color2Value = document.getElementById("menu-gradient-color2").value;
        let browserSupport = ["-webkit-","-o-","-moz-",""];
        //radial
        if( gradDirectionValue == "radial") {
            let gradientText = "radial-gradient( circle, #"+ color1Value +", #"+ color2Value +");";
            for(i=0; i<browserSupport.length; i++) {
                viewCsstext += "background : "+ browserSupport[i] + gradientText;
            }
        }
        //linear
        else {
            let gradientText = "linear-gradient( " + gradDirectionValue + ", #"+ color1Value +", #"+ color2Value +");";
            for(i=0; i<browserSupport.length; i++) {
                viewCsstext += "background : "+ browserSupport[i] + gradientText;
            }
        }
    }

    //apply style in view
    if(tabAct.classList.contains("active"))
        view.style.cssText = viewCsstext;

    //adding css text in preview
    let lineAlign = viewCsstext.split(";");
    let className = document.querySelector("#menu-class-name input[type='text']");
    cssCode.value += "."+className.value+"{\n";
    for(i=0; i<lineAlign.length-1; i++) {
        cssCode.value += "  " + lineAlign[i] + ";\n";
    }
    cssCode.value += "}\n";
    
    /*
    //apply style in view:hover
    let viewHover = document.querySelector("#view:hover");
    let aniHoverName = document.querySelector("#menu-supplyAnimation-hover");
    viewHover.style.cssText = aniHoverName.value+" 1s;";
    
    //adding css hover text in preview
    cssCode.value += "."+className+":hover{\n   animation:"+aniHoverName.value+" 1s;\n}";
    //adding @keyframe text in preview
    viewHover.style.cssText = ;
    cssCode.value += "@keyframes "+aniHoverName.value+"{\n"+addKeyframes(aniHoverName.value)+"\n}";
    */
}

/*
function addKeyframes(aniName) {
    let keyframesText = "";
    switch(aniName) {
        case "bounce" :
            keyframesText = "from, 20%, 53%, 80%, to {\
                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\
                transform: translate3d(0,0,0);\
              }\
              40%, 43% {\
                animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\
                transform: translate3d(0, -30px, 0);\
              }\
              70% {\
                animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\
                transform: translate3d(0, -15px, 0);\
              }\
              90% {\
                transform: translate3d(0,-4px,0);\
              }" ;
            break;
        case "flash" :
            keyframesText = "from, 50%, to {\
                opacity: 1;\
              }\
              25%, 75% {\
                opacity: 0;\
              }";
            break;
        case "pulse" :
            keyframesText = "from {\
                transform: scale3d(1, 1, 1);\
              }\
              50% {\
                transform: scale3d(1.05, 1.05, 1.05);\
              }\
              to {\
                transform: scale3d(1, 1, 1);\
              }";
            break;
        case "rubberBand" :
            keyframesText = "from {\
                transform: scale3d(1, 1, 1);\
              }\
              30% {\
                transform: scale3d(1.25, 0.75, 1);\
              }\
              40% {\
                transform: scale3d(0.75, 1.25, 1);\
              }\
              50% {\
                transform: scale3d(1.15, 0.85, 1);\
              }\
              65% {\
                transform: scale3d(.95, 1.05, 1);\
              }\
              75% {\
                transform: scale3d(1.05, .95, 1);\
              }\
              to {\
                transform: scale3d(1, 1, 1);\
              }";
            break;
                  }
    
    return keyframesText;
}
*/