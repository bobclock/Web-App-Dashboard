// JQUERY VARIABLES

$hourly = $("#hourly");
$daily = $("#daily");
$weekly = $("#weekly");
$monthly = $("#monthly");
$traffic_chart_hourly = $("#traffic_chart_hourly");
$traffic_chart_daily = $("#traffic_chart_daily");
$traffic_chart_daily2 = $("#traffic_chart_daily2");
$traffic_chart_weekly = $("#traffic_chart_weekly");
$traffic_chart_monthly = $("#traffic_chart_monthly");
$mobile_users_chart = $("mobile_users_chart");

// TRAFFIC CHARTS

$traffic_chart_hourly.hide();
$traffic_chart_daily.hide();
$traffic_chart_weekly.show();
$traffic_chart_monthly.hide();

// Add event handlers on click

$hourly.on("click", function() {
  $hourly.addClass("selected");
  $daily.removeClass("selected");
  $weekly.removeClass("selected");
  $monthly.removeClass("selected");
  $traffic_chart_hourly.show();
  $traffic_chart_daily.hide();
  $traffic_chart_weekly.hide();
  $traffic_chart_monthly.hide();
});

$daily.on("click", function() {
  $hourly.removeClass("selected");
  $daily.addClass("selected");
  $weekly.removeClass("selected");
  $monthly.removeClass("selected");
  $traffic_chart_hourly.hide();
  $traffic_chart_daily.show();
  $traffic_chart_weekly.hide();
  $traffic_chart_monthly.hide();
});

$weekly.on("click", function() {
  $hourly.removeClass("selected");
  $daily.removeClass("selected");
  $weekly.addClass("selected");
  $monthly.removeClass("selected");
  $traffic_chart_hourly.hide();
  $traffic_chart_daily.hide();
  $traffic_chart_weekly.show();
  $traffic_chart_monthly.hide();
});

$monthly.on("click", function() {
  $hourly.removeClass("selected");
  $daily.removeClass("selected");
  $weekly.removeClass("selected");
  $monthly.addClass("selected");
  $traffic_chart_hourly.hide();
  $traffic_chart_daily.hide();
  $traffic_chart_weekly.hide();
  $traffic_chart_monthly.show();
});


// HOURLY CHART

var hourly_data = {
    labels: ["0:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(96, 96, 177,0.4)",
            borderColor: "#6060b1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: "#6060b1",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#6060b1",
            pointHoverBorderColor: "#6060b1",
            pointHoverBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            data: [40, 70, 80, 20, 40, 10, 30, 50, 90, 100, 110, 80, 55]
        }
    ]
};

var myLineChart = Chart.Line($traffic_chart_hourly, {
  data: hourly_data});

// DAILY CHART

var daily_data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(96, 96, 177,0.4)",
            borderColor: "#6060b1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: "#6060b1",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#6060b1",
            pointHoverBorderColor: "#6060b1",
            pointHoverBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            data: [80, 100, 140, 100, 130, 140, 120]
        }
    ]
};

var myLineChart = Chart.Line($traffic_chart_daily, {
  data: daily_data});

var myLineChart = Chart.Line($traffic_chart_daily2, {
  data: daily_data});

// WEEKLY CHART

var weekly_data = {
    labels: ["0", "4", "8", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52"],
    datasets: [
        {
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(96, 96, 177,0.4)",
            borderColor: "#6060b1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: "#6060b1",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#6060b1",
            pointHoverBorderColor: "#6060b1",
            pointHoverBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            data: [0, 200, 400, 300, 275, 425, 450, 500, 525, 375, 300, 350, 400, 225]
        }
    ]
};

var myLineChart = Chart.Line($traffic_chart_weekly, {
  data: weekly_data});

// MONTHLY CHART

var monthly_data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(96, 96, 177,0.4)",
            borderColor: "#6060b1",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: "#6060b1",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#6060b1",
            pointHoverBorderColor: "#6060b1",
            pointHoverBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            data: [500, 600, 350, 550, 600, 800, 400, 500, 400, 300, 500, 750]
        }
    ]
};

var myLineChart = Chart.Line($traffic_chart_monthly, {
  data: monthly_data});

// PIE CHART

var pie_data = {
    labels: [
        "Phones",
        "Tablets",
        "Consoles",
        "Smart TV's",
        "Desktops"
    ],
    datasets: [
        {
            data: [400, 150, 50, 25, 600],
            backgroundColor: [
                "#62a2b1",
                "#70c17c",
                "#6060b1",
                "#834646",
                "#9aac3e"
            ],
            hoverBackgroundColor: [
              "#406a74",
              "#497e51",
              "#3f3f77",
              "#4f2a2a",
              "#69752a"
            ]
        }]
};

var pie_chart = document.getElementById("mobile_users_chart");

   new Chart(pie_chart,{
    type: 'doughnut',
    data: pie_data,
    animation:{
      animationScale:true
    }
});
