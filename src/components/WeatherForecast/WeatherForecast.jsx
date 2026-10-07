import './WeatherForecast.css'
import WeatherData from './WeatherData/WeatherData';
import WeatherIcon from './WeatherIcon/WeatherIcon';


function WeatherForecast(props) {
    return (
        <div className="weather">
            <WeatherIcon 
                img={props.img}
                imgAlt={props.imgAlt}
            />
            
            <WeatherData 
                day={props.day}
                conditions={props.conditions}
                time={props.time}
            />

            
        </div>
    )

}

export default WeatherForecast;