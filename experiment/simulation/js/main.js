/* Lab name: Experimental Biochemistry
Exp name: Protein purification by affinity chromatography
File name: main.js
Developer: Prakriti Dhang */

function start(){

}


function restartexp(){
location.reload();
}


/** Step 1 */

function showcolumn(){
    document.getElementById("emptycolumn").style.display="block";
}

var imgobjntadots = null;
function showeq(){
    document.getElementById("nibeads").style.display="block";
    var currenttop = -12;
   
    var imageb = document.getElementById("nibeads");
    clearInterval(imgobjntadots);
    imgobjntadots = setInterval(frame, 30);
  
    function frame() {
      if (currenttop == 60) {
        document.getElementById("packedcolumn").style.display = "block";
        document.getElementById("actionid").innerHTML="Equilibration.";
        document.getElementById("packedcolumn").setAttribute("onclick","showchemicalequation()");
        clearInterval(imgobjntadots);
      }
      else {
        currenttop++;
        imageb.style.top = currenttop + '%';
  
      }
    }
}


function showchemicalequation(){
  document.getElementById("chemicalgrp").style.display = "block";
}

/** Step 2 */
function cellysate(){

}

function prointerest(){

}




function sampleload(){

}

/** Step 3*/
function washing(){

}

function buffera(){

}


function removeunpro(){

}


function bindingpro(){

}

 /*  Step 4 Elution starts*/ 

 function elu10(){

 }

 function elu20(){
    
 }
 function elu40(){
    
 }

 function elu80(){
    
 }
 function elu100(){
    
 }






/** Step6 */

function sdspage(){
document.getElementById("stepgel").style.display="block";
}




function showgel(){
    window.scrollBy(0,2500);
    
    document.getElementById("optgel").style.display="block";
}


window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Absorbance Vs Time"
      },
      axisY: {
        title: "Absorbance",
        minimum: -0.2,
        maximum: 1,
        gridThickness: 0
        
  
      },
      axisX: {
        title: "Time (min)",
        minimum: 1,
        maximum: 40,
        crosshair: {
          enabled: false
        }
  
  
  
      },
      data: [{
  
        type: "spline",
        dataPoints: [
  
        ]
      }]
    });
    chart.render();
  
  }
  