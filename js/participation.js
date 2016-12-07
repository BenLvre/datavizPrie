$(function () {

    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('dataviz1', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            
            exporting :{ enabled:false},
            
            title: {
                text: 'Taux de participation selon la tranche d\'âge sur 8000 participants'
            },
            
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                series: {
                    dataLabels: {
                       enabled: true,
                        format: '{point.name}: {point.y:.1f}%'
                    }
                }
            },
        
            series: [{
                name: 'Tranche d\'âge',
                colorByPoint: true,
                data: [{
                    name: '18-20',
                    y: 0.35
                }, {
                    name: '20-30',
                    y: 82.80,
                    sliced: true,
                    selected: true
                }, {
                    name: '20-40',
                    y: 16.53
                }, {
                    name: '40-55',
                    y: 0.31
                }]
            }]
        });
    });
});