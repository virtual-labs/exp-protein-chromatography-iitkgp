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

function showeq(){
    document.getElementById("nibeads").style.display="block";
}

/** Step 2 */
function cellysate(){

}

function prointerest(){

}


/** Step 3*/

function sampleload(){

}

function washing(){

}

function buffera(){

}

/** Step 4 */
function removeunpro(){

}

/** Step 5 */
function bindingpro(){

}

 /*  Step 6 Elution starts*/ 

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






/** Step8 */

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
  