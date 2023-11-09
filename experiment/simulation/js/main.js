/* Lab name: Experimental Biochemistry
Exp name: Protein purification by affinity chromatography
File name: main.js
Developer: Prakriti Dhang */

function start() {
  document.getElementById("step0").disabled=true;
  document.getElementById("Check1").disabled=false;
}


function restartexp() {
  location.reload();
}


/** Step 1 */

function showcolumn() {
  window.scrollBy(0, 500);
  document.getElementById("emptycolumn").style.display = "block";
  document.getElementById("Check2").disabled=false;
}

var imgobjntadots = null;
function showeq() {
  window.scrollBy(0, 500);
  document.getElementById("actionid").innerHTML = "Equilibration.";
  document.getElementById("nibeads").style.display = "block";
  var currenttop = -12;

  var imageb = document.getElementById("nibeads");
  clearInterval(imgobjntadots);
  imgobjntadots = setInterval(frame, 30);

  function frame() {
      if (currenttop == 60) {
          document.getElementById("packedcolumn").style.display = "block";
          document.getElementById("actionid").innerHTML = "Equilibration.";
          document.getElementById("packedcolumn").setAttribute("onclick", "showchemicalequation()");
          clearInterval(imgobjntadots);
      }
      else {
          currenttop++;
          imageb.style.top = currenttop + '%';

      }
  }
}


function showchemicalequation() {
  document.getElementById("chemicalgrp").style.display = "block";
  document.getElementById("Check21").disabled=false;
}

/** Step 2 */
function cellysate() {
  window.scrollBy(0, 500);
  document.getElementById("actionid").innerHTML = "Cell lysate/Protein solution.";
  document.getElementById("celllysate").style.display = "block";
  document.getElementById("celllysate").setAttribute("onclick", "showdiffpro()");
}

function showdiffpro() {
  document.getElementById("diffpro").style.display = "block";
  document.getElementById("step22").disabled=false;
}


function prointerest() {
  window.scrollBy(0, 500);
  document.getElementById("proint").style.display = "block";
  document.getElementById("Check22").disabled=false;
}


var imgobjunbpro = null;
function sampleload() {
  window.scrollBy(0, 600);
  document.getElementById("actionid").innerHTML = "Sample Loading.";
  document.getElementById("pbluecol").style.display = "block";
  document.getElementById("unprostp2").style.display = "block";
  var currenttop = -18;
  clearInterval(imgobjunbpro);
  imgobjunbpro = setInterval(frameunb, 30);
  var imgunb = document.getElementById("unprostp2");
  function frameunb() {
      if (currenttop == 48) {
          document.getElementById("withpcol").style.display = "block";
          document.getElementById("Check32").disabled=false;

          
          clearInterval(imgobjunbpro);
      }
      else {
          currenttop++;
          imgunb.style.top = currenttop + '%';
      }
  }


}

/** Step 3*/
function washing() {
  document.getElementById("actionid").innerHTML = "Washing/Removal of contaminant proteins.";
  document.getElementById("wpc").style.display = "block";
  document.getElementById("Check33").disabled=false;
  window.scrollBy(0, 700);
}


var imgobjbufferA = null;
var imgobjbufferAl = null;
var imgobjbufferAorg = null;
var imgunb;
function buffera() {
 // if (document.getElementById("Check33").checked) {
      document.getElementById("buffera").style.display = "block";
      document.getElementById("buffera").setAttribute("onclick", "dropbuffera()");
      document.getElementById("actionid").innerHTML = "Buffer A is added.";
      window.scrollBy(0, 700);
 /* }
  else {
      imgunb.style.left = 40 + '%';
      imgunb.style.top = 5 + '%';
      imgunb.style.transform = "rotate(0deg)";
      document.getElementById("buffera").removeAttribute("onclick", "dropbuffera()");
      document.getElementById("Check34").disabled=false;
  }*/
}
function dropbuffera() {
  var currenttop = 5;
  var currentleft = 40;
  clearInterval(imgobjbufferA);
  imgobjbufferA = setInterval(framebuffera, 30);
  imgunb = document.getElementById("buffera");
  function framebuffera() {
      if (currenttop == -10) {
          clearInterval(imgobjbufferA);
          imgobjbufferAl = setInterval(framebufferaleft, 50);
      }
      else {
          currenttop--;
          imgunb.style.top = currenttop + '%';
      }
  }
  function framebufferaleft() {
      if (currentleft == 25) {
          clearInterval(imgobjbufferAl);
          imgunb.style.transform = "rotate(-60deg)";
          document.getElementById("buffera").removeAttribute("onclick", "dropbuffera()");
          document.getElementById("Check34").disabled=false;
          document.getElementById("Check33").disabled=true;
          // imgobjbufferAorg=setInterval(framebufferaorg,50);
      }
      else {
          currentleft--;
          imgunb.style.left = currentleft + '%';
      }
  }





}


var imgobjunpro = null;
function removeunpro() {
  window.scrollBy(0, 900);
//  imgunb.style.left = 40 + '%';
 // imgunb.style.top = 5 + '%';
 // imgunb.style.transform = "rotate(0deg)";
  document.getElementById("unpro").style.display = "block";

  var currenttop = 51;
  clearInterval(imgobjunpro);
  imgobjunbpro = setInterval(frameunpro, 60);
  var imgunpro = document.getElementById("unpro");
  function frameunpro() {
      if (currenttop == 80) {
          document.getElementById("tbunpro").style.display = "block";
          clearInterval(imgobjunpro);
          document.getElementById("Check35").disabled=false;
      }
      else {
          currenttop++;
          imgunpro.style.top = currenttop + '%';
      }
  }



}


function bindingpro() {
  document.getElementById("proni").style.display = "block";
  document.getElementById("Check61").disabled=false;
  window.scrollBy(0, 700);
}

/*  Step 4 Elution starts*/
var imgunbb;
function bufferb() {
  window.scrollBy(0, 700);
  //if (document.getElementById("Checkbb").checked) {
      document.getElementById("bufferb").style.display = "block";
      document.getElementById("bufferb").setAttribute("onclick", "dropbufferb()");
      imgunbb = document.getElementById("bufferb");
      document.getElementById("actionid").innerHTML = "Buffer B is added.";
      document.getElementById("protube1").style.display = "block";
      document.getElementById("Check61").disabled=false;
      document.getElementById("Check62").disabled=false;
      document.getElementById("Check63").disabled=false;
      document.getElementById("Check64").disabled=false;
      document.getElementById("Check65").disabled=false;
 // }
  /*else {
    window.scrollBy(0, 0 );
      imgunbb.style.left = 40 + '%';
      imgunbb.style.top = 5 + '%';
      imgunbb.style.transform = "rotate(0deg)";
      
      document.getElementById("bufferb").removeAttribute("onclick", "dropbufferb()");
      document.getElementById("Check61").disabled=false;
      document.getElementById("Check62").disabled=false;
      document.getElementById("Check63").disabled=false;
      document.getElementById("Check64").disabled=false;
      document.getElementById("Check65").disabled=false;

  }*/

}

var imgobjbufferb = null;
var imgobjbufferbl = null;
var imgobjbufferborg = null;

function dropbufferb() {
  var currenttopb = 5;
  var currentleftb = 50;
  clearInterval(imgobjbufferb);
  imgobjbufferb = setInterval(framebufferb, 30);
  imgunbb = document.getElementById("bufferb");
  function framebufferb() {
      if (currenttopb == -10) {
          clearInterval(imgobjbufferb);
          imgobjbufferbl = setInterval(framebufferbleft, 50);
      }
      else {
          currenttopb--;
          imgunbb.style.top = currenttopb + '%';
      }
  }
  function framebufferbleft() {
      if (currentleftb == 15) {
          clearInterval(imgobjbufferbl);
          imgunbb.style.transform = "rotate(-60deg)";
          document.getElementById("bufferb").removeAttribute("onclick", "dropbufferb()");
          elu10();
          // imgobjbufferAorg=setInterval(framebufferaorg,50);
      }
      else {
          currentleftb--;
          imgunbb.style.left = currentleftb + '%';
      }
  }
}



var imgobjpro10 = null;
function elu10() {
  
  document.getElementById("actionid").innerHTML = "Elution- 6 His taq protein.";
  document.getElementById("prointelu").style.display = "block";
  window.scrollBy(0, 900);
  var currenttop = 53;
  clearInterval(imgobjpro10);
  imgobjpro10 = setInterval(frameunpro, 60);
  var imgelu10 = document.getElementById("prointelu");
  function frameunpro() {
      if (currenttop == 80) {
          document.getElementById("pro1").style.display = "block";
          document.getElementById("Check61").checked = true;
          document.getElementById("prointelu").style.display = "none";
          clearInterval(imgobjpro10);
          
      }
      else {
          currenttop++;
          imgelu10.style.top = currenttop + '%';
      }
  }

}

var imgobjpro20 = null;
function elu20() {
  document.getElementById("bufferb").style.left= 34 + '%';
  window.scrollBy(0, 900);
  document.getElementById("actionid").innerHTML = "Elution of 20 %.";
  document.getElementById("pro1").style.display = "block";
  document.getElementById("prointelu").style.display = "block";
  document.getElementById("prointelu").style.left = 28 + '%';
  document.getElementById("protube2").style.display = "block";
  var currenttop = 53;
  clearInterval(imgobjpro20);
  imgobjpro20 = setInterval(frameunpro, 60);
  var imgelu20 = document.getElementById("prointelu");
  function frameunpro() {
      if (currenttop == 80) {
          document.getElementById("pro2").style.display = "block";
          document.getElementById("Check62").checked = true;
          document.getElementById("prointelu").style.display = "none";
          clearInterval(imgobjpro20);
         
      }
      else {
          currenttop++;
          imgelu20.style.top = currenttop + '%';
      }
  }
}


var imgobjpro40 = null;
function elu40() {
  window.scrollBy(0, 900);
  document.getElementById("bufferb").style.left= 54 + '%';
  document.getElementById("actionid").innerHTML = "Elution of 40 %.";
  document.getElementById("pro2").style.display = "block";
  document.getElementById("protube4").style.display = "block";
  document.getElementById("protube2").style.display = "block";
  document.getElementById("prointelu").style.display = "block";
  document.getElementById("prointelu").style.left = 49 + '%';
  var currenttop = 53;
  clearInterval(imgobjpro40);
  imgobjpro40 = setInterval(frameunpro, 60);
  var imgelu40 = document.getElementById("prointelu");
  function frameunpro() {
      if (currenttop == 80) {
          document.getElementById("pro4").style.display = "block";
          document.getElementById("Check63").checked = true;
          document.getElementById("prointelu").style.display = "none";
          clearInterval(imgobjpro40);
        
      }
      else {
          currenttop++;
          imgelu40.style.top = currenttop + '%';
      }
  }
}


var imgobjpro80 = null;
function elu80() {
  window.scrollBy(0, 900);
  document.getElementById("bufferb").style.left= 74 + '%';
  document.getElementById("actionid").innerHTML = "Elution of 80 %.";
  document.getElementById("pro4").style.display = "block";
  document.getElementById("protube8").style.display = "block";
  document.getElementById("protube4").style.display = "block";
  document.getElementById("prointelu").style.display = "block";
  document.getElementById("prointelu").style.left = 69 + '%';
  var currenttop = 53;
  clearInterval(imgobjpro80);
  imgobjpro80 = setInterval(frameunpro, 60);
  var imgelu80 = document.getElementById("prointelu");
  function frameunpro() {
      if (currenttop == 80) {
          document.getElementById("pro8").style.display = "block";
          document.getElementById("Check64").checked = true;
          document.getElementById("prointelu").style.display = "none";
          clearInterval(imgobjpro80);
       
      }
      else {
          currenttop++;
          imgelu80.style.top = currenttop + '%';
      }
  }
}

var imgobjpro100 = null;
function elu100() {
  window.scrollBy(0, 900);
  document.getElementById("bufferb").style.left= 94 + '%';
  document.getElementById("actionid").innerHTML = "Elution of 100 %.";
  document.getElementById("pro8").style.display = "block";
  document.getElementById("protube100").style.display = "block";
  document.getElementById("protube8").style.display = "block";
  document.getElementById("prointelu").style.display = "block";
  document.getElementById("prointelu").style.left = 90 + '%';
  var currenttop = 53;
  clearInterval(imgobjpro100);
  imgobjpro100 = setInterval(frameunpro, 60);
  var imgelu100 = document.getElementById("prointelu");
  function frameunpro() {
      if (currenttop == 80) {
          document.getElementById("pro100").style.display = "block";
          document.getElementById("Check65").checked = true;
          document.getElementById("prointelu").style.display = "none";
          clearInterval(imgobjpro100);
      
          document.getElementById("step7").disabled=false;
          
      }
      else {
          currenttop++;
          imgelu100.style.top = currenttop + '%';
      }
  }
}






/** Step6 */

function sdspage() {
  document.getElementById("actionid").innerHTML = "Analysis aluted fractions on SDS-PAGE.";
  document.getElementById("stepgel").style.display = "block";
}




function showgel() {
  window.scrollBy(0, 2500);

  document.getElementById("optgel").style.display = "block";
}


/*window.onload = function () {

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

}*/
