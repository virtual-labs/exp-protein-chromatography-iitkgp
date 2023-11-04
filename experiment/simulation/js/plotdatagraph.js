/* Lab name: Experimental Biochemistry
Exp name: Protein purification by affinity chromatography
File name: main.js
Developer: Prakriti Dhang */

/**  Step 7 Data Acquistion*/
document.getElementById('step7').addEventListener('click', function () {
	document.getElementById("actionid").innerHTML="";
	document.getElementById("step8").disabled = false;
	// Specify the URL of your Excel file
	const excelUrl = './plotdata/ni-nta_peak.xlsx';

	const xhr = new XMLHttpRequest();
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

	xhr.send();
});

// Function to plot data using CanvasJS with spline
function plotData(dataPoints) {
	const chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title: {
			text: "Absorbance Vs Time"
		},
		axisY: {
			title: "Absorbance",
			
			gridThickness: 0

		},
		axisX: {
			title: "Time (min)",
			

		},

		/*data: [{
            type: "spline",
            dataPoints: dataPoints // <-- Correct placement

            // Individual data points with correct syntax
        }, {
            type: "spline",
			lineColor:"white",
            dataPoints: [
                { x: 62.277, y: 11.246, indexLabel: "A", indexLabelFontColor: "orangered", indexLabelPlacement:"outside" },
                { x: 73.879, y: 11.525, indexLabel: "B", indexLabelFontColor: "orangered" },
                { x: 87.214, y: 13.799, indexLabel: "C", indexLabelFontColor: "orangered" },
                { x: 96.015, y: 14.134, indexLabel: "D", indexLabelFontColor: "orangered" }
            ]
        }]
    });*/
		data: [{
			type: "spline",
			
			dataPoints: dataPoints
			
		}
	]
	});

	chart.render();
}



