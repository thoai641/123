const URL = "https://671331cf6c5f5ced6625a04f.mockapi.io/current/citys"
const list = document.getElementById("list");

const getImageFromStatus = (status) => {
    switch (status) {
        case "wind":
            return "./assets/images/wind.png";
        case "rain":
            return "./assets/images/rain.png";
        default:
            return "./assets/images/sun.png";
    }
};


const fetchWeatherAPI = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        li.classList.add("p-4", "border", "flex", 'flex-col', "items-center", "shadow", "rounded");
        li.innerHTML += `
        <p class="text-xl">${data[i].city}</p>
        <img src="${getImageFromStatus(data[i].status)}" alt="rain" class="w-40 h-40">
        <p class="text-red-500 text-2xl font-medium">${data[i].temperature}°C</p>`;
        list.appendChild(li);
    }
};
fetchWeatherAPI();
