import {useState, useEffect} from 'react'

const defaultSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0
}

export default (watch = true, settings = defaultSettings) => {
    const [position, setPosition] = useState({})
    const [error, setError] = useState(null)

    const onChange = ({coords}) => {
        setPosition({lat: coords.latitude, lng: coords.longitude})
    }

    const onError = (error) => {
        setError(error.message)
    }

    useEffect(() => {
        const geo = navigator.geolocation
        if (!geo) {
            setError('Geolocation is not supported')
            return;
        }

        let watcher = null
        if (watch) {
            watcher = geo.watchPosition(onChange, onError, settings)
        } else {
            geo.getCurrentPosition(onChange, onError, settings)
        }

        return() => watcher && geo.clearWatch(watcher)
    }, [settings, watch])

    return {
        ...position,
        error
    }
}
