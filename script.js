const data = fetch(
  "https://weather-proxy.freecodecamp.rocks/api/current?lat=35&lon=139"
)
  .then((response) => response.json())
  .then((obj) => {
    return obj;
  })
  .catch((err) => console.log(err));

let datas;

getDatas = async () => {
  datas = await data;
  console.log(datas);
  document.querySelector("#header").innerHTML =
    datas.weather[0].main +
    " / " +
    datas.weather[0].description +
    '<img src="https://cdn.freecodecamp.org/weather-icons/10n.png">';

  
  
    document.querySelector("#where").innerHTML =
    datas.name + " / " + datas.sys.country;

 
 
 
    document.querySelector(
    "#mainInfo"
  ).innerHTML = 
  
  
  `  
  <div id="temperature">
  <img src="./asset/temperature.png"><p>Température : ${Math.round(datas.main.temp)}</p>
 
    </div>
   
   
    <div id="wind">
    <img src="./asset/wind.png">
    <p>Vent : ${Math.round(datas.wind.speed * 1.852)} km/h</p>
    </div>

    <div id="humidity">
    <img src="./asset/humidity.png">
    <p>humidité : ${datas.main.humidity} %</p>
    </div>

    <div id="cloud">
    <img src="./asset/cloud.png">
    <p>humidité : ${datas.clouds.all} %</p>
    </div>

    `;
};
getDatas();
