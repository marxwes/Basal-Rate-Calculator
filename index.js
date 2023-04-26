const fs = require("fs");
const csv = require("csv-parser");

const hourlyData = {};

const filePath = "./assets/date10.csv"; // Change the filepath to your data set

fs.createReadStream(filePath)
	.pipe(
		csv({
			skipLines: 6, // skip the first 6 lines
		})
	)
	.on("data", (data) => {
		// Check if Bolus Volume Delivered (U) is not empty and Bolus Source is CLOSED_LOOP_AUTO_BASAL or CLOSED_LOOP_AUTO_BOLUS
		if (
			(data["Bolus Volume Delivered (U)"] &&
				Number(data["Bolus Volume Delivered (U)"]) > 0 &&
				data["Bolus Source"] === "CLOSED_LOOP_AUTO_BASAL") ||
			data["Bolus Source"] === "CLOSED_LOOP_AUTO_BOLUS"
		) {
			// Get the hour time and date
			const time = data["Time"].split(":")[0];

			// Get the bolus volume for this entry
			const bolusVolume = Number(data["Bolus Volume Delivered (U)"]);

			// Create a key for the current hour of the day
			const key = time;

			// If the key doesn't exist in the hourlyData object, set it to zero
			if (!hourlyData[key]) {
				hourlyData[key] = {
					total: 0,
					count: 0,
					days: new Set(),
				};
			}

			// Add the current bolus volume to the total for the current hour of the day
			hourlyData[key].total += bolusVolume;
			hourlyData[key].count++;
			hourlyData[key].days.add(data.Date);
		}
	})
	.on("end", () => {
		let totalBolusVolume = 0;

		// Print the hourly averages for each hour of the day
		for (let i = 0; i < 24; i++) {
			const hour = i.toString().padStart(2, "0");
			const key = hour;
			const total = hourlyData[key] ? hourlyData[key].total : 0;
			const count = hourlyData[key] ? hourlyData[key].count : 0;
			const days = hourlyData[key] ? Array.from(hourlyData[key].days) : [];
			const average = days.length > 0 ? total / days.length : 0;
			const averageFixed = average.toFixed(2);
			totalBolusVolume += parseFloat(averageFixed);

			console.log(
				`Average bolus volume for ${hour}:00-${hour}:59 is ${averageFixed} U. (recorded on ${days.length} days)`
			);
		}

		// Print the total bolus volume delivered during the selected period
		console.log(`Total average bolus volume delivered during selected period: ${totalBolusVolume.toFixed(2)} U`);
	});
