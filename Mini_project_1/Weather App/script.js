const userTab=document.querySelector("[data-userWeather]")
const searchTab=document.querySelector("[data-searchWeather]")
const userContainer=document.querySelector("[data-weatherContainer]")

const grantLocationAccess=document.querySelector("[data-grantLocationContainer]")
const searchForm=document.querySelector("[data-searchForm]")
const loadingScreen=document.querySelector("[data-loadingContainer]")
const userInfoContainer=document.querySelector("[data-userInfoContainer]")

const imgError=document.querySelector("[data-errorImg]")


let oldTab=userTab
const API_key="d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-Tab");
getfromSessionStorage();

function switchTab(newTab){
    imgError.classList.remove("active")
    if(newTab != oldTab){
        oldTab.classList.remove("current-Tab");
        oldTab=newTab;
        oldTab.classList.add("current-Tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active")
            grantLocationAccess.classList.remove("active")
            searchForm.classList.add("active")
        }
        else{
            searchForm.classList.remove("active")
            userInfoContainer.classList.remove("active")

            getfromSessionStorage()
        }
    }
}

userTab.addEventListener('click',()=>{
    switchTab(userTab)
});

searchTab.addEventListener('click',()=>{
    switchTab(searchTab)
});

function getfromSessionStorage(){
    const localCoordinates=sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantLocationAccess.classList.add("active")
    }
    else{
        const coordinates=JSON.parse(localCoordinates)
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat, lon}=coordinates;

    grantLocationAccess.classList.remove("active")

    loadingScreen.classList.add("active")

    // api Call 
    try {
        const response=await fetch 
        (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);

        const data=await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } catch (err) {
        loadingScreen.classList.remove("active")
        imgError.classList.add('active')

    }
}

function renderWeatherInfo(weatherInfo){
    const cityName=document.querySelector("[data-cityName]")
    const countryIcon=document.querySelector("[data-CountryIcon]")
    const desc=document.querySelector("[data-weatherDesc]")
    const weatherIcon=document.querySelector("[data-weatherIcon]")
    const temp=document.querySelector("[data-temp]")
    const winidSpeed=document.querySelector("[data-windSpeed]")
    const humidity=document.querySelector("[data-humidity]")
    const cloudyNess =document.querySelector("[data-cloud]")

    cityName.innerText=weatherInfo?.name;
    countryIcon.src=`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText=weatherInfo?.weather?.[0]?.description;
    weatherIcon.src=`http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText= `${weatherInfo?.main?.temp} °C`;
    winidSpeed.innerText=`${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText=`${weatherInfo?.main?.humidity}%`;
    cloudyNess.innerText=`${weatherInfo?.clouds?.all}%`;
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else{
        document.write("No geo Location support is available")
    }
}

function showPosition(position){
    const userCoordinates={
        lat:position.coords.latitude,
        lon:position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessBtn=document.querySelector("[data-grantAccess]")
grantAccessBtn.addEventListener("click",getLocation);

// iss line ko firse dekhna hai 


let searchInput=document.querySelector("[data-searchInput]") 
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName=searchInput.value
    if(searchInput.value==="")return;

    fetchsearchWeatherInfo(searchInput.value);
})

async function fetchsearchWeatherInfo(city){
    loadingScreen.classList.add("active")
    userInfoContainer.classList.remove("active")
    grantLocationAccess.classList.remove("active")
    imgError.classList.remove('active')
    try {
        const response=await fetch
                 (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        const data =await response.json();
        if (!data.sys) {
            throw data;
        }
        loadingScreen.classList.remove("active")
        userInfoContainer.classList.add("active")
        renderWeatherInfo(data);
        imgError.classList.remove('active')

    } catch (err) {
        loadingScreen.classList.remove("active")
        userInfoContainer.classList.remove("active")
        imgError.classList.add('active')
    }
}