import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";


export default function InfoBox({ info }) {
    const INIT_URL_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnaS5vK-Xv_9Z2ZP3Ic6Z5puffwIFKunSRw&s";

    const HOT_URL = "https://media.istockphoto.com/id/1257088461/photo/glowing-sun-on-orange-sky.webp?b=1&s=170667a&w=0&k=20&c=wKVmoe-9g59dPPhbdxCO2QGTgExzVt6Kc7xJdvbfcX4=";
    const COLD_URL = "https://media.istockphoto.com/id/1040375916/photo/teenage-girl-blowing-nose-on-winter-day.webp?b=1&s=170667a&w=0&k=20&c=xyjTVOaAbTa_npXkdZmmU_j3V_gTC2zD5UxCKH52XrU=";
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.webp?b=1&s=170667a&w=0&k=20&c=IroMBxRXyfm4K6sLvLaBBV3Wj6Bzv1kKJtDisEo5Jhg=";

    // let info = {
    //     city: "Delhi",
    //     feelslike: 36.32,
    //     temp: 34.05,
    //     tempMin: 34.05,
    //     tempMax: 34.05,
    //     humidity: 43,
    //     weather: "haze",
    // };

    return (
        <div className="InfoBox">
            {/* <h1>WeatehrInfo - {info.weather} */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 900 }}>
                    <CardMedia
                        sx={{ height: 240 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h3>{info.city}
                                {
                                    info.humidity > 80
                                        ? <ThunderstormIcon />
                                        : info.temp > 15
                                            ? <WbSunnyIcon />
                                            : <AcUnitIcon />
                                }
                            </h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <h3><p>Temprature = {info.temp}&deg;C</p> </h3>
                            <h3><p>Humidity = {info.humidity}</p></h3>
                            <h3><p>Max Temp = {info.tempMax}&deg;C</p></h3>
                            <h3><p>Min Temp = {info.tempMin}&deg;C</p></h3>
                            <h3><p>The weather can be described as <i>{info.weather}</i> feels like = {info.feelslike}&deg;C</p></h3>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
