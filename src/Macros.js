const weatherStrings = {
    "clear": "Total cloud cover less than 20%",
    "pcloudy": "Total cloud cover between 20%-60%",
    "mcloudy": "Total cloud cover between 20%-80%",
    "lightsnow": "Precipitation rate less than 4mm/hr",
    "cloudy": "Total cloud cover over over 80%",
    "rain": "Rain with total cloud cover over 80%",
    "rainsnow": "Precipitation type to be ice pellets or freezing rain",
    "snow": "Snow with total cloud cover over 80%",
    "ts": "Lifted Index less than -5",
    "tsrain": "Lifted Index less than -5 with rain",
    "humid": "Relative humidity over 90% with total cloud cover less than 60%",
    "lightrain": "Precipitation rate less than 4mm/hr with total cloud cover more than 80%",
    "oshower": "Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%",
    "ishower": "Precipitation rate less than 4mm/hr with total cloud cover less than 60%",
    "-9999": "Undefined"
}

const windSpeedStrings = {
    "1": "No wind",
    "2": "0.3-3.4m/s (light)",
    "3": "3.4-8.0m/s (moderate)",
    "4": "8.0-10.8m/s (fresh)",
    "5": "10.8-17.2m/s (strong)",
    "6": "17.2-24.5m/s (gale)",
    "7": "24.5-32.6m/s (storm)",
    "8": "Over 32.6m/s (hurricane)"
}

const validationErrors = {
    "fetchError": "Weather forecast service is not available right now, please try again later.",
    "inputErrors": {
        "name": "This location is already exist",
        "latitude": "Latitude must be between -90.0 and 90.0",
        "longitude": "Longitude must be between -180.0 and 180.0"

    }
}

export {weatherStrings, windSpeedStrings, validationErrors};