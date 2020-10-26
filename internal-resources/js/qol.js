var fValues = [];

createChart2();







function getData2() {

    fetch('https://api.teleport.org/api/urban_areas/slug:glasgow/details/')
        .then(response => response.json())
        .then(data => {

                const gymValue = data['categories'][3]['data'][5]['currency_dollar_value'];
                const cinemaValue = data['categories'][3]['data'][4]['currency_dollar_value'];
                const taxiValue = data['categories'][3]['data'][9]['currency_dollar_value'];
                const restaurantValue = data['categories'][3]['data'][8]['currency_dollar_value'];
                const publicTransportValue = data['categories'][3]['data'][7]['currency_dollar_value'];
                const breadValue = data['categories'][3]['data'][2]['currency_dollar_value'];
                fValues.push(gymValue, cinemaValue, taxiValue, restaurantValue, publicTransportValue, breadValue);


                console.log(data);
                console.log(gymValue);

            }




        )



};




async function createChart2() {
    await getData2();
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['GYM', 'CINEMA', 'TAXI', 'RESTAURANT MEAL', 'PUBLIC TRANSPORT', 'BREAD'],
            datasets: [{
                label: 'Dollar Price',
                data: fValues,
                backgroundColor: [
                    'rgba(102, 51, 153)',
                    'rgba(102, 51, 153)',
                    'rgba(102, 51, 153)',
                    'rgba(102, 51, 153)',
                    'rgba(102, 51, 153)',
                    'rgba(102, 51, 153)'
                ],
                borderColor: [

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },

                    gridLines: {

                        display: false
                    }
                }],

                xAxes: [{
                    ticks: {
                        beginAtZero: true,

                    },

                    gridLines: {

                        display: false
                    }
                }]
            }
        }
    })
};