// https://api.openweathermap.org/data/2.5/weather?q=London&appid=f68afd7e0d3f9ad0b336b4f6416210e9


$.ajax({
     url: `https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=f68afd7e0d3f9ad0b336b4f6416210e9`
     }) .then(
            (data) => {
        console.log(data)
            })