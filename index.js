const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.options("*", cors());

app.all("*", function (req, res, next) {
  console.log(":: REQUEST BODY ::", req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/Get_TrafficDayLevel", (req, res) => {
  console.log(req.body);
  res.send({
    Days: "Wednesday",
    Difference: -13.11,
    Current: 15046,
    Date: "11/06",
    TrendIcon: "down",
    cardTitle: "Traffic",
    tooltip: "This card shows daily traffic",
  });
});

app.post("/Get_TrafficMonthToDate", (req, res) => {
  console.log(req.body);
  res.send({
    Days: "Week To Date",
    Difference: 11.1,
    Current: 58974,
    Date: "11/03 - 11/06",
    TrendIcon: "up",
    cardTitle: "Traffic",
    tooltip: "This card shows week to date traffic",
  });
});

app.post("/Get_TrafficLastMonth", (req, res) => {
  console.log(req.body);
  res.send({
    Days: "Month To Date",
    Difference: 4.02,
    Current: 97500,
    Date: "11/01 - 11/06",
    TrendIcon: "up",
    cardTitle: "Traffic",
    tooltip: "This card shows month to date traffic",
  });
});

app.post("/Get_TrafficLastYear", (req, res) => {
  console.log(req.body);
  res.send({
    Days: "Year To Date",
    Difference: -1.09,
    Current: 4540420,
    Date: "01/01 - 11/06",
    TrendIcon: "down",
    cardTitle: "Traffic",
    tooltip: "This card shows year to date traffic",
  });
});

app.post("/Get_TrafficHistoricalComparison", (req, res) => {
  console.log(req.body);
  res.send({
    series: [
      {
        name: "Last Year",
        data: [17447, 15073, 15503, 15512, 17774, 14734, 5106],
        color: "#D1D2D4",
      },
      {
        name: "Last Month",
        data: [19012, 17003, 17589, 16694, 18723, 17582, 8519],
        color: "#AFB1B4",
      },
      {
        name: "Last Week",
        data: [17688, 15417, 15604, 16227, 18315, 15461, 7115],
        color: "#8F9194",
      },
      {
        name: "This Week",
        data: [16810, 15203, 15554, 15236, 21670, 16856, 7175],
        color: "#1560BD",
      },
    ],
    categories: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    chartTitle: "Historical Comparison - Day of Week",
    tooltip:
      "Traffic values based on the day of week with data by each historical dimension and this week.",
    text: "Traffic",
  });
});

app.post("/Get_PredictedTraffic", (req, res) => {
  console.log(req.body);
  res.send({
    series: [
      {
        type: "spline",
        name: "Actual Predicted Traffic",
        dashStyle: "longdash",
        color: "#000",
        data: [5266.5, 16133, 13711, 13609.5, 13581, 15709.25, 12188.5],
      },
    ],
    categories: [
      "10/27/2024",
      "10/28/2024",
      "10/29/2024",
      "10/30/2024",
      "10/31/2024",
      "11/01/2024",
      "11/02/2024",
    ],
    chartTitle: "Predicted Traffic",
    tooltip:
      "This chart will be represent Predicted Traffic and Actual Traffic",
    text: "Traffic",
  });
});

app.post("/Get_TitleUndecided", (req, res) => {
  console.log(req.body);
  res.send({
    data: [
      ["us-ma", 1636],
      ["us-co", 3423],
      ["us-id", 187],
      ["us-la", 3409],
      ["us-az", 1900],
      ["us-tx", 16202],
      ["us-md", 829],
      ["us-ct", 995],
      ["us-vt", 43],
      ["us-pa", 1018],
      ["us-ky", 2805],
      ["us-ut", 1731],
      ["us-sd", 1886],
      ["us-wv", 342],
      ["us-al", 844],
      ["us-in", 1170],
      ["us-wy", 2140],
      ["us-fl", 5988],
      ["us-ne", 176],
      ["us-va", 6250],
      ["us-mn", 1510],
      ["us-oh", 1322],
      ["us-ga", 5889],
      ["us-ks", 1171],
      ["us-il", 4505],
      ["us-nv", 1491],
      ["us-wi", 51],
      ["us-ms", 2007],
      ["us-ca", 2550],
      ["us-nc", 2333],
      ["us-ok", 2688],
      ["us-mt", 682],
      ["us-ny", 3862],
      ["us-me", 475],
      ["us-mo", 3392],
      ["us-dc", 640],
      ["us-nh", 174],
      ["us-ar", 5470],
      ["us-mi", 3150],
      ["us-nj", 2210],
      ["us-sc", 451],
      ["us-tn", 4711],
      ["us-ia", 2290],
      ["us-nm", 2506],
    ],
    chartTitle: "Traffic by State",
    tooltip: "This chart shows traffic by state",
  });
});

app.post("/Get_ComparisonWeeklyTrend", (req, res) => {
  console.log(req.body);
  res.send({
    series: [
      {
        name: "Previous Year",
        color: "#DEDDDC",
        data: [
          110838, 107489, 104371, 99615, 102403, 96887, 99741, 111767, 127450,
          120529, 109992, 107328, 101149,
        ],
        pointPadding: 0,
      },
      {
        name: "Current Year",
        color: "#28a745",
        data: [
          103451, 101780, 97669, 96977, 95514, 96450, 108245, 115122, 147733,
          114036, 109768, 105827, 108504,
        ],
        pointPadding: 0.3,
      },
    ],
    categories: [
      "Week 31",
      "Week 32",
      "Week 33",
      "Week 34",
      "Week 35",
      "Week 36",
      "Week 37",
      "Week 38",
      "Week 39",
      "Week 40",
      "Week 41",
      "Week 42",
      "Week 43",
    ],
    chartTitle: "Comparison Trend Weekly",
    tooltip:
      "It will show this year and last year actual values except for traffic which will only show avg traffic.",
    text: "Traffic",
  });
});

app.post("/Get_ComparisonMonthlyTrend", (req, res) => {
  console.log(req.body);
  res.send({
    series: [
      {
        name: "Previous Year",
        color: "#DEDDDC",
        data: [
          525466, 502205, 567394, 472001, 400085, 459230, 392414, 437210,
          465173, 458502, 464550, 472951, 474766,
        ],
        pointPadding: 0,
      },
      {
        name: "Current Year",
        color: "#4D79F6",
        data: [
          474766, 454273, 510074, 414989, 415594, 436023, 412135, 444599,
          440360, 463935, 452612, 464088, 498585,
        ],
        pointPadding: 0.3,
      },
    ],
    categories: [
      "Oct-2023",
      "Nov-2023",
      "Dec-2023",
      "Jan-2024",
      "Feb-2024",
      "Mar-2024",
      "Apr-2024",
      "May-2024",
      "Jun-2024",
      "Jul-2024",
      "Aug-2024",
      "Sep-2024",
      "Oct-2024",
    ],
    chartTitle: "Comparison Trend Monthly",
    tooltip:
      "It will show this year and last year actual values except for traffic which will only show avg traffic.",
    text: "Traffic",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
