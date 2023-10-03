let url='https://restcountries.com/v3.1/all'
let weather1=document.getElementById('weather1')
let weather2=document.getElementById('weather2')
let weather3=document.getElementById('weather3')

let i=0
async function getcountries(){
    if(i<3){
    let data=await fetch(url)
    let res=await data.json()
    let one=res[i]
    console.log(one)
    let name=one.name.common
    let capital=one.capital[0]
    let region=one.region
    let latlng=one.latlng
    let countrycode=one.cca3
    let flag=one.flags.png

    let url1=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d8efe0b02beac47559bdcdbbfa3e57c5`
    
    let data1=await fetch(url1)
    let res1=await data1.json()
    console.log(res1)
    let temp=res1.main.temp
    let weather=res1.weather[0].description

    if(i==0){
        weather1.innerHTML=`
        <img src="${flag}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">Capital:${capital}</p>
                    <p class="card-text">Region:${region}</p>
                    <p class="card-text">latlng:${latlng}</p>
                    <p class="card-text">CountryCode:${countrycode}</p>
                    <p class="card-text">The Temperature of this area is ${temp}(deg F) and is ${weather}</p>
                  </div>`

    }
    if(i==1){
        weather2.innerHTML=`
        <img src="${flag}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">Capital:${capital}</p>
                    <p class="card-text">Region:${region}</p>
                    <p class="card-text">latlng:${latlng}</p>
                    <p class="card-text">CountryCode:${countrycode}</p>
                    <p class="card-text">The Temperature here is ${temp}(deg F) and is ${weather}</p>
                  </div>`
    }
    if(i==2){
        weather3.innerHTML=`
        <img src="${flag}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">Capital:${capital}</p>
                    <p class="card-text">Region:${region}</p>
                    <p class="card-text">latlng:${latlng}</p>
                    <p class="card-text">CountryCode:${countrycode}</p>
                    <p class="card-text">The Temperature here is ${temp}(deg F) and is ${weather}</p>
                  </div>`
    }
}
i++
}
