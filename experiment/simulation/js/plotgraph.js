/* Lab name: Experimental Biochemistry
Exp name: Protein purification by affinity chromatography
File name: main.js
Developer: Prakriti Dhang */

/**  Step 5 Data Acquistion*/
document.getElementById('step7').addEventListener('click', function () {
	document.getElementById('chartContainer').style.height= 400 +"px";
	window.scrollBy(0, 2500);
	document.getElementById("actionid").innerHTML="Elution profile";
	document.getElementById("step8").disabled = false;
	// Specify the URL of your Excel file
	const excelUrl = './plotdata/ni-nta_peak.xlsx';
	fetch(excelUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.arrayBuffer();
  })
  .then(data => {
    const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
    
    // Assuming the data is in the first sheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Prepare data for plotting
    const dataPoints = jsonData.map(row => ({ x: parseFloat(row[0]), y: parseFloat(row[1]) }));

    // Plot the data using CanvasJS with spline
    plotData(dataPoints);
  })
  .catch(error => {
    console.error('Error fetching the file:', error.message);
  });

	/*const xhr = new XMLHttpRequest();
	xhr.open('GET', excelUrl, true);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function () {
		if (xhr.status === 200) {
			const data = new Uint8Array(xhr.response);
			const workbook = XLSX.read(data, { type: 'array' });

			// Assuming the data is in the first sheet
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];

			// Convert worksheet to JSON
			const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

			// Prepare data for plotting
			const dataPoints = jsonData.map(row => ({ x: parseFloat(row[0]), y: parseFloat(row[1]) }));

			// Plot the data using CanvasJS with spline
			plotData(dataPoints);
		} else {
			console.error('Error fetching the file:', xhr.statusText);
		}
	};

	xhr.onerror = function () {
		console.error('Network error while fetching the file.');
	};

	xhr.send();*/
});



// Function to plot data using CanvasJS with spline
function plotData(dataPoints) {
	

const chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title: {
			text: "Absorbance Vs Percentage of buffer B"
		},
		axisY: {
			title: "Absorbance",
			
			gridThickness: 0

		},
		axisX: {
			title: "Percentage of buffer B",
			

		},

		
		data: [{
			type: "spline",
			
			dataPoints: dataPoints
			
		}
	]
	});

	chart.render();




	/*var data = [{
		x: dataPoints.map(point => point.x),
		y: dataPoints.map(point => point.y),
		type: 'line',
		
	}];

	var layout = {
		title: 'Absorbance Vs Time',
		xaxis: { title: 'Time (min)' },
		yaxis: { title: 'Absorbance' }
	};

	Plotly.newPlot('chartContainer', data, layout);*/
}



