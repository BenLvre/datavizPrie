$(function () {
    
    var response = null;
    var age = null;
    
    
    $("select").change(function() {
        age = $( "select option:selected" ).index()-1;
        
        
        $.getJSON( "./json/dataviz2.json", function() {
            console.log( "success dataviz2" );
        })
        .done(function(data) {
            response = data;
            
            console.log(response[age]);
            
            Highcharts.chart('dataviz3_1', {
                chart: {
                    polar: true,
                    type: 'area'
                },
                title: {
                    text: 'Avant speed dating'
                },

                exporting :{ enabled:false},
                xAxis: {
                    categories: ['Attratif', 'Sincere', 'Intelligent', 'Fun', 'Ambitieux']
                },
                series: [{
                    showInLegend: false,   
                    data: [response[age].data[0], response[age].data[1], response[age].data[2], response[age].data[3], response[age].data[4]]
                }]
            });
            
            Highcharts.chart('dataviz3_2', {
                chart: {
                    polar: true,
                    type: 'area'
                },
                exporting :{ enabled:false},
                title: {
                    text: 'Milieu speed dating'
                },
                
                colors: ["#FF0000"],

                xAxis: {
                    categories: ['Attratif', 'Sincere', 'Intelligent', 'Fun', 'Ambitieux']
                },
                series: [{
                    showInLegend: false,   
                    data: [response[age].data[5], response[age].data[6], response[age].data[7], response[age].data[8], response[age].data[9]]
                }]
            });
            
            
            Highcharts.chart('dataviz3_3', {
                chart: {
                    polar: true,
                    type: 'area'
                },
                title: {
                    text: 'Après speed dating'
                },
                
                colors: ["#00FF00"],
                
                exporting :{ enabled:false},

                xAxis: {
                    categories: ['Attratif', 'Sincere', 'Intelligent', 'Fun', 'Ambitieux']
                },
                series: [{
                    showInLegend: false,   
                    data: [response[age].data[10], response[age].data[11], response[age].data[12], response[age].data[13], response[age].data[14]]
                }]
            });
            
           
        });
    
        
        
    });
    
    
    
    


});