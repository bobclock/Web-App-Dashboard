$(document).ready(function() {



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
    $mobile_users_chart = $("#mobile_users_chart");
    $notifications_txt = $("#notifications_txt");
    $notifications_bell = $("#bell_img");
    $alert_div = $(".alert");
    $close_alert = $(".close");
    $save = $("#save_settings");
    $cancel = $("#cancel_settings");

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
        datasets: [{
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
            pointRadius: 4,
            pointHitRadius: 10,
            data: [40, 70, 80, 20, 40, 10, 30, 50, 90, 100, 110, 80, 55]
        }]
    };

    var myLineChart = Chart.Line($traffic_chart_hourly, {
        data: hourly_data,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 140,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // DAILY CHART

    var daily_data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
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
            pointRadius: 4,
            pointHitRadius: 10,
            data: [80, 100, 140, 100, 130, 140, 120]
        }]
    };

    var daily_data2 = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            label: "Mobile",
            backgroundColor: "#62a2b1",
            borderColor: "transparent",
            data: [30, 70, 40, 50, 65, 75, 80]
        }, {
            label: "Desktop",
            backgroundColor: "#6060b1",
            borderColor: "transparent",
            data: [40, 30, 50, 70, 40, 70, 50]
        }]
    };


    var myLineChart = Chart.Line($traffic_chart_daily, {
        data: daily_data,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 200,
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    new Chart($traffic_chart_daily2, {
        type: "bar",
        data: daily_data2,
        options: {
            responsive: true,
            legend: {
                display: true
            },
            barValueSpacing: 20,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // WEEKLY CHART

    var weekly_data = {
        labels: ["0", "4", "8", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52"],
        datasets: [{
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
            pointRadius: 4,
            pointHitRadius: 10,
            data: [0, 200, 400, 300, 275, 425, 450, 500, 525, 375, 300, 350, 400, 225]
        }]
    };

    var myLineChart = Chart.Line($traffic_chart_weekly, {
        data: weekly_data,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 600,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // MONTHLY CHART

    var monthly_data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
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
            pointRadius: 4,
            pointHitRadius: 10,
            data: [500, 600, 350, 550, 600, 800, 400, 500, 400, 300, 500, 750]
        }]
    };

    var myLineChart = Chart.Line($traffic_chart_monthly, {
        data: monthly_data,
        options: {
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 1000,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // PIE CHART

    var pie_data = {
        labels: [
            "Phones",
            "Tablets",
            "Consoles",
            "Smart TV's",
            "Desktops"
        ],
        datasets: [{
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
                "#3c395e",
                "#4f2a2a",
                "#69752a"
            ]
        }]
    };

    var pie_chart = document.getElementById("mobile_users_chart");

    new Chart(pie_chart, {
        type: 'doughnut',
        data: pie_data,
        animation: {
            animationScale: true
        }
    });


    // NOTIFCATIONS BAR

    $notifications_txt.hide();

    $notifications_bell.on('click', function(e) {
        e.preventDefault();
        $notifications_bell.attr('src', 'icons/icon-bell.svg');
        $notifications_txt.show();
    });

    $notifications_txt.on('click', function() {
        $notifications_txt.hide();
    });

    // ALERTS BAR
    $close_alert.on('click', function() {
        $alert_div.hide();
    });

    // SEARCH FX

    // $(".user-list-item").hide();
    //
    // $("#search_user").on("keyup", function() {
    //     var g = $(this).val().toLowerCase();
    //     $(".user-list-item").each(function() {
    //         var s = $(this).text().toLowerCase();
    //         $(this).closest('.user-list-item')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    //     });
    // });

    $(function() {
        var availableTags = [
            "James Campbell",
            "John Jones",
            "Lucian Fox",
            "Megan Green"
        ];
        $("#search_user").autocomplete({
            source: availableTags,
            appendTo: '#autocomplete'
        });
    });

    var cw = $('#search_user').width();
    $('.ui-menu-item').css({
        'height': cw
    });

    // SETTINGS SAVE



    $(function() {
        $('#timezone').on('change', function() {
            localStorage.setItem('todoData', this.value);
        });
        if (localStorage.getItem('todoData')) {
            $('#timezone').val(localStorage.getItem('todoData'));
        }
    });

    var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
    var $checkboxes = $("#switch_email :checkbox");

    $save.on('click', function(e) {
        e.preventDefault();
        $checkboxes.each(function() {
            checkboxValues[this.id] = this.checked;
        });
        localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });

    var checkboxValues2 = JSON.parse(localStorage.getItem('checkboxValues2')) || {};
    var $checkboxes2 = $("#switch_profile :checkbox");

    $save.on('click', function(e) {
        e.preventDefault();
        $checkboxes2.each(function() {
            checkboxValues2[this.id] = this.checked;
        });
        localStorage.setItem("checkboxValues2", JSON.stringify(checkboxValues2));
    });


    $.each(checkboxValues, function(key, value) {
        $("#" + key).prop('checked', value);
    });

    $.each(checkboxValues2, function(key, value) {
        $("#" + key).prop('checked', value);
    });


    $cancel.on('click', function() {
        localStorage.clear();
    });

    // JAVASCRIPT ALERTS FOR SENT MSG

    $('#msging_users').submit(function(e) {
        if ($('#search_user').val() === '' || $('#user_msg').val() === '') {
            alert('Please enter the name of a user and provide them a message');
            return false;
        } else {
            e.preventDefault();
            alert('Message sent!');
            document.getElementById("msging_users").reset();
        }
    });

});
