

let crd = ""


  
  function success(pos) {
     crd = pos.coords;
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }
  
  
  
  const data = () => fetch(
    "https://weather-proxy.freecodecamp.rocks/api/current?lat="+ crd.latitude+"&lon="+crd.longitude+""
  )
  .then((response) => response.json())
  .then((obj) => {
    return obj;
  })
  .catch((err) => console.log(err));
  
  let datas;
  
  navigator.geolocation.getCurrentPosition(success);


printWhere = () => {
    
   return document.querySelector("#where").innerHTML =
  datas.name + " / " + datas.sys.country;

}

printMaininfo = () => {


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
  <p>Nuages : ${datas.clouds.all} %</p>
  </div>

  `;
}

printheader = () => {

  let icon = "";
  const icons =    datas.weather[0].description;
  switch (icons) {
    case  'clear sky' :
      console.log('ok')
      icon = '<img src="./asset/sun.png">'
      break;
  
    default: console.log('no')
      break;
  }


  document.querySelector("#header").innerHTML =
    datas.weather[0].main +
    " / " +
    datas.weather[0].description + icon

}

printTime = () => {
  return document.querySelector("#time").innerHTML = "Levé de soleil : " +
  new Date(datas.sys.sunrise *1000).toLocaleString() + " / Couché de soleil " +   new Date(datas.sys.sunset *1000).toLocaleString() 
}


getDatas = async () => {
  datas = await data()
  printheader()
  printWhere()
  printMaininfo()
  printTime()
};

setTimeout( () => getDatas(),200)


const dateObject = new Date(1639687087 * 1000)
console.log(dateObject)
const time  = dateObject.toLocaleString()
console.log(time)