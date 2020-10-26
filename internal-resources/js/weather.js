var loadNewWeather = new function () {

    var desc = document.querySelector('.desc');
    var temp = document.querySelector('.temp');
    var desc1 = document.querySelector('.desc1');
    var temp1 = document.querySelector('.temp1');
    var desc2 = document.querySelector('.desc2');
    var temp2 = document.querySelector('.temp2');
    var desc3 = document.querySelector('.desc3');
    var temp3 = document.querySelector('.temp3');


    var day = document.querySelector('.day');
    var day2 = document.querySelector('.day2');
    var day3 = document.querySelector('.day3');
    var day4 = document.querySelector('.day4');

    fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/328226?apikey=zVPYSg54sk5yXACOSMcQtQlqk8Oir6d8&language=en-us&details=false&metric=true')
        .then(response => response.json())
        .then(data => {

            var tempValue = data['DailyForecasts'][0]['Temperature']['Maximum']['Value'];
            var descValue = data['DailyForecasts'][0]['Day']['IconPhrase'];

            var tempValue2 = data['DailyForecasts'][1]['Temperature']['Maximum']['Value'];
            var descValue2 = data['DailyForecasts'][1]['Day']['IconPhrase'];

            var tempValue3 = data['DailyForecasts'][2]['Temperature']['Maximum']['Value'];
            var descValue3 = data['DailyForecasts'][2]['Day']['IconPhrase'];

            var tempValue4 = data['DailyForecasts'][3]['Temperature']['Maximum']['Value'];
            var descValue4 = data['DailyForecasts'][3]['Day']['IconPhrase'];


            const dayValue1 = data['DailyForecasts'][0]['Date'];
            var date = new Date(dayValue1);

            const dayValue2 = data['DailyForecasts'][1]['Date'];
            var date2 = new Date(dayValue2);

            const dayValue3 = data['DailyForecasts'][2]['Date'];
            var date3 = new Date(dayValue3);

            const dayValue4 = data['DailyForecasts'][3]['Date'];
            var date4 = new Date(dayValue4);

            var dayOfWeek;
            var dayOfWeek2;
            var dayOfWeek3;
            var dayOfWeek4;

            switch (date.getDay(), date2.getDay()) {
                case 0:
                    dayOfWeek = "Sunday";
                    break;
                case 1:
                    dayOfWeek = "Monday";
                    break;
                case 2:
                    dayOfWeek = "Tuesday";
                    break;
                case 3:
                    dayOfWeek = "Wednesday";
                    break;
                case 4:
                    dayOfWeek = "Thursday";
                    break;
                case 5:
                    dayOfWeek = "Friday";
                    break;
                case 6:
                    dayOfWeek = "Saturday";
            }


            switch (date2.getDay()) {
                case 0:
                    dayOfWeek2 = "Sunday";
                    break;
                case 1:
                    dayOfWeek2 = "Monday";
                    break;
                case 2:
                    dayOfWeek2 = "Tuesday";
                    break;
                case 3:
                    dayOfWeek2 = "Wednesday";
                    break;
                case 4:
                    dayOfWeek2 = "Thursday";
                    break;
                case 5:
                    dayOfWeek2 = "Friday";
                    break;
                case 6:
                    dayOfWeek2 = "Saturday";
            }


            switch (date3.getDay()) {
                case 0:
                    dayOfWeek3 = "Sunday";
                    break;
                case 1:
                    dayOfWeek3 = "Monday";
                    break;
                case 2:
                    dayOfWeek3 = "Tuesday";
                    break;
                case 3:
                    dayOfWeek3 = "Wednesday";
                    break;
                case 4:
                    dayOfWeek3 = "Thursday";
                    break;
                case 5:
                    dayOfWeek3 = "Friday";
                    break;
                case 6:
                    dayOfWeek3 = "Saturday";
            }


            switch (date4.getDay()) {
                case 0:
                    dayOfWeek4 = "Sunday";
                    break;
                case 1:
                    dayOfWeek4 = "Monday";
                    break;
                case 2:
                    dayOfWeek4 = "Tuesday";
                    break;
                case 3:
                    dayOfWeek4 = "Wednesday";
                    break;
                case 4:
                    dayOfWeek4 = "Thursday";
                    break;
                case 5:
                    dayOfWeek4 = "Friday";
                    break;
                case 6:
                    dayOfWeek4 = "Saturday";
            }
            day.innerHTML = dayOfWeek;
            day2.innerHTML = dayOfWeek2;
            day3.innerHTML = dayOfWeek3;
            day4.innerHTML = dayOfWeek4;


            desc.innerHTML = descValue;
            temp.innerHTML = tempValue + " Degrees Celsius";

            desc1.innerHTML = descValue2;
            temp1.innerHTML = tempValue2 + " Degrees Celsius";

            desc2.innerHTML = descValue3;
            temp2.innerHTML = tempValue3 + " Degrees Celsius";

            desc3.innerHTML = descValue4;
            temp3.innerHTML = tempValue4 + " Degrees Celsius";





            console.log(date.getDay());
            console.log(data);





        })



}