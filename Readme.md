# Daily Bolus Volume Averages

This Node.js script reads in a CSV file containing insulin pump data and calculates the average bolus volume for each hour of the day. It also calculates the total bolus volume delivered during the selected period.

I've created this script because I was struggling to set up my basal rate when punp was not on the Smart Guard mode, hovever the script hasn't been tested yet nor tried on different datasets than my own.

## Please note that this script is provided for educational purposes only and should not be used to make any medical decisions without consulting a healthcare professional.

### Prerequisites

- Only for Medtronic 780G pump
- Data from carelink website downloaded as .csv format (at the bottom of the page on the right)

#### Installation

1. Clone the repository: `git clone git@github.com:paltoalko/Basal-Rate-Calculator.git`
2. Navigate to the project directory: `cd Basal-Rate-Calculator`
3. Install the required dependencies: `npm install`

#### Usage

1. Place the CSV file containing the insulin pump data in the src directory.
2. Update the `filePath` constant in the script to match the name of your CSV file.
3. Run the script: `node index.js`

#### Sample Output

| Time Range  | Average Bolus Volume (U) | Number of Days Recorded |
| ----------- | ------------------------ | ----------------------- |
| 00:00-00:59 | 0.99                     | 52                      |
| 01:00-01:59 | 0.90                     | 57                      |
| 02:00-02:59 | 0.93                     | 56                      |
| 03:00-03:59 | 0.89                     | 57                      |
| 04:00-04:59 | 0.91                     | 57                      |
| 05:00-05:59 | 0.92                     | 58                      |
| 06:00-06:59 | 0.88                     | 58                      |
| 07:00-07:59 | 0.90                     | 58                      |
| 08:00-08:59 | 0.87                     | 57                      |
| 09:00-09:59 | 0.91                     | 59                      |
| 10:00-10:59 | 0.96                     | 58                      |
| 11:00-11:59 | 0.97                     | 59                      |
| 12:00-12:59 | 0.90                     | 60                      |
| 13:00-13:59 | 1.00                     | 61                      |
| 14:00-14:59 | 0.91                     | 58                      |
| 15:00-15:59 | 0.93                     | 62                      |
| 16:00-16:59 | 0.80                     | 60                      |
| 17:00-17:59 | 0.83                     | 55                      |
| 18:00-18:59 | 1.02                     | 61                      |
| 19:00-19:59 | 1.09                     | 60                      |
| 20:00-20:59 | 0.98                     | 58                      |
| 21:00-21:59 | 0.93                     | 60                      |
| 22:00-22:59 | 0.91                     | 59                      |
| 23:00-23:59 | 0.74                     | 57                      |
| Total       | 22.07                    |                         |
