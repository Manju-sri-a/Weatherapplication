const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const weatherday = document.querySelector('.daysdetails');
const error404 = document.querySelector('.not-found');
const dayydetails = document.querySelector('.daysdetails');
 let slideIndex = 1;
 const prev= document.querySelector('.prev');
 const next= document.querySelector('.next');


search.addEventListener('click', () =>{

    const APIKey = '9233e903b39a4a40b30120633231302';
    const city = document.querySelector('.search-box input').value;
    
    console.log(city)

   
        navigator.geolocation.getCurrentPosition((location =>{
            var lat = location.coords.latitude;
            var lon = location.coords.longitude;

            var url = '';
            if (city === '') {
                url = "http://api.weatherapi.com/v1/forecast.json?key="+APIKey+"&q="+city+"&aqi=no&days=7"
            } else {
                url = "http://api.weatherapi.com/v1/forecast.json?key="+APIKey+"&q="+lat+ "," + lon + "&aqi=no&days=7"
            }
            console.log('Latitude', lat)    

            fetch(url)
                .then(response => {
                
                return response.json();
            })
                .then(response => {
                        if (response.error) {
                            container.style.height = '400px';
                
                            weatherBox.style.display = 'none';
                            weatherDetails.style.display = 'none';
                
                            error404.style.display = 'block';
                            error404.classList.add('fadeIn');
                            dayydetails.style.display='none';
                            return;
                        }
                        else{

                            dayydetails.style.display='flex';
                    error404.style.display = 'none';
                    error404.classList.remove('fadeIn');
                        
                    const image = document.querySelector('.weather-box img');
                    const temperature = document.querySelector('.weather-box .temperature');
                    const description = document.querySelector('.weather-box .description');
                    const humidity = document.querySelector('.weather-details .humidity span');
                    const wind = document.querySelector('.weather-details .wind span');
                    const day1= document.querySelector('.daysdetails .day1 p');
                    const day1image=document.querySelector('.daysdetails .day1 img');
                    const day1tempc = document.querySelector('.daysdetails .day1  .avgtempc');
                    const day1tempf = document.querySelector('.daysdetails .day1 .avgtempf');
                    const day2= document.querySelector('.daysdetails .day2 p');
                    const day2image=document.querySelector('.daysdetails .day2 img');
                    const day2tempc = document.querySelector('.daysdetails .day2  .avgtempc');
                    const day2tempf = document.querySelector('.daysdetails .day2 .avgtempf');
                    const day3= document.querySelector('.daysdetails .day3 p');
                    const day3image=document.querySelector('.daysdetails .day3 img');
                    const day3tempc = document.querySelector('.daysdetails .day3  .avgtempc');
                    const day3tempf = document.querySelector('.daysdetails .day3 .avgtempf');
                    const day4= document.querySelector('.daysdetails .day4 p');
                    const day4image=document.querySelector('.daysdetails .day4 img');
                    const day4tempc = document.querySelector('.daysdetails .day4  .avgtempc');
                    const day4tempf = document.querySelector('.daysdetails .day4 .avgtempf');
                    const day5= document.querySelector('.daysdetails .day5 p');
                    const day5image=document.querySelector('.daysdetails .day5 img');
                    const day5tempc = document.querySelector('.daysdetails .day5 .avgtempc');
                    const day5tempf = document.querySelector('.daysdetails .day5 .avgtempf');
                    const day6= document.querySelector('.daysdetails .day6 p');
                    const day6image=document.querySelector('.daysdetails .day6 img');
                    const day6tempc = document.querySelector('.daysdetails .day6  .avgtempc');
                    const day6tempf = document.querySelector('.daysdetails .day6 .avgtempf');
                    const day7= document.querySelector('.daysdetails .day7 p');
                    const day7image=document.querySelector('.daysdetails .day7 img');
                    const day7tempc = document.querySelector('.daysdetails .day7  .avgtempc');
                    const day7tempf = document.querySelector('.daysdetails .day7 .avgtempf');
                









                    image.src="http:"+response.current.condition.icon;
                    temperature.innerHTML = `${parseInt(response.current.temp_c)}<span>°C</span>`;
                    description.innerHTML = `${response.current.condition.text}`;
                    humidity.innerHTML = `${response.current.humidity}%`;
                    wind.innerHTML = `${parseInt(response.current.wind_kph)}Km/h`;
                    day1.innerHTML=`${response.forecast.forecastday[0].date}`;
                    day1image.src='http:'+`${response.forecast.forecastday[0].day.condition.icon}`;
                    day1tempc.innerHTML=`${parseInt(response.forecast.forecastday[0].day.avgtemp_c)}`+" °C";
                    day1tempf.innerHTML=`${parseInt(response.forecast.forecastday[0].day.avgtemp_f)}`+" °F";
                    day2.innerHTML=`${response.forecast.forecastday[1].date}`;
                    day2image.src='http:'+`${response.forecast.forecastday[1].day.condition.icon}`;
                    day2tempc.innerHTML=`${parseInt(response.forecast.forecastday[1].day.avgtemp_c)}`+" °C";
                    day2tempf.innerHTML=`${parseInt(response.forecast.forecastday[1].day.avgtemp_f)}`+" °F";
                    
                    day3.innerHTML=`${response.forecast.forecastday[2].date}`;
                    day3image.src='http:'+`${response.forecast.forecastday[2].day.condition.icon}`;
                    day3tempc.innerHTML=`${parseInt(response.forecast.forecastday[2].day.avgtemp_c)}`+" °C";
                    day3tempf.innerHTML=`${parseInt(response.forecast.forecastday[2].day.avgtemp_f)}`+" °F";

                    day4.innerHTML=`${response.forecast.forecastday[3].date}`;
                    day4image.src='http:'+`${response.forecast.forecastday[3].day.condition.icon}`;
                    day4tempc.innerHTML=`${parseInt(response.forecast.forecastday[3].day.avgtemp_c)}`+" °C";
                    day4tempf.innerHTML=`${parseInt(response.forecast.forecastday[3].day.avgtemp_f)}`+" °F";

                    day5.innerHTML=`${response.forecast.forecastday[4].date}`;
                    day5image.src='http:'+`${response.forecast.forecastday[4].day.condition.icon}`;
                    day5tempc.innerHTML=`${parseInt(response.forecast.forecastday[4].day.avgtemp_c)}`+" °C";
                    day5tempf.innerHTML=`${parseInt(response.forecast.forecastday[4].day.avgtemp_f)}`+" °F";

                    day6.innerHTML=`${response.forecast.forecastday[5].date}`;
                    day6image.src='http:'+`${response.forecast.forecastday[5].day.condition.icon}`;
                    day6tempc.innerHTML=`${parseInt(response.forecast.forecastday[5].day.avgtemp_c)}`+" °C";
                    day6tempf.innerHTML=`${parseInt(response.forecast.forecastday[5].day.avgtemp_f)}`+" °F";

                    day7.innerHTML=`${response.forecast.forecastday[6].date}`;
                    day7image.src='http:'+`${response.forecast.forecastday[6].day.condition.icon}`;
                    day7tempc.innerHTML=`${parseInt(response.forecast.forecastday[6].day.avgtemp_c)}`+" °C";
                    day7tempf.innerHTML=`${parseInt(response.forecast.forecastday[6].day.avgtemp_f)}`+" °F";
                    showSlides(slideIndex);        
                }
                });

                    
                    weatherBox.style.display = '';
                    weatherDetails.style.display = '';
                    weatherBox.classList.add('fadeIn');
                    weatherDetails.classList.add('fadeIn');
                    dayydetails.classList.add('fadeIn');
                    container.style.height = '595px';
                
            }));
                    
        });
                    


