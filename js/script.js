// https://api.openweathermap.org/data/2.5/weather?q=London&appid=f68afd7e0d3f9ad0b336b4f6416210e9

console.log("It's working!")
function handleGetData(event){
  event.preventDefault();
  const searchText = $("#search").val()
$.ajax({
     url: `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=f68afd7e0d3f9ad0b336b4f6416210e9`
     }) .then(
            (data) => {
        console.log(data)
        $("#city").text(data.Main)
        $("#temperature").text(data.Temp)
        $("#feels").text(data.Feels_like)
        $("#weather").text(data.Weather)
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
    }
    $('form').on("submit", handleGetData)