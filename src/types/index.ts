export type optionType = {
    name: string
    lat: number
    lon: number
    country: string
}

export type forecastType = {
    name: string
    country: string
    sunrise: number
    sunset: number
    list: [{
        dt: number
        main: {
            temp: number
            feels_like: number
            temp_min: number
            temp_max: number
            pressure: number
            humidity: number
        }
        weather: [{
            main: string
            description: string
            icon: string
        }]
        clouds: {
            all: number
        }
        wind: {
            speed: number
            deg: number
            gust: number
        }
        visibility: number
        pop: number
    }]
}