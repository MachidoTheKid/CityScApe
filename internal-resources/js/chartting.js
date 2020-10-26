var eValues = [];
var currentNum = document.getElementById("numbers");

createChart();







function getData() {

    fetch('https://api.teleport.org/api/urban_areas/slug:glasgow/scores/')
        .then(response => response.json())
        .then(data => {

                const econValue = data['categories'][11]['score_out_of_10'];
                const safetyValue = data['categories'][7]['score_out_of_10'];
                const eduValue = data['categories'][9]['score_out_of_10'];
                const intAccessValue = data['categories'][13]['score_out_of_10'];
                const healthValue = data['categories'][8]['score_out_of_10'];
                const livingValue = data['categories'][1]['score_out_of_10'];
                const rankingValue = data['teleport_city_score'];
                console.log("The Scores out of 10 for Glasgow are as follows: ");
                console.log("The Economic score is: " + econValue);
                console.log("The Safety score is: " + safetyValue);
                console.log("The Safety score is: " + safetyValue);
                console.log("The Education score is: " + eduValue);
                console.log("The Internet Access score is: " + intAccessValue);
                console.log("The Healthcare score is: " + healthValue);
                console.log("The Cost Of Living score is: " + livingValue);
                console.log(data);

                var ranking = document.getElementById("ranking");

                ranking.innerHTML = "Glasgow currently has an overall score of " + "<b>" + Math.floor(rankingValue) + "</b>";


                eValues.push(econValue, safetyValue, eduValue, intAccessValue, healthValue, livingValue);


                console.log(eValues);


            }




        )



};



async function createChart() {
    await getData();
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Economy', 'Safety', 'Education', 'Internet Access', 'Healthcare', 'Cost of Living'],
            datasets: [{
                label: 'GLASGOW SCORES OUT OF 10',
                data: eValues,
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
                        beginAtZero: true
                    },

                    gridLines: {

                        display: false
                    }
                }],

            }
        }
    });

}