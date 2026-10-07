

function WeatherIcon(props){
return(
    <div className="weather-image">
  <img src={props.img} alt={props.imgAlt} />
</div>
)

}

export default WeatherIcon;